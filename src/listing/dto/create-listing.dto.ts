import { IsNotEmpty, IsString, IsNumber, Min, Max, Length, IsOptional, IsEnum } from 'class-validator';
import Currency from 'src/general/enum/currency';

export class CreateListingDto {
  @IsNotEmpty()
  @IsString()
  @Length(5, 100)
  title: string;

  @IsNotEmpty()
  @IsString()
  @Length(10, 1000)
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(10000)
  price: number;

  @IsOptional()
  @IsEnum(Currency)
  currency?: Currency;

  @IsNotEmpty()
  @IsString()
  location: string;
}
