import { IsInt, IsISBN, IsNotEmpty, IsString } from "class-validator";

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsISBN()
  isbn: string;

  @IsInt()
  @IsNotEmpty()
  publishYear: number;
}
