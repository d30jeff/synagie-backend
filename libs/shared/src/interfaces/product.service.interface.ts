import { CreateBusinessProductDto } from '@libs/shared/dtos/business-product.dto';
import { Account } from '@libs/shared/models';
import { Business } from '@libs/shared/models/Business';

export namespace ProductServiceParams {
  export interface Create extends CreateBusinessProductDto {
    account: Account;
    business: Business
  }
}
