import bcrypt from 'bcryptjs';

const SALT_ROUND = 12;

export class Bcrypt {
  static CreateHash(password: string): Promise<string> {
    const saltRound = bcrypt.genSaltSync(SALT_ROUND);
    return bcrypt.hash(password, saltRound);
  }

  static ComparePasswords(
    passwordClaim: string,
    passwordHash: string,
  ): Promise<boolean> {
    return bcrypt.compare(passwordClaim, passwordHash);
  }
}
