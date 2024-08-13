import { ValidationPipe, ValidationPipeOptions } from '@nestjs/common';

export class StrictValidationPipe extends ValidationPipe {
  constructor(
    expectedType?: ValidationPipe['expectedType'],
    options?: ValidationPipeOptions,
  ) {
    super({
      ...options,
      expectedType,
      whitelist: true,
      forbidNonWhitelisted: true,
    });
  }
}
