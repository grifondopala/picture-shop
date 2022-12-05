import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BasketEntity } from './basket.entity';
import { AddProductDto } from './dto/add-product.dto';
import { ProductsEntity } from '../products/products.entity';
import { ProductsService } from '../products/products.service';

@Injectable()
export class BasketService {
  constructor(
    @InjectRepository(BasketEntity)
    private basketRepository: Repository<BasketEntity>,
    private productService: ProductsService,
  ) {}

  async create(userIp: string) {
    const newBasket = { userIp: userIp, isPaid: false, products: [] };
    return await this.basketRepository.save(newBasket);
  }

  async getBasket(userIp: string) {
    const basket = await this.basketRepository.findOne({
      where: { userIp, isPaid: false },
      relations: ['products'],
    });
    return basket ? basket : this.create(userIp);
  }

  async addProduct(dto: AddProductDto) {
    const product = (await this.productService.getById(
      dto.productId,
    )) as ProductsEntity;
    const basket = (await this.getBasket(dto.userIp)) as BasketEntity;
    basket.products = [...basket.products, product];
    return await this.basketRepository.save(basket);
  }

  async deleteProduct(dto: AddProductDto) {
    const basket = (await this.getBasket(dto.userIp)) as BasketEntity;
    basket.products = basket.products.filter(
      (product) => product.id !== dto.productId,
    );
    return this.basketRepository.save(basket);
  }
}
