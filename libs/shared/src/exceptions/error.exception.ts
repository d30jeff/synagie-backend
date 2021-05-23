import { Errors } from '@libs/shared/enums';
import { CustomHttpException } from '@libs/shared/exceptions/base.exception';
import { HttpStatus } from '@nestjs/common';

export class InvalidAccessTokenException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.InvalidAccessToken,
      message: 'Missing or expired access token',
      statusCode: HttpStatus.UNAUTHORIZED,
    });
  }
}

export class InvalidFirebaseTokenException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.InvalidFirebaseToken,
      message: 'Expired or invalid firebase token',
      statusCode: HttpStatus.UNAUTHORIZED,
    });
  }
}

export class NoPermissionException extends CustomHttpException {
  constructor() {
    super({
      code: Errors.NoPermission,
      message: 'Insufficient permission',
      statusCode: HttpStatus.FORBIDDEN,
    });
  }
}
