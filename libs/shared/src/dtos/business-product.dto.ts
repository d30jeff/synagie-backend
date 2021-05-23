import { IsValidS3Uri } from '@libs/shared/validators/s3.validator';
import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';

export class CreateBusinessProductDto {
  @IsDefined()
  name: string;

  @IsDefined()
  description: string;

  @IsOptional()
  @IsString()
  @Validate(IsValidS3Uri)
  pictureUri?: string;

  @IsDefined()
  @IsNumber()
  price: number;
}
