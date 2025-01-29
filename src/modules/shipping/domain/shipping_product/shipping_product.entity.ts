import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity('shipping_product')
export class ShippingProduct {
  @PrimaryColumn('uuid')
  product_id: string;

  @Column({ type: 'int' })
  quantity_on_hand: number;
}
