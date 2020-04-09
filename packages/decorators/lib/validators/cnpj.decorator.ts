import { registerDecorator, ValidationOptions } from 'class-validator';

import { CnpjValidator } from '@usekit/core';

export default function IsCnpj(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isCnpj',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: CnpjValidator,
    });
  };
}
