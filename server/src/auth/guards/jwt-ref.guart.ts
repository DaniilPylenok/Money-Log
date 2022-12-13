import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { UsersService } from 'src/users/user.service';

@Injectable()
export class RefreshJwtGuard implements CanActivate {
  constructor(private userService: UsersService) {}
  async canActivate(
    context: ExecutionContext,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const { refresh_token, username } = request.body;

    if (!refresh_token || !username) {
      throw new UnauthorizedException('Ошибка авторизации');
    }

    const user = await this.userService.findOne(username);

    if (!user) {
      throw new UnauthorizedException('Ошибка авторизации');
    }

    return true;
  }
}
