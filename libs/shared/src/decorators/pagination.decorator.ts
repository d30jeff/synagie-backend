import { createParamDecorator, ExecutionContext } from '@nestjs/common';

export interface CursorPagination {
  cursor?: string;
  limit: number;
}

export class Pagination {
  page = 1;
  limit = 10;
  total?: number;
  lastPage?: number;
  constructor() {}

  setPage(page: number) {
    this.page = page;
  }

  setLimit(limit: number) {
    this.limit = limit;
  }

  setTotalAndLastPage(total: number) {
    this.total = total;
    this.lastPage = Math.ceil(this.total / this.limit);
  }
}

export const PaginationUrlParams = createParamDecorator(
  (data, ctx: ExecutionContext): Pagination => {
    const request = ctx.switchToHttp().getRequest();

    let page = request.query?.page || 1;
    let limit = request.query?.limit || 25;

    if (page < 1) {
      page = 1;
    }

    if (limit > 100) {
      limit = 100;
    }

    const pagination = new Pagination();
    pagination.setPage(Number(page));
    pagination.setLimit(Number(limit));

    return pagination;
  },
);

export const CursorPaginationQuery = createParamDecorator(
  (data, ctx: ExecutionContext): CursorPagination => {
    const request = ctx.switchToHttp().getRequest();

    return {
      cursor: request.query.cursor,
      limit: Number(request.query.limit) || 10,
    };
  },
);
