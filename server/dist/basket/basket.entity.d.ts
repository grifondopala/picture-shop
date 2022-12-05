import { ProductsEntity } from '../products/products.entity';
export declare class BasketEntity {
    id: number;
    userIp: string;
    isPaid: boolean;
    products: ProductsEntity[];
}
