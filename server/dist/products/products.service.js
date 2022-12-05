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
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const products_entity_1 = require("./products.entity");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
let ProductsService = class ProductsService {
    constructor(productsRepository) {
        this.productsRepository = productsRepository;
    }
    async create(dto) {
        if (dto.secretKey !== process.env.DATABASE_SECRET_KEY)
            return 'secret key is not right';
        return await this.productsRepository.save(Object.assign({}, dto.product));
    }
    async getAll() {
        return await this.productsRepository.find();
    }
    async getSold() {
        return await this.productsRepository.find({ where: { isSold: true } });
    }
    async getById(productId) {
        return await this.productsRepository.findOne({ where: { id: productId } });
    }
    async search(dto) {
        if (dto.type === 0)
            return await this.productsRepository.find({
                where: { name: (0, typeorm_1.Like)(`%${dto.substring}%`) },
            });
        return await this.productsRepository.find({
            where: { isSold: true, name: (0, typeorm_1.Like)(`%${dto.substring}%`) },
        });
    }
    async changeSold(dto) {
        if (dto.secretKey !== process.env.DATABASE_SECRET_KEY)
            return 'secret key is not right';
        const product = await this.productsRepository.findOne({
            where: { id: dto.id },
        });
        return await this.productsRepository.save(Object.assign(Object.assign({}, product), { isSold: !product.isSold }));
    }
};
ProductsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(products_entity_1.ProductsEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map