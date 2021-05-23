import { ProductService } from '@libs/shared/services/product.service';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { plainToClass } from 'class-transformer';

@Injectable()
export class RoleIdValidationPipe implements PipeTransform<any> {
  constructor(private readonly productService: ProductService) {}
  async transform(value: any, metadata: ArgumentMetadata) {
    try {
      const response = await this.productService.fetchCursorPaginatedList({limit: 10, });
    } catch (e) {

    }

    const object = plainToClass(metadata.metatype, value);

    console.log({ object });
    console.log(metadata, value);
  }

}
