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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketController = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
let BasketController = class BasketController {
    constructor(basketService) {
        this.basketService = basketService;
    }
    create(userIp) {
        return this.basketService.create(userIp);
    }
    getBasket(userIp) {
        return this.basketService.getBasket(userIp);
    }
    addProduct(dto) {
        return this.basketService.addProduct(dto);
    }
    deleteProduct(dto) {
        return this.basketService.deleteProduct(dto);
    }
};
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)('userIp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/getBasket'),
    __param(0, (0, common_1.Body)('userIp')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "getBasket", null);
__decorate([
    (0, common_1.Post)('/addProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "addProduct", null);
__decorate([
    (0, common_1.Post)('/deleteProduct'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BasketController.prototype, "deleteProduct", null);
BasketController = __decorate([
    (0, common_1.Controller)('basket'),
    __metadata("design:paramtypes", [basket_service_1.BasketService])
], BasketController);
exports.BasketController = BasketController;
//# sourceMappingURL=basket.controller.js.map