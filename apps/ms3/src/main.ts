import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { Ms3Module } from './ms3.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Ms3Module,
    {
      transport: Transport.TCP,
      options: {
        port: 3003
      }
    }
  );
  await app.listen();
}
bootstrap();
