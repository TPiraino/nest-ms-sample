import { NestFactory } from '@nestjs/core';
import { NexusGatewayModule } from './nexus-gateway.module';

async function bootstrap() {
  const app = await NestFactory.create(NexusGatewayModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
