import {
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ name: 'isValidS3Uri', async: false })
export class IsValidS3Uri implements ValidatorConstraintInterface {
  validate(text: string, args: ValidationArguments) {
    return text.startsWith(`s3://${process.env.S3_BUCKET}/`);
  }

  defaultMessage(args: ValidationArguments) {
    return '($value) is not a valid S3 URI format';
  }
}
