"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var services_1 = require("../services");
var route = express_1.Router();
route.get("/:id", services_1.UserService.getUserById);
route.post("/register", services_1.UserService.register);
route.post("/login", services_1.UserService.login);
exports.default = route;
