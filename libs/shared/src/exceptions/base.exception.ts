import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiPropertyOptional } from '@nestjs/swagger';

export interface FieldError {
  property: string;
  code: string;
  message: string;
}

class BaseHttpException {
  message: string;
  statusCode: HttpStatus;
  errors?: Record<string, unknown>;
  code: string;
  details?: string;
}

export class CustomHttpException extends HttpException {
  @ApiPropertyOptional()
  statusCode: number;

  @ApiPropertyOptional()
  message: string;

  @ApiPropertyOptional()
  code: string;

  @ApiPropertyOptional()
  errors: Record<string, unknown>;

  @ApiPropertyOptional()
  details: string;
  constructor(params: BaseHttpException) {
    const { message, statusCode, errors, details, code } = params;

    super(
      {
        message,
        errors: errors || [],
        code,
        details,
      },
      statusCode,
    );
  }
}
