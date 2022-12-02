import { IsNotEmpty, IsOptional } from 'class-validator';

export class CreateCostDto {
  @IsOptional()
  readonly text: string;

  @IsNotEmpty()
  readonly price: number;

  @IsNotEmpty()
  readonly date: Date;

  @IsNotEmpty()
  readonly userId: string;
}
