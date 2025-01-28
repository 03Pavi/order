import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { CatalogProduct } from "../catalog_products";

@Entity('sales_products')
export class SalesProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CatalogProduct, { onDelete: 'CASCADE' })
  product: CatalogProduct;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  price: number;
}