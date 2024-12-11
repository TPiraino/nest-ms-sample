import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { Ms1Module } from './ms1.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Ms1Module,
    {
      transport: Transport.TCP,
      options: {
        port: 3001
      }
    }
  );
  await app.listen();
}
bootstrap();
