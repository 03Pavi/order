import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';
import {
  BillingAccount,
  CatalogProduct,
  SalesProduct,
  ShippingProduct,
} from '../../entities';
import { registerAs } from '@nestjs/config';
dotenv.config();

export default registerAs(
  'dbconfig.dev',
  (): PostgresConnectionOptions => ({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [BillingAccount, CatalogProduct, SalesProduct, ShippingProduct],
    synchronize: true,
  }),
);
