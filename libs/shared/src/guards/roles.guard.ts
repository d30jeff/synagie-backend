import { NoPermissionException } from '@libs/shared/exceptions/error.exception';
import { Account } from '@libs/shared/models';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    if (!roles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user: Account = request.user;

    console.log(user, 111);

    const hasPermission = user.roles
      .map(role => {
        return role.name;
      })
      .find(role => {
        return roles.includes(role);
      });

    if (!Boolean(hasPermission)) {
      throw new NoPermissionException();
    }

    return true;
  }
}
