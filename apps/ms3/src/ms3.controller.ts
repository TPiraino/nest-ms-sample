import { Controller } from '@nestjs/common';
import { Ms3Service } from './ms3.service';
import { MessagePattern } from '@nestjs/microservices';
import { MS3_PATERNS } from '@app/contracts';

@Controller()
export class Ms3Controller {
  constructor(private readonly ms3Service: Ms3Service) {}

  @MessagePattern(MS3_PATERNS.FIND_ALL)
  findAll() {
    return this.ms3Service.findAll();
  }
}
