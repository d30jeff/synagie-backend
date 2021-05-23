import randToken from 'rand-token';

export class RandomToken {
  static GenerateToken(length = 32): string {
    return randToken.generator().generate(length);
  }

  static GenerateEmailVerificationCode(length = 6): string {
    return randToken
      .generator({
        chars: '0-9',
      })
      .generate(length);
  }

  static GenerateAccessToken(length = 128): string {
    return this.GenerateToken(length);
  }

  static GenerateRefreshToken(length = 128): string {
    return this.GenerateToken(length);
  }

  static GenerateUserRecoveryToken(length = 32): string {
    return this.GenerateToken(length);
  }
}
