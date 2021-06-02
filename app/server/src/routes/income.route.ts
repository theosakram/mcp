import { Router } from "express";
import { IncomeService } from "./../services/income.service";

const route = Router();

route.get("/last/:userId", IncomeService.getLastIncomeOfUser);
route.get("/:userId", IncomeService.getAllIncomesByUserId);
route.post("/:userId", IncomeService.createIncome);

export default route;
