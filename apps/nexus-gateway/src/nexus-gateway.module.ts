import { Module } from '@nestjs/common';
import { Ms1Module } from './ms1/ms1.module';
import { Ms2Module } from './ms2/ms2.module';
import { Ms3Module } from './ms3/ms3.module';
import { MixedMs1Ms2Module } from './mixed-ms1-ms2/mixed-ms1-ms2.module';

@Module({
  imports: [Ms1Module, Ms2Module, Ms3Module, MixedMs1Ms2Module],
  controllers: [],
  providers: [],
})
export class NexusGatewayModule {}
