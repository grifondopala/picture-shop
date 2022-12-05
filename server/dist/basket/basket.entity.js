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
exports.BasketEntity = void 0;
const typeorm_1 = require("typeorm");
const products_entity_1 = require("../products/products.entity");
let BasketEntity = class BasketEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BasketEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BasketEntity.prototype, "userIp", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], BasketEntity.prototype, "isPaid", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => products_entity_1.ProductsEntity),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], BasketEntity.prototype, "products", void 0);
BasketEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Basket', synchronize: false })
], BasketEntity);
exports.BasketEntity = BasketEntity;
//# sourceMappingURL=basket.entity.js.map