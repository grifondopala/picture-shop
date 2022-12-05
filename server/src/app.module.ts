import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsEntity } from './products/products.entity';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { BasketModule } from './basket/basket.module';
import { BasketEntity } from './basket/basket.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3306,
      username: 'root',
      password: '',
      database: 'pictureShop',
      entities: [ProductsEntity, BasketEntity],
      synchronize: false,
    }),
    ConfigModule.forRoot(),
    ProductsModule,
    BasketModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
