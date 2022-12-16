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
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthService } from 'src/auth/auth.service';
import { JwtGuard } from 'src/auth/guards/jwt.guad';
import { CostsService } from './costs.service';
import { CreateCostDto } from './dto/create-cost.dto';
import { UpdateCostDto } from './dto/update-cost.dto';

@Controller('cost')
export class CostsContoller {
  constructor(
    private readonly costsService: CostsService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(JwtGuard)
  @Get()
  @HttpCode(HttpStatus.OK)
  async getAll(@Req() req, @Res() res) {
    const user = await this.authService.getUserByToken(req.token);
    const costs = await this.costsService.findAll(user._id.toString());
    return res.send(costs);
  }

  @UseGuards(JwtGuard)
  @Post()
  @HttpCode(HttpStatus.OK)
  async create(@Body() createCostDto: CreateCostDto, @Req() req, @Res() res) {
    const user = await this.authService.getUserByToken(req.token);
    await this.costsService.create({
      ...createCostDto,
      userId: user._id as string,
    });
    const costs = await this.costsService.findAll(user._id.toString());
    return res.send(costs);
  }

  @UseGuards(JwtGuard)
  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async update(@Body() updateCostDto: UpdateCostDto, @Param('id') id: string) {
    return await this.costsService.update(updateCostDto, id);
  }

  @UseGuards(JwtGuard)
  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string) {
    return await this.costsService.delete(id);
  }
}
