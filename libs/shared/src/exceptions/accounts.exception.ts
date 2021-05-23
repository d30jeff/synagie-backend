import { Errors } from "@libs/shared/enums";
import { CustomHttpException } from "@libs/shared/exceptions/base.exception";
import { HttpStatus } from "@nestjs/common";

export class InvalidCredentialsException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.InvalidCredentials,
      message: 'Invalid Credentials',
      statusCode: HttpStatus.UNAUTHORIZED,
    });
  }
}

export class InvalidRoleException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.NotFound,
      message: 'Invalid Role',
      statusCode: HttpStatus.NOT_FOUND,
    });
  }
}

export class EmailAlreadyInUseException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.EmailAlreadyInUse,
      message: 'Email Already In Use',
      statusCode: HttpStatus.CONFLICT,
    });
  }
}
export class AccountNotFoundException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.NotFound,
      message: 'Account Not Found',
      statusCode: HttpStatus.NOT_FOUND,
    });
  }
}
