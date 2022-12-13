import { IsOptional } from 'class-validator';

export class UpdateCostDto {
  @IsOptional()
  readonly text: string;

  @IsOptional()
  readonly price: number;

  @IsOptional()
  readonly date: Date;
}
