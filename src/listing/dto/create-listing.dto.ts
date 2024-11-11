import { IsNotEmpty, IsString, IsNumber, Min, Max, Length } from 'class-validator';

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

  @IsNotEmpty()
  @IsString()
  location: string;
}
