import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Products', synchronize: true })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  author: string;

  @Column()
  cost: number;

  @Column()
  imageSrc: string;

  @Column({ default: false })
  isPriority: boolean;

  @Column({ default: false })
  isSold: boolean;
}
