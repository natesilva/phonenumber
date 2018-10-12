import { parse } from './parse';

/**
 * Format a phone number in the standard E.164 format. This is recommended for storing
 * phone numbers in a database.
 * @param phoneNumber the phone number to test; formatting does not matter
 * @returns a string in the standard E.164 format
 * @throws InvalidPhoneNumberError if the phone number is not valid
 */
export function formatStandard(phoneNumber: string) {
  const parts = parse(phoneNumber);
  return `+1${parts.npa}${parts.nxx}${parts.station}`;
}

/**
 * Format a phone number in the most common display format.
 * @param phoneNumber the phone number to test; formatting does not matter
 * @returns a string in the standard North American display format
 * @throws InvalidPhoneNumberError if the phone number is not valid
 */
export function formatFriendly(phoneNumber: string) {
  const parts = parse(phoneNumber);
  return `(${parts.npa}) ${parts.nxx}-${parts.station}`;
}

/**
 * Format a phone number in a common display format that is compact but still readable.
 * @param phoneNumber the phone number to test; formatting does not matter
 * @returns a string in the compact display format
 * @throws InvalidPhoneNumberError if the phone number is not valid
 */
export function formatCompact(phoneNumber: string) {
  const parts = parse(phoneNumber);
  return `${parts.npa}-${parts.nxx}-${parts.station}`;
}
