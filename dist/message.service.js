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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessageService = void 0;
const common_1 = require("@nestjs/common");
const nestjs_redis_1 = require("nestjs-redis");
let MessageService = class MessageService {
    constructor(redisService) {
        this.redisService = redisService;
    }
    async pub(chatId, body) {
        const client = this.redisService.getClient('sub');
        const publisher = this.redisService.getClient('pub');
        client.subscribe(chatId, (err, count) => {
            console.log('subscribed:', err, count);
            publisher.publish(chatId, body).then((value) => console.log('pubbed', value)).catch((err) => console.log('err:', err));
        });
        console.log('published', chatId, body);
        return body;
    }
    async sub(chatId, res) {
        const client = this.redisService.getClient('sub');
        client.subscribe(chatId, () => {
            client.on('message', (channel, message) => {
                console.log('message received:', channel, message);
                res.send(message);
            });
        });
    }
};
MessageService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [nestjs_redis_1.RedisService])
], MessageService);
exports.MessageService = MessageService;
//# sourceMappingURL=message.service.js.map