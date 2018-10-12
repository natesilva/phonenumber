import { ParsedPhoneNumber } from './parsedPhoneNumber';

// the general digits-only format to parse
const nanpPattern = /^1?([2-9][0-9][0-9])([2-9][0-9][0-9])(\d{4})$/;

function digitsOnly(s: string) {
  return s.replace(/[^\d]/g, '');
}

/** Internal implementation for parse(). Does not attempt to validate the phone number. */
export function parseImpl(phoneNumber: string) {
  const digits = digitsOnly(phoneNumber);
  const matches = digits.match(nanpPattern);

  if (!matches) {
    return undefined;
  }

  const result: ParsedPhoneNumber = {
    npa: digits.slice(0, 3),
    nxx: digits.slice(3, 6),
    station: digits.slice(6, 10)
  };

  return result;
}
