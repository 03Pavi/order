import { Module } from '@nestjs/common';
import { CreateSalesOrderModule } from './create-sales-order/create-sales-order.module';

@Module({
  imports: [CreateSalesOrderModule],
})
export class SalesModule {}
