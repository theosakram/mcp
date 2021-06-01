"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var income_service_1 = require("./../services/income.service");
var route = express_1.Router();
route.get("/:userId", income_service_1.IncomeService.getAllIncomesByUserId);
route.post("/:userId", income_service_1.IncomeService.createIncome);
exports.default = route;
