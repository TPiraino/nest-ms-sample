import { Module } from '@nestjs/common';
import { Ms1Service } from './ms1.service';
import { Ms1Controller } from './ms1.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MS1 } from '../constant';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: MS1,
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  providers: [Ms1Service],
  controllers: [Ms1Controller],
  exports: [Ms1Service],
})
export class Ms1Module {}
