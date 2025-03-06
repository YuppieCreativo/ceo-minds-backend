import { type Request, type Response, Router } from "express";
import userRoutes from "./user/route";

const router = Router();

router.use("/user", userRoutes);

router.use((_: Request, res: Response) => {
	res.status(404).json({
		error: "Invalid route",
	});
});

export default router;
