import { CreateBusinessDto } from '@libs/shared/dtos/business.dto';
import { Account } from '@libs/shared/models';

export namespace BusinessServiceParams {
  export interface Create extends CreateBusinessDto {
    account: Account;
  }
}
