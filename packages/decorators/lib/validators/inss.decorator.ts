import { registerDecorator, ValidationOptions } from 'class-validator';

import { InssValidator } from '@usekit/core';

export default function IsInss(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isInss',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: InssValidator,
    });
  };
}
