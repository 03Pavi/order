import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SalesOrder } from '../domain/sales-order/sales-order.entity';
import { CreateSalesOrderDto } from './dto/create-sales-order.dto';
import { ORDER_STATUS } from 'src/shared/constants';

@Injectable()
export class CreateSalesOrderService {
  constructor(
    @InjectRepository(SalesOrder)
    private createSalesOrderRepository: Repository<SalesOrder>,
  ) {}

  async create(createOrder: CreateSalesOrderDto) {
    const { order_id, customer_id, products, total_amount, status } = createOrder;
    const order = new SalesOrder();
    order.customer_id = customer_id;
    order.order_id = order_id;
    order.products = products;
    order.total_amount = total_amount;
    order.status = ORDER_STATUS[status] || ORDER_STATUS.PENDING;

    const new_order = await this.createSalesOrderRepository.save(order);

    return { message: 'order Created Successfully', order: new_order };
  }
}
