import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingModule } from './modules/billing/billing.module';
import { SalesModule } from './modules/sales/sales.module';
import { ShippingModule } from './modules/shipping/shipping.module';
import dbConfig from './shared/database/db-config';
import { RabbitmqModule } from './shared/rabbitmq/rabbitmq.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: dbConfig,
    }),
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    BillingModule,
    SalesModule,
    ShippingModule,
    RabbitmqModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
