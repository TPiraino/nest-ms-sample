import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Ms2ExampleCreateDto } from './dto/ms2-example-create.dto';

@Injectable()
export class Ms2Service {
  constructor(@Inject('MS2') private readonly ms2: ClientProxy) {}

  create(ms2ExampleCreateDto: Ms2ExampleCreateDto) {
    return this.ms2.emit('ms2.create', ms2ExampleCreateDto)
  }

  findAll() {
    return this.ms2.send('ms2.findAll', {})
  }
}
