import { Controller } from '@nestjs/common';
import { Ms1Service } from './ms1.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class Ms1Controller {
  constructor(private readonly ms1Service: Ms1Service) {}

  @MessagePattern('ms1.findAll')
  findAll() {
    return this.ms1Service.findAll();
  }
}
