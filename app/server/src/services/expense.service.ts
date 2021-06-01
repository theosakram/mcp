import { getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { Expense, User } from "../entities";

export class ExpenseService {
	static async getAllExpensesByUserId(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.params;

		try {
			const allExpenses = await getRepository(Expense)
				.createQueryBuilder("expense")
				.where("expense.userId = :userId", { userId })
				.getMany();

			res.status(200).json(allExpenses);
		} catch (error) {
			console.log(error);
		}
	}

	static async createExpense(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.params;
		const { title, amount } = req.body;

		try {
			const user = await User.findOne({
				where: {
					id: userId,
				},
			});

			const newExpenses = await Expense.create({
				amount,
				title,
				user,
			}).save();

			res.status(201).json(newExpenses);
		} catch (error) {
			console.log(error);
		}
	}
}
