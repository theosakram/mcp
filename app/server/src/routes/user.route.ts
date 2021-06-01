import { Router } from "express";
import { UserService } from "../services";

const route = Router();

route.use("/register", UserService.register);
route.use("/login", UserService.login);

export default route;
