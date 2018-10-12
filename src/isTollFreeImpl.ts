import { ParsedPhoneNumber } from './parsedPhoneNumber';

const TOLL_FREE_AREA_CODES = ['800', '888', '877', '866', '855', '844', '833'];

/**
 * Internal implementation for isTollFree(). Takes a ParsedPhoneNumber object instead of a
 * string.
 */
export function isTollFreeImpl(parts: ParsedPhoneNumber) {
  return TOLL_FREE_AREA_CODES.includes(parts.npa);
}
