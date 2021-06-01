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
exports.BalanceService = void 0;
var entities_1 = require("../entities");
var typeorm_1 = require("typeorm");
var BalanceService = /** @class */ (function () {
    function BalanceService() {
    }
    BalanceService.createBalance = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, amount, user, balance, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, amount = _a.amount, user = _a.user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, entities_1.Balance.create({
                                amount: amount,
                                user: user,
                            }).save()];
                    case 2:
                        balance = _b.sent();
                        res.status(201).json(balance);
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _b.sent();
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BalanceService.getBalanceByUserId = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var userId, balance, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userId = req.body.userId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.getRepository(entities_1.Balance)
                                .createQueryBuilder("user")
                                .where("user.id = :userId", { userId: userId })
                                .getOne()];
                    case 2:
                        balance = _a.sent();
                        res.status(200).json(balance);
                        return [3 /*break*/, 4];
                    case 3:
                        error_2 = _a.sent();
                        console.log(error_2);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    BalanceService.updateBalance = function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, id, amount, updatedBalance, error_3;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, id = _a.id, amount = _a.amount;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, typeorm_1.createQueryBuilder()
                                .update(entities_1.Balance)
                                .set({
                                amount: amount,
                            })
                                .where("id = :id", { id: id })
                                .execute()];
                    case 2:
                        updatedBalance = _b.sent();
                        res.status(200).json(updatedBalance);
                        return [3 /*break*/, 4];
                    case 3:
                        error_3 = _b.sent();
                        console.log(error_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return BalanceService;
}());
exports.BalanceService = BalanceService;
