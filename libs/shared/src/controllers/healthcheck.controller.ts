import { dayjs } from '@libs/shared/utils';
import { Controller, Get } from '@nestjs/common';

@Controller('health-check')
export class HealthcheckController {
  @Get()
  check() {
    return {
      version: '0.0.1',
      timestamp: dayjs.utc().format(),
    }
  }
}
