import { Pagination } from '@libs/shared/decorators/pagination.decorator';

export interface PaginatedResponse<T> {
  items: Array<T>;
  pagination: Pagination;
}
