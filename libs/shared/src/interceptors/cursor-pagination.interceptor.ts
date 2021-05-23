import { Pagination } from '@libs/shared/decorators/pagination.decorator';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface OffsetPaginationResponse<T> {
  items: Array<T>;
  pagination: Pagination;
}

@Injectable()
export class OffsetPaginationInterceptor<T>
  implements NestInterceptor<T, OffsetPaginationResponse<T>> {
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<OffsetPaginationResponse<T>> {
    return next.handle().pipe(
      map(data => {
        return {
          items: data.items,
          pagination: data.pagination,
        };
      }),
    );
  }
}
