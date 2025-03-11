import type { Types } from "mongoose";

export interface User {
  _id: Types.ObjectId;
  fullName: string;
  email: string;
  phone: string;
  role: string;
  socialMedia: string;
  comments: string;
  servicePack?: string;
  paymentMethod?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserDTO extends Omit<User, "_id"> {}
