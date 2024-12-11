import { Controller, Get, Post, Body } from '@nestjs/common';
import { Ms2Service } from './ms2.service';
import { Ms2ExampleCreateDto } from './dto/ms2-example-create.dto';

@Controller('ms2')
export class Ms2Controller {
  constructor(private readonly ms2Service: Ms2Service) {}

  @Post()
  create(@Body() ms2ExampleCreateDto: Ms2ExampleCreateDto) {
    return this.ms2Service.create(ms2ExampleCreateDto);
  }

  @Get()
  findAll() {
    return this.ms2Service.findAll();
  }
}
