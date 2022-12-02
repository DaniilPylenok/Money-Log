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
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';
import { LoginGuard } from './guards/login.guard';
import { RegistrationGuard } from './guards/registration.guard';

@Controller('auth')
export class AuthContoller {
  constructor(private userService: UsersService) {}

  @UseGuards(LoginGuard)
  @Post('login')
  async login(@Body() loginUserDto: LoginUserDto, @Res() res: Response) {
    const user = await this.userService.login(loginUserDto);
    res.statusCode = HttpStatus.OK;
    res.send({ username: user.username });
  }

  @UseGuards(RegistrationGuard)
  @Post('registration')
  async registrationUser(
    @Body() createUserDto: CreateUserDto,
    @Res() res: Response,
  ) {
    await this.userService.registration(createUserDto);
    res.statusCode = HttpStatus.CREATED;
    res.send('user created');
  }
}
