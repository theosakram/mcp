import { createConnection } from "typeorm";
import { Balance, Expense, Income, User } from "../../entities";

export const dbConfig = {
	type: "postgres",
	database: "mc-payment",
	username: "postgres",
	password: "pgpw",
	logging: true,
	synchronize: true,
	entities: [Balance, Expense, Income, User],
} as Parameters<typeof createConnection>[0];
