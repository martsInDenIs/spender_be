import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
import { StrictValidationPipe } from './strict.validation';

export class StrictValidationTransformPipe extends StrictValidationPipe {
  constructor(
    expectedType?: ValidationPipe['expectedType'],
    options?: ValidationPipeOptions,
  ) {
    super(expectedType, {
      ...options,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
    });
  }
}
