import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateUserDto } from 'src/auth/dto/create-user.dto';
import { LoginUserDto } from 'src/auth/dto/login-user.dto';
import { User, UsersDocument } from 'src/schemas/users.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UsersDocument>,
  ) {}

  async registration(createUserDto: CreateUserDto): Promise<User | null> {
    const existUser = await this.userModel.findOne({
      username: createUserDto.username,
    });
    if (existUser) {
      return null;
    }
    const newUser = new this.userModel(createUserDto);
    return newUser.save();
  }
  async findOne(username: string): Promise<User> {
    return this.userModel.findOne({ username });
  }

  async login(loginUserDto: LoginUserDto): Promise<User | null> {
    const user = await this.userModel.findOne({
      username: loginUserDto.username,
    });
    if (!user) {
      return null;
    }
    return user as User;
  }
}
