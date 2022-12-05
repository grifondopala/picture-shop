import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Products', synchronize: false })
export class ProductsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  cost: number;

  @Column()
  imageSrc: string;

  @Column({ default: false })
  isPriority: boolean;

  @Column({ default: false })
  isSold: boolean;
}
