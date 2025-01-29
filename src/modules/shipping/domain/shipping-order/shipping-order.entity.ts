import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('shipping_order')
export class ShippingOrder {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('uuid')
  order_id: string;

  @Column('text', { array: true })
  products: string[];

  @Column('text')
  shipping_address: string;

  @Column('boolean', { default: false })
  isPlaced: boolean;

  @Column('boolean', { default: false })
  isBilled: boolean;
}
