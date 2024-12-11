import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Ms2Service } from './ms2.service';
import { Ms2ExampleCreateDto } from './dto/ms2-example-create.dto';


@Controller()
export class Ms2Controller {
  constructor(private readonly ms2Service: Ms2Service) {}

  @EventPattern('ms2.create')
  create(@Payload() ms2ExampleCreateDto: Ms2ExampleCreateDto) {
    this.ms2Service.create(ms2ExampleCreateDto);
  }

  @MessagePattern('ms2.findAll')
  findAll() {
    return this.ms2Service.findAll();
  }
}
