import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Ms2Service } from './ms2.service';
import { MS2_PATERNS, Ms2ExampleCreateDto } from '@app/contracts';

@Controller()
export class Ms2Controller {
  constructor(private readonly ms2Service: Ms2Service) {}

  @EventPattern(MS2_PATERNS.CREATE)
  create(@Payload() ms2ExampleCreateDto: Ms2ExampleCreateDto) {
    this.ms2Service.create(ms2ExampleCreateDto);
  }

  @MessagePattern(MS2_PATERNS.FIND_ALL)
  findAll() {
    return this.ms2Service.findAll();
  }
}
