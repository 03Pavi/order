import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('catalog_products')
export class CatalogProduct {
  @PrimaryGeneratedColumn('uuid')
  product_id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  product_url: string | null;
}
