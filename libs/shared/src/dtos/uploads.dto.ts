import { IsDefined, IsString } from 'class-validator';

export class PresignedUrlDto {
  @IsDefined()
  @IsString()
  type: string;
}
