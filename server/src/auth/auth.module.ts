import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthContoller } from './auth.controller';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '5m' },
    }),
  ],
  controllers: [AuthContoller],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
