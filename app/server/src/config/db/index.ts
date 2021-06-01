import { Balance, User } from "../../entities";
import { createConnection } from "typeorm";

export const dbConfig = {
	type: "postgres",
	database: "mc-payment",
	username: "postgres",
	password: "pgpw",
	logging: true,
	synchronize: true,
	entities: [Balance, User],
} as Parameters<typeof createConnection>[0];
