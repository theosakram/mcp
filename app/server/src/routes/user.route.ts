import { Router } from "express";
import { UserService } from "../services";

const route = Router();

route.get("/:id", UserService.getUserById);
route.post("/register", UserService.register);
route.post("/login", UserService.login);

export default route;
