import { Reflector } from '@nestjs/core';

export const NoRole = Reflector.createDecorator<true>({
  transform: () => true,
});
