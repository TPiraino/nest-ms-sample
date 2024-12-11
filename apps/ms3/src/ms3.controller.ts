import { Controller, Get } from '@nestjs/common';
import { Ms3Service } from './ms3.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class Ms3Controller {
  constructor(private readonly ms3Service: Ms3Service) {}

  @MessagePattern('ms3.findAll')
  findAll() {
    return this.ms3Service.findAll();
  }
}
