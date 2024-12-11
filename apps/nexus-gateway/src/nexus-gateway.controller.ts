import { Controller, Get } from '@nestjs/common';
import { NexusGatewayService } from './nexus-gateway.service';

@Controller()
export class NexusGatewayController {
  constructor(private readonly nexusGatewayService: NexusGatewayService) {}

  @Get()
  getHello(): string {
    return this.nexusGatewayService.getHello();
  }
}
