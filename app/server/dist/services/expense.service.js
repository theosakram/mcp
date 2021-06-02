"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExpenseService = void 0;
var typeorm_1 = require("typeorm");
var entities_1 = require("../entities");
var ExpenseService = /** @class */ (function () {
    function ExpenseService() {
    }
    ExpenseService.getAllExpensesByUserId = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, allExpenses, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.getRepository(entities_1.Expense)
                                .createQueryBuilder("expense")
                                .where("expense.userId = :userId", { userId: userId })
                                .getMany()];
                    case 2:
                        allExpenses = _a.sent();
                        res.status(200).json(allExpenses);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ExpenseService.createExpense = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, _a, title, amount, user, newExpenses, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        userId = req.params.userId;
                        _a = req.body, title = _a.title, amount = _a.amount;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 7, , 8]);
                        return [4 /*yield*/, entities_1.User.findOne({
                                where: {
                                    id: userId,
                                },
                                relations: ["balance"],
                            })];
                    case 2:
                        user = _b.sent();
                        if (!(user.balance.amount > amount)) return [3 /*break*/, 5];
                        return [4 /*yield*/, entities_1.Expense.create({
                                amount: amount,
                                title: title,
                                user: user,
                            }).save()];
                    case 3:
                        newExpenses = _b.sent();
                        return [4 /*yield*/, typeorm_1.createQueryBuilder(entities_1.Balance)
                                .update({
                                amount: user.balance.amount - amount,
                            })
                                .where("id = :id", { id: user.balance.id })
                                .execute()];
                    case 4:
                        _b.sent();
                        res.status(201).json({
                            title: newExpenses.title,
                            amount: newExpenses.amount,
                            user: newExpenses.user.fullName,
                            createdAt: newExpenses.createdAt,
                            balance: newExpenses.user.balance.amount - amount,
                        });
                        return [3 /*break*/, 6];
                    case 5:
                        res.status(400).json({ msg: "Saldo tidak mencukupi" });
                        _b.label = 6;
                    case 6: return [3 /*break*/, 8];
                    case 7:
                        error_2 = _b.sent();
                        console.log(error_2);
                        return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ExpenseService.getLastExpenseOfUser = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, lastExpense, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.params.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.getRepository(entities_1.Expense)
                                .createQueryBuilder("expense")
                                .where("expense.userId = :userId", { userId: userId })
                                .orderBy("expense.createdAt", "DESC")
                                .getOne()];
                    case 2:
                        lastExpense = _a.sent();
                        res.status(200).json(lastExpense);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _a.sent();
                        res.status(400).json(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return ExpenseService;
}());
exports.ExpenseService = ExpenseService;
