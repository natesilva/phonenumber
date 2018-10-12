import { isTollFreeImpl } from './isTollFreeImpl';
import { parse } from './parse';

export function isTollFree(phoneNumber: string) {
  const parts = parse(phoneNumber);
  return isTollFreeImpl(parts);
}
