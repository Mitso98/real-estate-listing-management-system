import { IsOptional, IsString, IsNumber, IsEnum, Max, Min } from 'class-validator';
import Currency from '../../general/enum/currency';

export class UpdateListingDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  @Min(1)
  @Max(1000000000)
  price?: number;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;

  @IsOptional()
  @IsString()
  location?: string;
}