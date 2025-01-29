import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';
import * as dotenv from 'dotenv';
import { registerAs } from '@nestjs/config';
import { ShippingProduct } from '../../modules/shipping/domain/shipping_product/shipping_product.entity';
import { SalesOrder } from '../../modules/sales/domain/sales-order/sales-order.entity';
import { BillingOrder } from '../../modules/billing/domain/billing-order/billing-order.entity';
import { ShippingOrder } from '../../modules/shipping/domain/shipping-order/shipping-order.entity';
import { BillingAccount } from '../../modules/billing/domain/billing-account/billing-account.entity';
import { CatalogProduct } from '../../modules/shipping/domain/catalog_product/catalog_product.entity';
import { SalesProduct } from '../../modules/sales/domain/sales_product/sales_product.entity';
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
    entities: [BillingOrder, SalesOrder, ShippingOrder,ShippingProduct,BillingAccount,CatalogProduct,SalesProduct],
    synchronize: true,
  }),
);
