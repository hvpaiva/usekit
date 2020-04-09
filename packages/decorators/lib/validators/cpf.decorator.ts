import { registerDecorator, ValidationOptions } from 'class-validator';

import { CpfValidator } from '@usekit/core';

export default function IsCpf(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      name: 'isCpf',
      target: object.constructor,
      propertyName,
      constraints: [],
      options: validationOptions,
      validator: CpfValidator,
    });
  };
}
