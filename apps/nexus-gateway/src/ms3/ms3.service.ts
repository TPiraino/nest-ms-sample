import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class Ms3Service {
  constructor(@Inject('MS3') private readonly ms3: ClientProxy) {}

  findAll() {
    return this.ms3.send('ms3.findAll', {})
  }
}
