import { InvalidPhoneNumberError } from './errors';
import { parseImpl } from './parseImpl';
import { validImpl } from './validImpl';

/**
 * Extracts the NPA (area code), NXX (prefix) and station (last 4 digits) of the phone
 * number.
 * @param phoneNumber the phone number to parse; formatting does not matter
 * @returns true if the phone number is potentially valid; false if it is not
 */
export function parse(phoneNumber: string) {
  const parts = parseImpl(phoneNumber);

  if (!parts || !validImpl(parts)) {
    throw new InvalidPhoneNumberError(phoneNumber);
  }

  return parts;
}
