import { Controller } from '@nestjs/common';
import { Ms1Service } from './ms1.service';
import { MessagePattern } from '@nestjs/microservices';
import { MS1_PATERNS } from '@app/contracts';

@Controller()
export class Ms1Controller {
  constructor(private readonly ms1Service: Ms1Service) {}

  @MessagePattern(MS1_PATERNS.FIND_ALL)
  findAll() {
    return this.ms1Service.findAll();
  }
}
