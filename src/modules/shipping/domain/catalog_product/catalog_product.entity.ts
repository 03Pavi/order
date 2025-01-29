import { Exclude } from 'class-transformer';
import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from 'typeorm';

@Entity('catalog_product')
export class CatalogProduct {
  @PrimaryColumn('uuid')
  product_id: string;

  @Column({ type: 'varchar', length: 255 })
  name: string;

  @Column({ type: 'text' })
  description: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  product_url: string | null;
}
