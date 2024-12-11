import { Injectable } from '@nestjs/common';

@Injectable()
export class NexusGatewayService {
  getHello(): string {
    return 'Hello World!';
  }
}
