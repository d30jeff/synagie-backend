import { FieldError } from '@libs/shared/exceptions/base.exception';
import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';
import snake from 'to-snake-case';

@Injectable()
export class GlobalValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    const object = plainToClass(metatype, value);

    if (!object) {
      return value;
    }

    const validationErrors = await validate(object);

    if (validationErrors.length) {

      const errors = [];

      validationErrors.forEach(validationError => {
        this.generateFieldErrorMessages(errors, validationError);
      });

      throw new BadRequestException({
        message: 'Validation Error',
        code: 'ERROR_FIELD_VALIDATION',
        errors,
      });
    }

    return value;
  }

  private generateFieldErrorMessages(
    mappedErrors: FieldError[],
    validationError: ValidationError,
    parentProperty = null,
  ): void {
    const property = validationError.property;
    // Append to parent prefix if any
    const field = parentProperty
      ? [parentProperty, property].join('.')
      : property;

    if (validationError.children !== undefined && validationError.children.length) {
      // Append property and retry
      validationError.children.forEach(child => {
        this.generateFieldErrorMessages(mappedErrors, child, field);
      });
    } else {
      const [firstErrorConstraint] = Object.entries(
        validationError.constraints,
      );

      const [key] = firstErrorConstraint;

      mappedErrors.push({
        property: field,
        code: snake(key).toUpperCase(),
        message: validationError.constraints[key],
      });
    }
  }

  private toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}
