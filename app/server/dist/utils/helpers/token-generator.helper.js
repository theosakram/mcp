"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenHandler = void 0;
var jsonwebtoken_1 = require("jsonwebtoken");
var secretkey = process.env.secretkey;
var createToken = function (user) {
    return jsonwebtoken_1.sign(user, secretkey);
};
var verifyToken = function (token) {
    return jsonwebtoken_1.verify(token, secretkey);
};
exports.tokenHandler = {
    createToken: createToken,
    verifyToken: verifyToken,
};
