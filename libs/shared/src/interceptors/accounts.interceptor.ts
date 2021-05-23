import { AccountNotFoundException } from '@libs/shared/exceptions/accounts.exception';
import { AccountService } from '@libs/shared/services/base/account.service';
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class AccountIdParamsValidator implements NestInterceptor {
  private logger = new Logger(AccountIdParamsValidator.name);

  constructor(private readonly accountService: AccountService) {}

  async intercept(context: ExecutionContext, next: CallHandler): Promise<Observable<any>> {
    const request = context.switchToHttp().getRequest();
    const id = request.params.id;

    this.logger.log(`Verifying account of ID: ${id}`)

    const account = await this.accountService.fetchOneById(id);

    if (!account) {
      throw new AccountNotFoundException();
    }

    return next.handle();
  }
}
