import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { sanitize } from 'class-sanitizer';
import { plainToClass } from 'class-transformer';

@Injectable()
export class GlobalSanitizerPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);

    if (!object) {
      return value;
    }

    sanitize(object);

    return object;
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find((type) => metatype === type);
  }
}
