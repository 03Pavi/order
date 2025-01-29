import { Body, Controller, Post } from '@nestjs/common';
import { CreateSalesOrderService } from './create-sales-order.service';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { AmqpConnection, RabbitRPC } from '@golevelup/nestjs-rabbitmq';

@Controller('sales-order')
export class CreateSalesOrderController {
  constructor(
    private readonly createSalesOrderService: CreateSalesOrderService,
    private readonly amqpConnection: AmqpConnection,
  ) {}

  @Post()
  async create(@Body() createSalesOrderDto: CreateSalesOrderDto) {
    // this.amqpConnection?.publish('sagittarius-a', 'abc', { msg: 'hello world' });
    return this.createSalesOrderService.create(createSalesOrderDto);
  }
}
