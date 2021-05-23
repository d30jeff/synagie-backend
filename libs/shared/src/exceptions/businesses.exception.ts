import { Errors } from '@libs/shared/enums';
import { CustomHttpException } from '@libs/shared/exceptions/base.exception';
import { HttpStatus } from '@nestjs/common';

export class BusinessNotFoundException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.BusinessNotFound,
      message: 'Business Not Found',
      statusCode: HttpStatus.NOT_FOUND,
    });
  }
}
