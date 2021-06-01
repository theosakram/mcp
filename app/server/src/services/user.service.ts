import { Request, Response, NextFunction } from "express";
import { User } from "../entities";

export class UserService {
	static async register(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;

		try {
			const user = await User.create({
				fullName: `User ${email}`,
				email,
				password,
			}).save();

			res.status(201).json(user);
		} catch (error) {
			console.log(error);
		}
	}

	static async login(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;

		try {
			const user = await User.findOne({
				where: {
					email,
				},
			});

			res.status(200).json(user);
		} catch (error) {
			console.log(error);
		}
	}
}
