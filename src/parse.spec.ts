import * as assert from 'assert';
import { describe, it } from 'mocha';
import { InvalidPhoneNumberError } from './errors';
import { parse } from './parse';

describe('parse', () => {
  it('SHOULD parse valid phone numbers', () => {
    assert.deepStrictEqual(parse('(206) 867-5309'), {
      npa: '206',
      nxx: '867',
      station: '5309',
    });
    assert.deepStrictEqual(parse('+1 (206) 867-5309'), {
      npa: '206',
      nxx: '867',
      station: '5309',
    });
  });

  it('SHOULD throw an error for invalid phone numbers', () => {
    assert.throws(() => {
      parse('1238675309');
    }, InvalidPhoneNumberError);
  });
});
