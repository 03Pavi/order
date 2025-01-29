import { ORDER_STATUS } from '../../../../shared/constants';
import { IsUUID, IsArray, IsInt, IsEnum, IsNumber, Min } from 'class-validator';

export class CreateSalesOrderDto {
  @IsUUID()
  order_id: string;

  @IsUUID()
  customer_id: string;

  @IsArray()
  products: string[];

  @IsNumber()
  @Min(10) 
  total_amount: number;

  @IsEnum(ORDER_STATUS)
  status: ORDER_STATUS;
}
