import test from 'ava';
import { InvalidPhoneNumberError, isTollFree } from '../src';

test('isTollFree() returns true for toll-free numbers', t => {
  t.true(isTollFree('800-222-3333'));
});

test('isTollFree() returns false for non-toll-free numbers', t => {
  t.false(isTollFree('206-867-5309'));
});

test('isTollFree() throws an error for invalid phone numbers', t => {
  t.throws(
    () => {
      isTollFree('1238675309');
    },
    { instanceOf: InvalidPhoneNumberError }
  );
});
