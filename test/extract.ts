import test from 'ava';
import { InvalidPhoneNumberError, parse } from '../src';

test('parse() parses valid phone numbers', t => {
  t.deepEqual(parse('(206) 867-5309'), { npa: '206', nxx: '867', station: '5309' });
  t.deepEqual(parse('+1 (206) 867-5309'), { npa: '206', nxx: '867', station: '5309' });
});

test('parse() throws an error for invalid phone numbers', t => {
  t.throws(
    () => {
      parse('1238675309');
    },
    { instanceOf: InvalidPhoneNumberError }
  );
});
