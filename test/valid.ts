import test from 'ava';
import { valid } from '../src';

test('valid() returns true for valid phone numbers', t => {
  t.true(valid('2068675309'));
  t.true(valid('12068675309'));
  t.true(valid('+12068675309'));
  t.true(valid('+12068670000'));
  t.true(valid('+12068670911'));
  t.true(valid('(206) 867-5309'));
  t.true(valid('1 (206) 867-5309'));
  t.true(valid('206-867-5309'));
  t.true(valid('206.867.5309'));
  t.true(valid('206 867 5309'));
  t.true(valid('1 206 867 5309'));
  t.true(valid('2238675309'));
  t.true(valid('3408675309'));
  t.true(valid('6678675309'));
  t.true(valid('9598675309'));
  t.true(valid('206-206-5309'));
  t.true(valid('206-614-5309'));
});

test('valid() returns false for numbers with invalid NPAs', t => {
  t.false(valid('200-867-5309'));
  t.false(valid('006-867-5309'));
  t.false(valid('126-867-5309'));
  t.false(valid('911-867-5309'));
});

test('valid() returns false for numbers with invalid NXXs', t => {
  t.false(valid('206-123-5309'));
  t.false(valid('206-023-5309'));
  t.false(valid('206-211-5309'));
});

test('valid() returns false for too-long phone numbers', t => {
  t.false(valid('206-867-5309123'));
});

test('valid() returns false for too-short phone numbers', t => {
  t.false(valid('206-867-530'));
  t.false(valid('311'));
});

test('valid() returns false for non-string phone numbers', t => {
  t.false(valid(null));
  t.false(valid(undefined));
  t.false(valid(42 as any)); // any b/c it won’t work in TypeScript but is possible in JS
});
