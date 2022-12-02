import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Req,
  Res,
  Post,
  UseGuards,
  Body,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtGuard } from 'src/auth/guards/jwt.guad';
import { CostService } from './costs.service';
import { CreateCostDto } from './dto/create-cost.dto';

@Controller('cost')
export class CostContoller {
  constructor(
    private readonly costService: CostService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(@Req() req, @Res() res) {
    const user = await this.authService.getUserByToken(req.token);
    const costs = await this.costService.findAll(user._id.toString());
    return res.send(costs);
  }

  @UseGuards(JwtGuard)
  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() createCostDto: CreateCostDto, @Req() req) {
    const user = await this.authService.getUserByToken(req.token);

    return await this.costService.create({
      ...createCostDto,
      userId: user._id as string,
    });
  }
}
