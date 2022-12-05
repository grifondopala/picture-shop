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
exports.BasketService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const basket_entity_1 = require("./basket.entity");
const products_service_1 = require("../products/products.service");
let BasketService = class BasketService {
    constructor(basketRepository, productService) {
        this.basketRepository = basketRepository;
        this.productService = productService;
    }
    async create(userIp) {
        const newBasket = { userIp: userIp, isPaid: false, products: [] };
        return await this.basketRepository.save(newBasket);
    }
    async getBasket(userIp) {
        const basket = await this.basketRepository.findOne({
            where: { userIp, isPaid: false },
            relations: ['products'],
        });
        return basket ? basket : this.create(userIp);
    }
    async addProduct(dto) {
        const product = (await this.productService.getById(dto.productId));
        const basket = (await this.getBasket(dto.userIp));
        basket.products = [...basket.products, product];
        return await this.basketRepository.save(basket);
    }
    async deleteProduct(dto) {
        const basket = (await this.getBasket(dto.userIp));
        basket.products = basket.products.filter((product) => product.id !== dto.productId);
        return this.basketRepository.save(basket);
    }
};
BasketService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(basket_entity_1.BasketEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        products_service_1.ProductsService])
], BasketService);
exports.BasketService = BasketService;
//# sourceMappingURL=basket.service.js.map