import { Controller, Get } from '@nestjs/common';
import { MixedMs1Ms2Service } from './mixed-ms1-ms2.service';

@Controller('mixed-ms1-ms2')
export class MixedMs1Ms2Controller {
  constructor(private readonly mixedMs1Ms2Service: MixedMs1Ms2Service) {}

  @Get()
  findAll() {
    const res = this.mixedMs1Ms2Service.findAll();
    console.log(res);
    return res;
  }
}
