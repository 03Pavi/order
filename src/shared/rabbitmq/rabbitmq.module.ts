import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Module } from '@nestjs/common';

@Module({
  imports: [
    RabbitMQModule.forRoot({
      exchanges: [
        {
          name: 'sagittarius-a',
          type: 'fanout',
        },
      ],
      uri: 'amqp://localhost:5672',
      enableControllerDiscovery: true,
    }),

    RabbitmqModule,
  ],
  exports: [RabbitMQModule],
})
export class RabbitmqModule {}
