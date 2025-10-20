import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from 'nestjs-pino';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      logger:false,
      transport: Transport.RMQ,
      options: {
        urls: [process.env.RABBITMQ_URL || 'amqp://user:pass@localhost:5672'],
        queue: 'audit_queue',
        queueOptions: {
          durable: true,
        },
      },
    },
  );

  app.useLogger(app.get(Logger));

  await app.listen();

  const logger = app.get(Logger);
  logger.log('AuditService microservice is running and listening for messages...');
}
void bootstrap();