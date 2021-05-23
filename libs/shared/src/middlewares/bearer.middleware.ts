import { InvalidAccessTokenException } from '@libs/shared/exceptions/error.exception';
import { Account } from '@libs/shared/models';
import { AuthService } from '@libs/shared/services/base/auth.service';
import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class BearerStrategyMiddleware extends PassportStrategy(Strategy) {
  private logger = new Logger(BearerStrategyMiddleware.name);
  constructor(private readonly authService: AuthService) {
    super(
      async (token: string, done: (error: any, account?: Account) => void) => {
        try {
          this.logger.log('Verifying token');
          const accessToken = await this.authService.validateAccessToken(token);

          if (!accessToken || !accessToken.token) {
            this.logger.log('Token not found');
            throw new InvalidAccessTokenException();
          }

          done(null, accessToken.account);
        } catch (error) {
          this.logger.error('Failed to verify access token');
          done(error);
        }
      },
    );
  }
}
