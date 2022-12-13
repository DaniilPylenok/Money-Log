import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { Cost, CostsSchema } from 'src/schemas/cost.schema';
import { CostsContoller } from './costs.controller';
import { CostsService } from './costs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostsSchema }]),
    AuthModule,
  ],
  controllers: [CostsContoller],
  providers: [CostsService],
})
export class CostsModule {}
