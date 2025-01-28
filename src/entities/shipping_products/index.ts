import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from "typeorm";
import { CatalogProduct } from "../catalog_products";

@Entity('shipping_products')
export class ShippingProduct {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => CatalogProduct, { onDelete: 'CASCADE' })
  product: CatalogProduct;

  @Column({ type: 'int' })
  quantity_on_hand: number;
}