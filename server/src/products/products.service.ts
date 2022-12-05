import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsEntity } from './products.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { SearchProductDto } from './dto/search-product.dto';
import { ChangeSoldDto } from './dto/change-sold.dto';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(ProductsEntity)
    private productsRepository: Repository<ProductsEntity>,
  ) {}

  async create(dto: CreateProductDto) {
    if (dto.secretKey !== process.env.DATABASE_SECRET_KEY)
      return 'secret key is not right';
    return await this.productsRepository.save({ ...dto.product });
  }

  async getAll() {
    return await this.productsRepository.find();
  }

  async getSold() {
    return await this.productsRepository.find({ where: { isSold: true } });
  }

  async getById(productId: number) {
    return await this.productsRepository.findOne({ where: { id: productId } });
  }

  async search(dto: SearchProductDto) {
    if (dto.type === 0)
      return await this.productsRepository.find({
        where: { name: Like(`%${dto.substring}%`) },
      });
    return await this.productsRepository.find({
      where: { isSold: true, name: Like(`%${dto.substring}%`) },
    });
  }

  async changeSold(dto: ChangeSoldDto) {
    if (dto.secretKey !== process.env.DATABASE_SECRET_KEY)
      return 'secret key is not right';
    const product = await this.productsRepository.findOne({
      where: { id: dto.id },
    });
    return await this.productsRepository.save({
      ...product,
      isSold: !product.isSold,
    });
  }
}
