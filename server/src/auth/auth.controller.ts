import {
  Controller,
  Body,
  Res,
  Post,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import { Response } from 'express';
import { UsersService } from 'src/users/user.service';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginGuard } from './guards/login.guard';
import { RegistrationGuard } from './guards/registration.guard';

@Controller('auth')
export class AuthContoller {
  constructor(
    private usersService: UsersService,
    private authService: AuthService,
  ) {}

  @UseGuards(LoginGuard)
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const user = await this.usersService.login(loginUserDto);
    const access = await this.authService.generateAccessToken(user);
    const refresh = await this.authService.generateRefreshToken(
      user._id as string,
    );
    res.statusCode = HttpStatus.OK;
    return res.send({ ...access, ...refresh, username: user.username });
  }

  @UseGuards(RegistrationGuard)
  @Post('registration')
  async registrationUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    await this.usersService.registration(createUserDto);
    res.statusCode = HttpStatus.CREATED;
    res.send('user created');
  }
}
