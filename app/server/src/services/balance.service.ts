import { Balance, User } from "../entities";
import { getRepository, createQueryBuilder } from "typeorm";
import { Request, Response, NextFunction } from "express";

export class BalanceService {
	static async createBalance(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { amount } = req.body;
		const { userId } = req.params;

		try {
			const user = await User.findOne({
				where: {
					id: userId,
				},
			});

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
		const { userId } = req.params;

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
		const { amount } = req.body;
		const { id } = req.params;

		try {
			await createQueryBuilder(Balance)
				.update({
					amount,
				})
				.where("id = :id", { id })
				.execute();

			const updatedBalance = await Balance.findOne({
				where: {
					id,
				},
			});

			res.status(200).json(updatedBalance);
		} catch (error) {
			console.log(error);
		}
	}
}
