import { Repository } from 'typeorm';
import { BasketEntity } from './basket.entity';
import { AddProductDto } from './dto/add-product.dto';
import { ProductsService } from '../products/products.service';
export declare class BasketService {
    private basketRepository;
    private productService;
    constructor(basketRepository: Repository<BasketEntity>, productService: ProductsService);
    create(userIp: string): Promise<{
        userIp: string;
        isPaid: boolean;
        products: any[];
    } & BasketEntity>;
    getBasket(userIp: string): Promise<BasketEntity | ({
        userIp: string;
        isPaid: boolean;
        products: any[];
    } & BasketEntity)>;
    addProduct(dto: AddProductDto): Promise<BasketEntity>;
    deleteProduct(dto: AddProductDto): Promise<BasketEntity>;
}
