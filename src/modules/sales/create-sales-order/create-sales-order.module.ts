import { Module } from '@nestjs/common';
import { CreateSalesOrderController } from './create-sales-order.controller';
import { CreateSalesOrderService } from './create-sales-order.service';
import { SalesOrder } from '../domain/sales-order/sales-order.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';

@Module({
  imports: [TypeOrmModule.forFeature([SalesOrder])],
  controllers: [CreateSalesOrderController],
  providers: [CreateSalesOrderService, AmqpConnection],
})
export class CreateSalesOrderModule {}
