"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var expense_service_1 = require("./../services/expense.service");
var route = express_1.Router();
route.get("/:userId", expense_service_1.ExpenseService.getAllExpensesByUserId);
route.get("/last/:userId", expense_service_1.ExpenseService.getLastExpenseOfUser);
route.post("/:userId", expense_service_1.ExpenseService.createExpense);
exports.default = route;
