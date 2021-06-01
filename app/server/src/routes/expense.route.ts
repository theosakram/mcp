import { Router } from "express";
import { ExpenseService } from "./../services/expense.service";

const route = Router();

route.get("/:userId", ExpenseService.getAllExpensesByUserId);
route.post("/:userId", ExpenseService.createExpense);

export default route;
