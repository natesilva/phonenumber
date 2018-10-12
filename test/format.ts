import test from 'ava';
import {
  formatCompact,
  formatFriendly,
  formatStandard,
  InvalidPhoneNumberError
} from '../src';

test('formatStandard() formats valid phone numbers', t => {
  t.is(formatStandard('2068675309'), '+12068675309');
});

test('formatStandard() throws an error for invalid phone numbers', t => {
  t.throws(
    () => {
      formatStandard('1238675309');
    },
    { instanceOf: InvalidPhoneNumberError }
  );
});

test('formatFriendly() formats valid phone numbers', t => {
  t.is(formatFriendly('2068675309'), '(206) 867-5309');
});

test('formatFriendly() throws an error for invalid phone numbers', t => {
  t.throws(
    () => {
      formatFriendly('1238675309');
    },
    { instanceOf: InvalidPhoneNumberError }
  );
});

test('formatCompact() formats valid phone numbers', t => {
  t.is(formatCompact('2068675309'), '206-867-5309');
});

test('formatCompact() throws an error for invalid phone numbers', t => {
  t.throws(
    () => {
      formatCompact('1238675309');
    },
    { instanceOf: InvalidPhoneNumberError }
  );
});
