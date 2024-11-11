import { IsOptional, IsString, IsNumber, IsEnum, IsNotEmpty } from 'class-validator';
import Currency from 'src/general/enum/currency';

export class UpdateListingDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  location?: string;
}