import { Balance, User } from "../entities";
import { Request, Response, NextFunction } from "express";
import { passwordHandler, tokenHandler } from "../utils/helpers";

export class UserService {
	static async register(req: Request, res: Response, next: NextFunction) {
		const { email, password } = req.body;

		try {
			const user = await User.create({
				fullName: `User ${email}`,
				email,
				password: passwordHandler.hashPassword(password),
			}).save();

			const balance = await Balance.create({
				amount: 0,
				user,
			}).save();

			res.status(201).json({ user, balance });
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

			if (user) {
				if (passwordHandler.comparePassword(password, user.password)) {
					const access_token = tokenHandler.createToken({
						id: user.id,
						email: user.email,
					});
					res.status(200).json({
						msg: "User logged in successfully",
						access_token,
						name: user.fullName,
						id: user.id,
					});
				} else throw { status: 400, msg: "Wrong email/ password" };
			} else throw { status: 400, msg: "User not found" };
		} catch (error) {
			console.log(error);
		}
	}
}
