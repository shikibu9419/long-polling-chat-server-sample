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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageConsumer = void 0;
const bull_1 = require("@nestjs/bull");
const bull_2 = require("bull");
let MessageConsumer = class MessageConsumer {
    onWaiting(jobId) {
        console.log(`Waiting job ${jobId}`);
    }
    onActive(job) {
        console.log(`Processing job ${job.id} of type ${job.name} with data ${job.data}...`);
    }
};
__decorate([
    bull_1.OnQueueWaiting(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessageConsumer.prototype, "onWaiting", null);
__decorate([
    bull_1.OnQueueActive(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof bull_2.Job !== "undefined" && bull_2.Job) === "function" ? _a : Object]),
    __metadata("design:returntype", void 0)
], MessageConsumer.prototype, "onActive", null);
MessageConsumer = __decorate([
    bull_1.Processor('message')
], MessageConsumer);
exports.MessageConsumer = MessageConsumer;
//# sourceMappingURL=message.consumer.js.map