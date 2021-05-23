import { Errors } from "@libs/shared/enums";
import { CustomHttpException } from "@libs/shared/exceptions/base.exception";
import { HttpStatus } from "@nestjs/common";

export class ExternalUserNotFoundException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.ExternalUserNotFound,
      message: 'Invalid Credentials',
      statusCode: HttpStatus.EXPECTATION_FAILED
    });
  }
}
