import { type Request, type Response, Router } from "express";
import userRoutes from "./user/route";
import emailRoutes from "./email/route";

const router = Router();

router.use("/user", userRoutes);
router.use("/email", emailRoutes);

router.use((_: Request, res: Response) => {
    res.status(404).json({
        error: "Invalid route",
    });
});

export default router;
