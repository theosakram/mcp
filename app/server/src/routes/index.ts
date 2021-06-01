import { Router } from "express";
import userRoutes from "./user.route";
import balanceroutes from "./balance.route";

const route = Router();

route.use("/balance", balanceroutes);
route.use("/user", userRoutes);

export default route;
