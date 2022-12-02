import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from 'src/auth/auth.module';
import { Cost, CostsSchema } from 'src/schemas/cost.schema';
import { CostContoller } from './costs.controller';
import { CostService } from './costs.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cost.name, schema: CostsSchema }]),
    AuthModule,
  ],
  controllers: [CostContoller],
  providers: [CostService],
})
export class CostsModule {}
