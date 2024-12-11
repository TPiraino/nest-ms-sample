import { Module } from '@nestjs/common';
import { NexusGatewayController } from './nexus-gateway.controller';
import { NexusGatewayService } from './nexus-gateway.service';
import { Ms1Module } from './ms1/ms1.module';
import { Ms2Module } from './ms2/ms2.module';
import { Ms3Module } from './ms3/ms3.module';

@Module({
  imports: [Ms1Module, Ms2Module, Ms3Module],
  controllers: [NexusGatewayController],
  providers: [NexusGatewayService],
})
export class NexusGatewayModule {}
