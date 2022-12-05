import { Module } from '@nestjs/common';
import { BasketService } from './basket.service';
import { BasketController } from './basket.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from '../products/products.entity';
import { BasketEntity } from './basket.entity';
import { ProductsService } from '../products/products.service';

@Module({
  providers: [BasketService, ProductsService],
  controllers: [BasketController],
  imports: [TypeOrmModule.forFeature([BasketEntity, ProductsEntity])],
})
export class BasketModule {}
