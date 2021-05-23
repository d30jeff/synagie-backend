import { AccessToken, Account } from '@libs/shared/models';
export namespace AuthServiceParams {
  export interface GenerateAccessToken {
    account: Account
  }

  export interface Signin {
    email: string;
    password: string;
  }
}

export interface AuthServiceInterface {
  signin: (params: AuthServiceParams.Signin) => Promise<AccessToken>
}
