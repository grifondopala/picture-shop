import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ProductsEntity } from '../products/products.entity';

@Entity({ name: 'Basket', synchronize: false })
export class BasketEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userIp: string;

  @Column({ default: false })
  isPaid: boolean;

  @ManyToMany(() => ProductsEntity)
  @JoinTable()
  products: ProductsEntity[];
}
