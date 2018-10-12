export interface ParsedPhoneNumber {
  /** the phone number’s NPA (area code) */
  npa: string;
  /** the phone number’s NXX (prefix) */
  nxx: string;
  /** the last four digits of the phone number */
  station: string;
}
