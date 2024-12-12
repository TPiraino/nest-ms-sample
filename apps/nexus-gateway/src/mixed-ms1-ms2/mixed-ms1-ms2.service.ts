import { Injectable } from '@nestjs/common';
import { Ms1Service } from '../ms1/ms1.service';
import { Ms2Service } from '../ms2/ms2.service';
import { forkJoin } from 'rxjs';

@Injectable()
export class MixedMs1Ms2Service {
  constructor(
    private readonly ms1Service: Ms1Service,
    private readonly ms2Service: Ms2Service
  ) {}

  findAll() {
    return forkJoin({
      ms1: this.ms1Service.findAll(),
      ms2: this.ms2Service.findAll()
    });
  }
}
