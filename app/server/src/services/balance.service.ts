import { Balance } from "../entities";
import { getRepository, createQueryBuilder } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class BalanceService {
	static async createBalance(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { amount, user } = req.body;

		try {
			const balance = await Balance.create({
				amount,
				user,
			}).save();

			res.status(201).json(balance);
		} catch (error) {
			console.log(error);
		}
	}

	static async getBalanceByUserId(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.body;

		try {
			const balance = await getRepository(Balance)
				.createQueryBuilder("user")
				.where("user.id = :userId", { userId })
				.getOne();

			res.status(200).json(balance);
		} catch (error) {
			console.log(error);
		}
	}

	static async updateBalance(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { id, amount } = req.body;

		try {
			const updatedBalance = await createQueryBuilder()
				.update(Balance)
				.set({
					amount,
				})
				.where("id = :id", { id })
				.execute();

			res.status(200).json(updatedBalance);
		} catch (error) {
			console.log(error);
		}
	}
}
