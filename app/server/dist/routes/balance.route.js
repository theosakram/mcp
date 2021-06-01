"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var balance_service_1 = require("../services/balance.service");
var route = express_1.Router();
route.get("/:userId", balance_service_1.BalanceService.getBalanceByUserId);
route.put("/:id", balance_service_1.BalanceService.updateBalance);
exports.default = route;
