import { BasketService } from './basket.service';
import { AddProductDto } from './dto/add-product.dto';
export declare class BasketController {
    private basketService;
    constructor(basketService: BasketService);
    create(userIp: string): Promise<{
        userIp: string;
        isPaid: boolean;
        products: any[];
    } & import("./basket.entity").BasketEntity>;
    getBasket(userIp: string): Promise<import("./basket.entity").BasketEntity | ({
        userIp: string;
        isPaid: boolean;
        products: any[];
    } & import("./basket.entity").BasketEntity)>;
    addProduct(dto: AddProductDto): Promise<import("./basket.entity").BasketEntity>;
    deleteProduct(dto: AddProductDto): Promise<import("./basket.entity").BasketEntity>;
}
