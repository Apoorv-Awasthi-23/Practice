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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const app = (0, express_1.default)();
app.listen(3000, () => {
    console.log("Server started on http://localhost:3000");
});
app.get("/users/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield prisma.user.findFirst({
        where: {
            id: parseInt(id),
        },
        select: {
            username: true,
            firstName: true,
            lastName: true,
        },
    });
    res.json(data);
}));
app.post("/api", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    yield prisma.user.create({
        data: {
            username: "Apoorv24",
            password: "12345",
            firstName: "Apoorv",
            lastName: "Awasthi",
        },
    });
}));
