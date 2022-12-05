"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketModule = void 0;
const common_1 = require("@nestjs/common");
const basket_service_1 = require("./basket.service");
const basket_controller_1 = require("./basket.controller");
const typeorm_1 = require("@nestjs/typeorm");
const products_entity_1 = require("../products/products.entity");
const basket_entity_1 = require("./basket.entity");
const products_service_1 = require("../products/products.service");
let BasketModule = class BasketModule {
};
BasketModule = __decorate([
    (0, common_1.Module)({
        providers: [basket_service_1.BasketService, products_service_1.ProductsService],
        controllers: [basket_controller_1.BasketController],
        imports: [typeorm_1.TypeOrmModule.forFeature([basket_entity_1.BasketEntity, products_entity_1.ProductsEntity])],
    })
], BasketModule);
exports.BasketModule = BasketModule;
//# sourceMappingURL=basket.module.js.map