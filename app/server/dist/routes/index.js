"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var user_route_1 = __importDefault(require("./user.route"));
var balance_route_1 = __importDefault(require("./balance.route"));
var expense_route_1 = __importDefault(require("./expense.route"));
var income_route_1 = __importDefault(require("./income.route"));
var route = express_1.Router();
route.use("/balance", balance_route_1.default);
route.use("/expense", expense_route_1.default);
route.use("/income", income_route_1.default);
route.use("/user", user_route_1.default);
exports.default = route;
