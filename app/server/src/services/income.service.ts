import { createQueryBuilder, getRepository } from "typeorm";
import { Request, Response, NextFunction } from "express";
import { Balance, Income, User } from "../entities";

export class IncomeService {
	static async getAllIncomesByUserId(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.params;

		try {
			const allIncome = await getRepository(Income)
				.createQueryBuilder("income")
				.where("income.userId = :userId", { userId })
				.getMany();

			res.status(200).json(allIncome);
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
				relations: ["balance"],
			});

			const newIncome = await Income.create({
				amount,
				source,
				user,
			}).save();

			await createQueryBuilder(Balance)
				.update({
					amount: user.balance.amount + amount,
				})
				.where("id = :id", { id: user.balance.id })
				.execute();

			res.status(201).json({
				title: newIncome.source,
				amount: newIncome.amount,
				user: newIncome.user.fullName,
				createdAt: newIncome.createdAt,
				balance: newIncome.user.balance.amount + amount,
			});
		} catch (error) {
			console.log(error);
		}
	}

	static async getLastIncomeOfUser(
		req: Request,
		res: Response,
		next: NextFunction
	) {
		const { userId } = req.params;

		try {
			const lastIncome = await getRepository(Income)
				.createQueryBuilder("income")
				.where("income.userId = :userId", { userId })
				.orderBy("income.createdAt", "DESC")
				.getOne();

			res.status(200).json(lastIncome);
		} catch (error) {
			res.status(400).json(error);
		}
	}
}
