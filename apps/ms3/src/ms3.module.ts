import { Module } from '@nestjs/common';
import { Ms3Controller } from './ms3.controller';
import { Ms3Service } from './ms3.service';

@Module({
  imports: [],
  controllers: [Ms3Controller],
  providers: [Ms3Service],
})
export class Ms3Module {}
