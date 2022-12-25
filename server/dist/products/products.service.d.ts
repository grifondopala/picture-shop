import { CreateProductDto } from './dto/create-product.dto';
import { ProductsEntity } from './products.entity';
import { Repository } from 'typeorm';
import { SearchProductDto } from './dto/search-product.dto';
import { ChangeSoldDto } from './dto/change-sold.dto';
export declare class ProductsService {
    private productsRepository;
    constructor(productsRepository: Repository<ProductsEntity>);
    create(dto: CreateProductDto): Promise<"secret key is not right" | ({
        id: number;
        name: string;
        author: string;
        cost: number;
        imageSrc: string;
        isPriority: boolean;
        isSold: boolean;
    } & ProductsEntity)>;
    getAll(): Promise<ProductsEntity[]>;
    getSold(): Promise<ProductsEntity[]>;
    getById(productId: number): Promise<ProductsEntity>;
    search(dto: SearchProductDto): Promise<ProductsEntity[]>;
    changeSold(dto: ChangeSoldDto): Promise<"secret key is not right" | ({
        isSold: boolean;
        id: number;
        name: string;
        author: string;
        cost: number;
        imageSrc: string;
        isPriority: boolean;
    } & ProductsEntity)>;
}
