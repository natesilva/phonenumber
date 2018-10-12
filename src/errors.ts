export class InvalidPhoneNumberError extends Error {
  constructor(phoneNumber: string) {
    const message = `invalid phone number: ${phoneNumber}`;
    super(message);
    this.name = 'InvalidPhoneNumberError';
  }
}
