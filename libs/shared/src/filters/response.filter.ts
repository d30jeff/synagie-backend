import { Errors } from '@libs/shared/enums';
import { dayjs } from '@libs/shared/utils';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { ThrottlerException } from '@nestjs/throttler';
import { Request, Response } from 'express';

@Catch(HttpException)
export class GlobalResponseFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const res = ctx.getResponse<Response>();
    const req = ctx.getRequest<Request>();

    if (exception instanceof ThrottlerException) {
      return res.status(HttpStatus.TOO_MANY_REQUESTS).json({
        code: Errors.TooManyRequests,
        error: 'Too Many Requests',
        message: `You're doing that too often`,
        httpStatus: HttpStatus.TOO_MANY_REQUESTS,
        timestamp: dayjs.utc().format(),
        resource: req.url,
      });
    }

    const response = exception.getResponse() as Record<string, unknown>;

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    res.status(status).json({
      ...response,
      timestamp: dayjs.utc().format(),
      resource: req.url,
    });
  }
}
