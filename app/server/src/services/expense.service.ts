import { createQueryBuilder, getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { Balance, Expense, User } from "../entities";

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
				relations: ["balance"],
			});

			if (user.balance.amount > amount) {
				const newExpenses = await Expense.create({
					amount,
					title,
					user,
				}).save();

				await createQueryBuilder(Balance)
					.update({
						amount: user.balance.amount - amount,
					})
					.where("id = :id", { id: user.balance.id })
					.execute();

				res.status(201).json({
					title: newExpenses.title,
					amount: newExpenses.amount,
					user: newExpenses.user.fullName,
					createdAt: newExpenses.createdAt,
					balance: newExpenses.user.balance.amount - amount,
				});
			} else res.status(400).json({ msg: "Saldo tidak mencukupi" });
		} catch (error) {
			console.log(error);
		}
	}

	static async getLastExpenseOfUser(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.params;

		try {
			const lastExpense = await getRepository(Expense)
				.createQueryBuilder("expense")
				.where("expense.userId = :userId", { userId })
				.orderBy("expense.createdAt", "DESC")
				.getOne();

			res.status(200).json(lastExpense);
		} catch (error) {
			res.status(400).json(error);
		}
	}
}
