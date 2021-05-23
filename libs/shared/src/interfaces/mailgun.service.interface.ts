import { Account } from "@libs/shared/models";

export namespace MailgunServiceParams {
  export interface SendEmailVerificationCodeParams {
    account: Account;
    code: string;
  }
}
