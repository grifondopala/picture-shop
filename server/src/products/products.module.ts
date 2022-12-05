import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './products.entity';

@Module({
  providers: [ProductsService],
  controllers: [ProductsController],
  imports: [TypeOrmModule.forFeature([ProductsEntity])],
  exports: [ProductsService],
})
export class ProductsModule {}
