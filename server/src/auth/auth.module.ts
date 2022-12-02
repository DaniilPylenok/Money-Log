import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { AuthContoller } from './auth.controller';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule],
  controllers: [AuthContoller],
  providers: [AuthService],
  exports: [AuthService],
})
export class AuthModule {}
