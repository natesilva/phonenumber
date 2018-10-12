import { ParsedPhoneNumber } from './parsedPhoneNumber';

/**
 * Internal implementation for valid(). Takes a PhoneNumberParts object instead of a
 * string.
 */
export function validImpl(parts?: ParsedPhoneNumber) {
  if (!parts) {
    return false;
  }

  if (parts.npa.endsWith('11')) {
    // NPAs that end with '11' are invalid
    return false;
  }

  if (parts.npa !== '800' && parts.npa.endsWith('00')) {
    // NPAs other than 800 that end with '00' are invalid
    return false;
  }

  if (parts.nxx.endsWith('11')) {
    // NXXs that end with '11' are invalid
    return false;
  }

  if (parts.nxx === '555') {
    // all 555 numbers that don’t end with 1212 or 4334 are invalid
    if (parts.station !== '1212' && parts.station !== '4334') {
      return false;
    }
  }

  return true;
}
