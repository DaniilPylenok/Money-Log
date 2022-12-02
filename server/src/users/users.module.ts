import { Module } from '@nestjs/common';
import { User, UsersSchema } from 'src/schemas/users.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersService } from './user.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UsersSchema }]),
  ],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}
