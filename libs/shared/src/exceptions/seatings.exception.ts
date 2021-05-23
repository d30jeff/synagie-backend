import { Errors } from '@libs/shared/enums';
import { CustomHttpException } from '@libs/shared/exceptions/base.exception';
import { HttpStatus } from '@nestjs/common';
export class SeatingNotFoundException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.NotFound,
      message: 'Seating Not Found',
      statusCode: HttpStatus.NOT_FOUND,
    });
  }
}
