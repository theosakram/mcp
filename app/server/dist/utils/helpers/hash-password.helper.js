"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordHandler = void 0;
var bcrypt_1 = require("bcrypt");
var hashPassword = function (password) {
    var salt = bcrypt_1.genSaltSync(10);
    return bcrypt_1.hashSync(password, salt);
};
var comparePassword = function (password, hashed) {
    return bcrypt_1.compareSync(password, hashed);
};
exports.passwordHandler = {
    hashPassword: hashPassword,
    comparePassword: comparePassword,
};
