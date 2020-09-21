"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const bull_1 = require("bull");
const bull_2 = require("@nestjs/bull");
let MessageService = class MessageService {
    constructor(messageQueue) {
        this.messageQueue = messageQueue;
    }
    async add(chatId, body) {
        console.log('add');
        const job = await this.messageQueue.add({ chatId, body });
        return job;
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __param(0, bull_2.InjectQueue('message')),
    __metadata("design:paramtypes", [typeof (_a = typeof bull_1.Queue !== "undefined" && bull_1.Queue) === "function" ? _a : Object])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map