import { parse } from './parse';

const TOLL_FREE_AREA_CODES = ['800', '888', '877', '866', '855', '844', '833'];

export function isTollFree(phoneNumber: string) {
  const parts = parse(phoneNumber);
  return TOLL_FREE_AREA_CODES.includes(parts.npa);
}
