import { Controller, Get } from '@nestjs/common';
import { Ms1Service } from './ms1.service';

@Controller('ms1')
export class Ms1Controller {
    constructor(private readonly ms1Service: Ms1Service) {}

    @Get()
    findAll() {
        return this.ms1Service.findAll()
    }
}
