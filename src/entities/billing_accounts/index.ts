import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity('billing_accounts')
export class BillingAccount {
  @PrimaryGeneratedColumn('uuid')
  billing_account_id: string;

  @Column({ type: 'varchar', length: 16 })
  card_number: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  balance: number;
}
