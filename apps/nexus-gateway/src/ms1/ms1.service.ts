import { MS1_PATERNS } from '@app/contracts';
import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class Ms1Service {
  constructor(@Inject('MS1') private readonly ms1: ClientProxy) {}

  findAll() {
    const ms1Response = this.ms1.send(MS1_PATERNS.FIND_ALL, {});
    return ms1Response;
  }
}
