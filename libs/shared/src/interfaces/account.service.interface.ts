import { Pagination } from "@libs/shared/decorators/pagination.decorator";
import { Roles } from "@libs/shared/enums";
import { Account } from "@libs/shared/models";
import { CreateAccountDto } from "apps/admin-api/src/dtos/accounts.dto";

export namespace AccountServiceParams {
  export type CreateAdminAccount = Exclude<AccountServiceParams.Create, 'role'>;
  export type CreateConsumerAccount = Exclude<AccountServiceParams.Create, 'role'>;

  export interface AssignRoleParams {

  }

  export interface Create extends CreateAccountDto {}

  export interface FetchList {
    pagination: Pagination;
    account: Account
  }


  export interface Update extends Create {
    id: string;
  }

  export interface SignupAsCustomer {
    email: string;
    pictureUrl?: string;
    name: string;
    provider?: string;
  }

  interface SignupAsMerchant extends SignupAsCustomer {}
}
