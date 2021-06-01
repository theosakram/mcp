import { sign, verify } from "jsonwebtoken";

const secretkey = process.env.secretkey;

const createToken = (user: Object) => {
	return sign(user, secretkey);
};

const verifyToken = (token: any) => {
	return verify(token, secretkey);
};

export const tokenHandler = {
	createToken,
	verifyToken,
};
