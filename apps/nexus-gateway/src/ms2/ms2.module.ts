import { Module } from '@nestjs/common';
import { Ms2Service } from './ms2.service';
import { Ms2Controller } from './ms2.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MS2',
        transport: Transport.TCP,
        options: { port: 3002 },
      }
    ])
  ],
  controllers: [Ms2Controller],
  providers: [Ms2Service],
  exports: [Ms2Service]
})
export class Ms2Module {}
