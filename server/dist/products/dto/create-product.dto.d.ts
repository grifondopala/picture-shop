import { ProductsEntity } from '../products.entity';
export interface CreateProductDto {
    product: ProductsEntity;
    secretKey: string;
}
