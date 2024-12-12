import { Module } from '@nestjs/common';
import { MixedMs1Ms2Service } from './mixed-ms1-ms2.service';
import { MixedMs1Ms2Controller } from './mixed-ms1-ms2.controller';
import { Ms1Module } from '../ms1/ms1.module';
import { Ms2Module } from '../ms2/ms2.module';

@Module({
  imports: [Ms1Module, Ms2Module],
  providers: [MixedMs1Ms2Service],
  controllers: [MixedMs1Ms2Controller],
})
export class MixedMs1Ms2Module {}
