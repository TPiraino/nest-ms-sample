import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { NestFactory } from '@nestjs/core';
import { Ms2Module } from './ms2.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    Ms2Module,
    {
      transport: Transport.TCP,
      options: {
        port: 3002,
      },
    },
  );
  await app.listen();
}
bootstrap();
