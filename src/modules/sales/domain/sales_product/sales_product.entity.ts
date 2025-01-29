import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity('sales_product')
export class SalesProduct {
  @PrimaryColumn()
  product_id: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}
