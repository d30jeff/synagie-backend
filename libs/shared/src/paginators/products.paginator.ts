import { Product } from '@libs/shared/models/Product';
import { QueryBuilder, ref } from 'objection';
import { ColumnType, Paginator, SortDirection } from 'objection-paginator';
export class ProductsPaginator extends Paginator<Product> {
  static sorts = {
    default: [
      /**
       * Can pass string directly. e.g 'id',
       * If the field (after Objection parsing) is a string
       */
      {
        column: 'createdAt',
        columnType: ColumnType.String,
      },
    ],
  };

  getBaseQuery(): QueryBuilder<Product> {
    return Product.query();
  }
}
