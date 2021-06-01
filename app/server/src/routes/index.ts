import { Router } from "express";
import userRoutes from "./user.route";
import balanceRoutes from "./balance.route";
import expenseRoute from "./expense.route";
import incomeRoute from "./income.route";

const route = Router();

route.use("/balance", balanceRoutes);
route.use("/expense", expenseRoute);
route.use("/income", incomeRoute);
route.use("/user", userRoutes);

export default route;
