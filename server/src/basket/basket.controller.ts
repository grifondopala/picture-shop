import { Body, Controller, Get, Post } from '@nestjs/common';
import { BasketService } from './basket.service';
import { AddProductDto } from './dto/add-product.dto';

@Controller('basket')
export class BasketController {
  constructor(private basketService: BasketService) {}

  @Post('/create')
  create(@Body('userIp') userIp: string) {
    return this.basketService.create(userIp);
  }

  @Post('/getBasket')
  getBasket(@Body('userIp') userIp: string) {
    return this.basketService.getBasket(userIp);
  }

  @Post('/addProduct')
  addProduct(@Body() dto: AddProductDto) {
    return this.basketService.addProduct(dto);
  }

  @Post('/deleteProduct')
  deleteProduct(@Body() dto: AddProductDto) {
    return this.basketService.deleteProduct(dto);
  }
}
