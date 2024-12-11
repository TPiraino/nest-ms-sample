import { Injectable } from '@nestjs/common';
import { Ms2ExampleCreateDto } from './dto/ms2-example-create.dto';
import { Ms2ExampleDto } from './dto/ms2-example.dto';

@Injectable()
export class Ms2Service {
  private examples: Ms2ExampleDto[] = [
    {
      id: 1,
      title: 'La dama y el vagabundo',
      release: new Date('07/10/2001')
    },
    {
      id: 2,
      title: 'El rey leon',
      release: new Date('09/11/2001')
    },
    {
      id: 3,
      title: 'Nemo',
      release: new Date('12/12/2001')
    },
  ]

  create(ms2ExampleCreateDto: Ms2ExampleCreateDto) {
    const newMovie: Ms2ExampleDto = {
      ...ms2ExampleCreateDto,
      id: this.examples.length + 1
    }

    this.examples.push(newMovie)

    return newMovie
  }

  findAll() {
    return this.examples
  }
}
