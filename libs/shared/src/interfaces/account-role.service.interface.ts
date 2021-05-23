import { Role } from '@libs/shared/models';
import { Account, AccountRole } from '@libs/shared/models';
import { Transaction } from 'objection';

export namespace AccountRoleServiceParams {
  export interface AssignRoleParams {
    account: Account;
    role: Role;
  }

  export interface AssignAsAdminParams
    extends Pick<AssignRoleParams, 'account'> {}
}

export interface AccountRoleServiceInterface {
  assignRole: (
    params: AccountRoleServiceParams.AssignRoleParams,
    trx: Transaction,
  ) => Promise<AccountRole>;

  assignAsAdmin: (
    params: AccountRoleServiceParams.AssignAsAdminParams,
    trx: Transaction,
  ) => Promise<AccountRole>;
}
