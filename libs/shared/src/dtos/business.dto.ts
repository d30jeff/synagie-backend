import { IsDefined } from "class-validator";

export class CreateBusinessDto {
  @IsDefined()
  name: string;
}
