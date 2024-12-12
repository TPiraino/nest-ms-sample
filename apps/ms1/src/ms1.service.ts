import { Ms1ExampleDto } from '@app/contracts';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Ms1Service {
  private example: Ms1ExampleDto[] = [
    {
      id: 1,
      name: 'Don Gato',
    },
    {
      id: 2,
      name: 'Don Perro',
    },
    {
      id: 3,
      name: 'Don Caballo',
    },
  ];

  findAll() {
    return this.example;
  }
}
