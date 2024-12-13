import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Ms2ExampleCreateDto } from './dto/ms2-example-create.dto';
import { MS2_PATERNS } from '@app/contracts';
import { MS2 } from '../constant';

@Injectable()
export class Ms2Service {
  constructor(@Inject(MS2) private readonly ms2: ClientProxy) {}

  create(ms2ExampleCreateDto: Ms2ExampleCreateDto) {
    return this.ms2.emit(MS2_PATERNS.CREATE, ms2ExampleCreateDto);
  }

  findAll() {
    return this.ms2.send(MS2_PATERNS.FIND_ALL, {});
  }
}
