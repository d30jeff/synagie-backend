import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import LinkHeader from 'http-link-header';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class GlobalResponseInterceptor implements NestInterceptor {
  constructor(private readonly configService: ConfigService) {}
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map(data => {
        if (!data) {
          return;
        }

        if (data.pagination && data.items) {
          return {
            data: {
              items: data.items,
            },
            pagination: data.pagination,
          };
        } else if (data.cursor) {
          const { getRequest, getResponse } = context.switchToHttp();
          const request = getRequest();
          const response = getResponse();

          const linkHeader = new LinkHeader();
          const cursor = data.cursor;
          const limit = Number(request.query.limit);

          if (data.cursor && data.remaining) {
            linkHeader.set({
              rel: 'next',
              uri: `${this.configService.get('PUBLIC_API_HOST')}${
                request.route.path
              }?cursor=${cursor}&limit=${limit}`,
            });
          }

          response.header('Link', linkHeader.toString());
          response.header('X-Remaining', data.remaining);

          return {
            data: {
              items: data.items,
            },
          };
        }

        if (data.constructor === Array) {
          return {
            data: {
              items: data,
            },
          };
        }

        return {
          data,
        };
      }),
    );
  }
}
