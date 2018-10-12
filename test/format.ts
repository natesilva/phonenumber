import test from 'ava';
import {
  compact,
  formatCompact,
  formatFriendly,
  formatStandard,
  friendly,
  InvalidPhoneNumberError,
  standard
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

  t.throws(
    () => {
      formatStandard(null);
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

  t.throws(
    () => {
      formatFriendly(null);
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

  t.throws(
    () => {
      formatCompact(null);
    },
    { instanceOf: InvalidPhoneNumberError }
  );
});

test('format short-named alias functions are the same as their long-named equivalents', t => {
  t.deepEqual(standard, formatStandard);
  t.deepEqual(friendly, formatFriendly);
  t.deepEqual(compact, formatCompact);
});
