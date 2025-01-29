import { ORDER_STATUS } from '../../../../shared/constants';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity('billing_orders')
export class SalesOrder {
  @PrimaryGeneratedColumn('uuid')
  uuid: string;

  @Column('uuid')
  order_id: string;

  @Column('uuid')
  customer_id: string;

  @Column('text', { array: true })
  products: string[];

  @Column('numeric', { precision: 10, scale: 2 })
  total_amount: number;

  @Column({ type: 'enum', enum: ORDER_STATUS, default: ORDER_STATUS.PENDING })
  status: ORDER_STATUS;
}
