import { Router } from "express";
import { UserService } from "../services";
import { BalanceService } from "../services/balance.service";

const route = Router();

route.get("/:userId", BalanceService.getBalanceByUserId);
route.put("/:id", BalanceService.updateBalance);

export default route;
