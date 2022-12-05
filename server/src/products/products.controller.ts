import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { SearchProductDto } from './dto/search-product.dto';
import { ChangeSoldDto } from './dto/change-sold.dto';

@Controller('products')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Post('/create')
  create(@Body() dto: CreateProductDto) {
    return this.productService.create(dto);
  }

  @Get('/getAll')
  getAll() {
    return this.productService.getAll();
  }

  @Get('/getSold')
  getSold() {
    return this.productService.getSold();
  }

  @Post('/search')
  search(@Body() dto: SearchProductDto) {
    return this.productService.search(dto);
  }

  @Post('/changeSold')
  changeSold(@Body() dto: ChangeSoldDto) {
    return this.productService.changeSold(dto);
  }
}
