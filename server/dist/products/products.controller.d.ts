import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { SearchProductDto } from './dto/search-product.dto';
import { ChangeSoldDto } from './dto/change-sold.dto';
export declare class ProductsController {
    private productService;
    constructor(productService: ProductsService);
    create(dto: CreateProductDto): Promise<"secret key is not right" | ({
        id: number;
        name: string;
        author: string;
        cost: number;
        imageSrc: string;
        isPriority: boolean;
        isSold: boolean;
    } & import("./products.entity").ProductsEntity)>;
    getAll(): Promise<import("./products.entity").ProductsEntity[]>;
    getSold(): Promise<import("./products.entity").ProductsEntity[]>;
    search(dto: SearchProductDto): Promise<import("./products.entity").ProductsEntity[]>;
    changeSold(dto: ChangeSoldDto): Promise<"secret key is not right" | ({
        isSold: boolean;
        id: number;
        name: string;
        author: string;
        cost: number;
        imageSrc: string;
        isPriority: boolean;
    } & import("./products.entity").ProductsEntity)>;
}
