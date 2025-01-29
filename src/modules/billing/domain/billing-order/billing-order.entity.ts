import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('billing_order')
export class BillingOrder {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('uuid')
  order_id: string;

  @Column('uuid')
  billing_account_id: string;

  @Column()
  shipping_address: string;
}
