import { parseImpl } from './parseImpl';
import { validImpl } from './validImpl';

/**
 * Test if the phone number follows the correct digit rules to be a valid number in the
 * North American Numbering Plan area, which includes the US, Canada, and parts of the
 * Caribbean.
 * @param phoneNumber the phone number to test; formatting does not matter
 * @returns true if the phone number is potentially valid; false if it is not
 */
export function valid(phoneNumber: string) {
  const parts = parseImpl(phoneNumber);
  return validImpl(parts);
}
