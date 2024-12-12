import { Module } from '@nestjs/common';
import { Ms3Service } from './ms3.service';
import { Ms3Controller } from './ms3.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MS3',
        transport: Transport.TCP,
        options: { port: 3003 },
      },
    ]),
  ],
  controllers: [Ms3Controller],
  providers: [Ms3Service],
})
export class Ms3Module {}
