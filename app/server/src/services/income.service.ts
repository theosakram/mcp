import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { Income, User } from "../entities";

export class IncomeService {
	static async getAllIncomesByUserId(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.body;

		try {
			const allIncomes = await getRepository(Income)
				.createQueryBuilder("income")
				.where("income.userId = :userId", { userId })
				.getMany();

			res.status(200).json(allIncomes);
		} catch (error) {
			console.log(error);
		}
	}

	static async createIncome(req: Request, res: Response, next: NextFunction) {
		const { source, amount } = req.body;
		const { userId } = req.params;

		try {
			const user = await User.findOne({
				where: {
					id: userId,
				},
			});

			const newExpenses = await Income.create({
				amount,
				source,
				user,
			}).save();

			res.status(201).json(newExpenses);
		} catch (error) {
			console.log(error);
		}
	}
}
