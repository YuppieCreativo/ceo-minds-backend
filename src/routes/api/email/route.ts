import { type Request, type Response, Router } from "express";
import emailController from "../../../controllers/emails.controller";

const router = Router();

router.post("/pricing", async (req: Request, res: Response) => {
    const { email } = req.body;
    const { error } = await emailController.sendPricing({ email });

    if (error) return res.status(500).json({ error: "Internal server error!" });
    return res.status(200).json({ message: "Pricing Send!" });
});

router.use((_: Request, res: Response) => {
    res.status(404).json({
        error: "Invalid route",
    });
});

export default router;
