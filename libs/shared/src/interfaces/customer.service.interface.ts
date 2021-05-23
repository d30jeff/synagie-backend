import { Account } from "@libs/shared/models";

export namespace CustomerServiceParams {

  export interface Create {
    email: string;
    phone: string;
    account: Account;
  }
}
