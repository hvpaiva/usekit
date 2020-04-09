import { registerDecorator, ValidationOptions } from 'class-validator';

import { CepValidator } from '@usekit/core';

export default function IsCep(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isCep',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: CepValidator,
    });
  };
}
