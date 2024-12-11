import { Controller, Get } from '@nestjs/common';
import { Ms3Service } from './ms3.service';

@Controller('ms3')
export class Ms3Controller {
  constructor(private readonly ms3Service: Ms3Service) {}

  @Get()
  findAll() {
    return this.ms3Service.findAll();
  }
}
