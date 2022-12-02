import { IsNotEmpty, IsOptional } from 'class-validator';

export class UpdateCostDto {
  @IsOptional()
  readonly text: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly date: Date;
}
