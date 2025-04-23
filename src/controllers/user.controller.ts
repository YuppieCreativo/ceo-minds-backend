import type { Request, Response } from "express";
import type { User, UserDTO } from "../interfaces/user.model";
import UserModel from "../models/user.model";
const { GoogleSpreadsheet } = require("google-spreadsheet");
import { JWT } from "google-auth-library";
import { config } from "../config";
import EmailController from "./emails.controller";

const serviceAccountAuth = new JWT({
  email: config.client_email,
  key: config.private_key,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

class UserController {
  async getUserList(_req: Request, res: Response) {
    const users = await UserModel.find({});

    if (!users || users.length === 0)
      return res.status(404).json({ error: "No users found" });

    return res.status(200).json(users);
  }

  async getUser(req: Request, res: Response) {
    const userId = req.params.id;

    try {
      const user = await UserModel.findById(userId);

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.status(200).json(user);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const {
        fullName,
        comments,
        role,
        email,
        phone,
        socialMedia,
        paymentMethod,
        servicePack,
      }: UserDTO = req.body;

      const existUser = await this.get(email);

      if (existUser) {
        if (
          (paymentMethod || servicePack) &&
          !existUser.paymentMethod &&
          !existUser.servicePack
        ) {
          const userUpdated = await this.update(existUser._id.toString(), {
            paymentMethod,
            servicePack,
          });

          const doc = new GoogleSpreadsheet(
            config.SHEET_ID,
            serviceAccountAuth
          );

          await doc.loadInfo();

          const sheet = doc.sheetsByIndex[0];

          const rows = await sheet.getRows();

          const updatedRow = rows.find(
            (row: any) => row.get("Email") === email
          );

          await updatedRow.assign({
            "Metodo de Pago": paymentMethod,
            Servicio: servicePack,
          });

          await updatedRow.save();

          const { error } = await EmailController.sendPricing({ email });

          if (error) {
            return res.status(500).json({ error });
          }

          return res.status(200).json(userUpdated);
        } else if (
          (!paymentMethod && !servicePack) ||
          (paymentMethod &&
            servicePack &&
            existUser.paymentMethod &&
            existUser.servicePack)
        ) {
          return res.status(409).json(existUser);
        }
      }

      const userSaved = await this.createUser(req.body);

      if (!userSaved) {
        return res.status(500).json({ error: "Internal Server Error" });
      }

      const doc = new GoogleSpreadsheet(config.SHEET_ID, serviceAccountAuth);

      await doc.loadInfo();

      const sheet = doc.sheetsByIndex.find(
        (sheet: { title: string }) => sheet.title.toLowerCase() === "users"
      );

      await sheet.addRow({
        Nombre: fullName,
        Email: email,
        "Phone Number": phone,
        Cargo: role,
        "Redes Sociales": socialMedia,
        Comentarios: comments,
        "Metodo de Pago": paymentMethod,
        Servicio: servicePack,
        "Created At": new Date(`${userSaved.createdAt}`).toUTCString(),
      });

      const { error } = await EmailController.sendEmail({ email });

      if (userSaved.paymentMethod && userSaved.servicePack) {
        const { error } = await EmailController.sendPricing({ email });
        if (error) {
          return res.status(500).json({ error });
        }
      }

      if (error) {
        console.log("Error to send email after create user", error);
      }

      return res.status(201).json(userSaved);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }

  private async get(email: string): Promise<User | null> {
    return await UserModel.findOne({ email });
  }

  private async update(
    _id: string,
    fields: Partial<Omit<User, "_id">>
  ): Promise<User | null> {
    return await UserModel.findByIdAndUpdate(
      {
        _id,
      },
      {
        $set: fields,
      },
      {
        new: true,
      }
    );
  }

  private async createUser(
    user: Partial<Omit<User, "_id">>
  ): Promise<User | null> {
    const newUser = new UserModel(user);

    return await newUser.save();
  }

  async sinchronize(_req: Request, res: Response) {
    const doc = new GoogleSpreadsheet(config.SHEET_ID, serviceAccountAuth);

    await doc.loadInfo();

    const sheet = doc.sheetsByIndex[0];

    const rows = await sheet.getRows();

    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
    const usersInSheet = rows.map((row: any) => {
      return {
        fullName: row.get("Nombre"),
        email: row.get("Email"),
        phone: row.get("Phone Number"),
        role: row.get("Cargo"),
        socialMedia: row.get("Redes Sociales"),
        comments: row.get("Comentarios"),
        paymentMethod: row.get("Metodo de Pago"),
        servicePack: row.get("Servicio"),
      };
    });

    const users = await UserModel.find({});

    const usersFiltered = users.filter(
      (user) =>
        !usersInSheet.some(
          // biome-ignore lint/suspicious/noExplicitAny: <explanation>
          (userInSheet: any) => userInSheet.email === user.email
        )
    );

    if (usersFiltered.length === 0) {
      return res
        .status(200)
        .json({ message: "CEOMinds leads form is up to date" });
    }

    for await (const user of usersFiltered) {
      await sheet.addRow({
        Nombre: user.fullName,
        Email: user.email,
        "Phone Number": user.phone,
        Cargo: user.role,
        "Redes Sociales": user.socialMedia,
        Comentarios: user.comments,
        "Metodo de Pago": user.paymentMethod,
        Servicio: user.servicePack,
        "Created At": new Date(`${user.createdAt}`).toUTCString(),
      });
    }

    return res
      .status(200)
      .json({ message: `${usersFiltered.length} new Leads added` });
  }

  async attendance(req: Request, res: Response) {
    const user: Pick<User, "email" | "fullName"> = req.body;

    try {
      const doc = new GoogleSpreadsheet(config.SHEET_ID, serviceAccountAuth);

      await doc.loadInfo();

      const sheet = doc.sheetsByIndex.find(
        (sheet: { title: string }) => sheet.title.toLowerCase() === "attendance"
      );

      const rows = await sheet.getRows();

      const userInSheet = rows.find(
        (row: any) =>
          row.get("Correo").trim().toLowerCase() ===
          user.email.trim().toLowerCase()
      );

      if (!userInSheet) {
        return res.status(404).json({ error: "User not found" });
      }

      const currentAttendance = userInSheet.get("Asistencia");

      if (currentAttendance === "Confirmado") {
        return res.status(400).json({ error: "User already confirmed" });
      }

      userInSheet.set("Asistencia", "Confirmado");

      await userInSheet.save();

      const { error } = await EmailController.sendAttendance({
        userEmail: user.email.toLowerCase(),
      });

      if (error) {
        console.log("Error to send email after create user", error);
      }

      return res.status(200).json({ message: "Attendance confirmed" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }
}

export default new UserController();
