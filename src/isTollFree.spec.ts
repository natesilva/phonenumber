import * as assert from 'assert';
import { describe, it } from 'mocha';
import { InvalidPhoneNumberError } from './errors';
import { isTollFree } from './isTollFree';

describe('isTollFree', () => {
  it('SHOULD return true for toll-free numbers', () => {
    assert(isTollFree('800-222-3333'));
  });

  it('SHOULD return false for non-toll-free numbers', () => {
    assert.strictEqual(isTollFree('206-867-5309'), false);
  });

  it('SHOULD throw an error for invalid phone numbers', () => {
    assert.throws(() => {
      isTollFree('1238675309');
    }, InvalidPhoneNumberError);
  });
});
