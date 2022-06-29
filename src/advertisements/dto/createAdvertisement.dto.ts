import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsNumber,
  Length,
  Max,
  Min,
} from 'class-validator';
import { Transform } from 'class-transformer';
import { Category } from '../interface/interfacesAndTypes';

export class CreateAdvertisementDto {
  @Length(5, 40)
  readonly title: string;

  @IsNotEmpty()
  country: string;

  @IsNotEmpty()
  location: string;

  @IsNotEmpty()
  @IsEnum(Category)
  category: Category;

  @Transform(({ value }) => Number(value), { toClassOnly: true }) //преобразует в number
  @IsInt()
  @Min(2)
  @Max(10000000000)
  readonly price: number;

  @Length(2, 3)
  readonly currency: string;

  img: string;

  @Transform(({ value }) => Number(value), { toClassOnly: true }) //преобразует в number
  @IsNumber()
  @Min(0)
  @Max(10000000000)
  readonly quantity: number;

  @Length(1, 5)
  readonly unit: string;
}
