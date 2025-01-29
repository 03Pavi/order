import {
  Entity,
  Column,
  PrimaryColumn,
} from 'typeorm';

@Entity('billing_account')
export class BillingAccount {
  @PrimaryColumn()
  billing_account_id: string;

  @Column({ type: 'varchar', length: 16 })
  card_number: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balance: number;
}
