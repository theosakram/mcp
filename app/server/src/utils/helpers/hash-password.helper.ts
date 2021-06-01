import { genSaltSync, hashSync, compareSync } from "bcrypt";

const hashPassword = (password: string) => {
	const salt = genSaltSync(10);
	return hashSync(password, salt);
};

const comparePassword = (password: string, hashed: string) => {
	return compareSync(password, hashed);
};

export const passwordHandler = {
	hashPassword,
	comparePassword,
};
