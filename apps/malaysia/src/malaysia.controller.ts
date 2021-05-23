import { Controller, Get } from '@nestjs/common';
import { MalaysiaService } from './malaysia.service';

@Controller()
export class MalaysiaController {
  constructor(private readonly malaysiaService: MalaysiaService) {}

  @Get()
  getHello() {
    return null;
  }
}
