import "reflect-metadata";
import { config } from "dotenv";
config();

import cors from "cors";
import express from "express";
import { createConnection } from "typeorm";
import { dbConfig } from "./config/db";
import mainRoutes from "./routes";

const PORT = process.env.PORT || 4000;

const main = async () => {
	await createConnection(dbConfig);

	const app = express();

	app.use(cors());
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(mainRoutes);

	app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
};

main();
