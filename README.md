# @reallyuseful/phonenumber [![npm](https://img.shields.io/npm/v/@reallyuseful/phonenumber.svg)](https://www.npmjs.com/package/@reallyuseful/phonenumber) [![dependencies](https://img.shields.io/david/natesilva/@reallyuseful/phonenumber.svg)](https://www.npmjs.com/package/@reallyuseful/phonenumber) [![license](https://img.shields.io/github/license/natesilva/phonenumber.svg)](https://github.com/natesilva/phonenumber/blob/master/LICENSE) [![node](https://img.shields.io/node/v/@reallyuseful/phonenumber.svg)](https://www.npmjs.com/package/@reallyuseful/phonenumber)

**Parser and validator for US and Canadian phone numbers**

Given a phone number in almost any format, this will determine if it follows the correct digit rules to be a valid phone number in the US or Canada. It can extract a phone number’s NPA (area code) and NXX (prefix). It can format phone numbers in standard E.164 format, or in “friendly” or “compact” format.

```javascript
const PhoneNumber = require('@reallyuseful/phonenumber');

console.log(PhoneNumber.valid('206.867.1234')); // true, follows correct digit pattern
console.log(PhoneNumber.valid('206-123-4567')); // false, invalid digit pattern
console.log(PhoneNumber.valid('206-555-6666')); // false, 555 is not a valid NXX
console.log(PhoneNumber.valid('1-006-867-1234')); // false, 006 is not a valid NPA

console.log(PhoneNumber.extract('2068671234'));
// breaks the number into parts: { npa: '206', nxx: '867', station: '1234' }

console.log(PhoneNumber.isTollFree('206 8671234')); // false, not toll-free
console.log(PhoneNumber.isTollFree('8002223333')); // true, this is toll-free
console.log(PhoneNumber.isTollFree('(833) 333-3333')); // true, this is toll-free

console.log(PhoneNumber.formatStandard('206 867 1234')); // "+12068671234" (E.164 format)
console.log(PhoneNumber.formatFriendly('12068671234')); // "(206) 867-1234"
console.log(PhoneNumber.formatCompact('(206) 867-1234')); // "206-867-1234"
```

## Input format

The phone number you pass to these functions can be in almost any format. It doesn’t matter if there are spaces, parentheses or other punctuation. If it’s potentially valid, it will be recognized.

## Validating a phone number

- **valid(_phoneNumber_)** – Returns true if the number follows [North American Numbering Plan](https://en.wikipedia.org/wiki/North_American_Numbering_Plan) rules, which means that it is a potentially valid phone number in the US, Canada and parts of the Caribbean.

This module does not use any external service. It can’t tell if the phone number is actually live or who it belongs to. If you need that information, use a paid service like the [Twilio Lookup API](https://www.twilio.com/lookup).

### Numbers that are not recognized

- Short numbers like `911` and `311` are not recognized.
- Local-only numbers (7-digits without an area code) are not recognized.

## Formatting a phone number

- **formatStandard(_phoneNumber_)** – Returns the phone number in [E.164 format](https://en.wikipedia.org/wiki/E.164). This is recommended for storing phone numbers in a database. It begins with a `+` sign followed by the “country code” (which is `1` for all countries that are part of the NANP). Example: `+12068671234`
- **formatFriendly(_phoneNumber_)** – Returns the common display format for phone numbers: `(206) 867-1234`
- **formatCompact(_phoneNumber_)** – Returns another common display format that is slightly shorter: `206-867-1234`

If you try to format an invalid phone number, `InvalidPhoneNumberError` will be thrown.

## Parsing a phone number

- **parse(_phoneNumber_)** – Extracts the NPA (area code), NXX (prefix) and station (last 4 digits) of the phone number. Example: `{ "npa": "206", "nxx": "867", "station": "1234" }`

If you call this function with an invalid phone number, `InvalidPhoneNumberError` will be thrown.

## Identifying toll-free phone numbers

- **isTollFree(_phoneNumber_)** - Returns true for valid phone numbers in area codes `800`, `888`, `877`, `866`, `855`, `844`, or `833`.

If you call this function with an invalid phone number, `InvalidPhoneNumberError` will be thrown.
