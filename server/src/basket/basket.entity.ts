import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';
import { ProductsEntity } from '../products/products.entity';

@Entity({ name: 'Basket', synchronize: true })
export class BasketEntity {
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Column()
  userIp: string;

  @Column({ default: false })
  isPaid: boolean;

  @ManyToMany(() => ProductsEntity)
  @JoinTable()
  products: ProductsEntity[];
}
