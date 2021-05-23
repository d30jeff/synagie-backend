import { Account } from "@libs/shared/models";

export namespace SeatingServiceParams {
  export interface Create {
    name: string;
    account: Account;
  }
}
