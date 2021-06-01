"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConfig = void 0;
var entities_1 = require("../../entities");
exports.dbConfig = {
    type: "postgres",
    database: "mc-payment",
    username: "postgres",
    password: "pgpw",
    logging: true,
    synchronize: true,
    entities: [entities_1.Balance, entities_1.User],
};
