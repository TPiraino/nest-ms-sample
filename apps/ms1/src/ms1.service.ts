import { Injectable } from '@nestjs/common';
import { Ms1ExampleDto } from './dto/ms1-example.dto';

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
