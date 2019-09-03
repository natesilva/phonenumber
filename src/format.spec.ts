import * as assert from 'assert';
import { describe, it } from 'mocha';
import { InvalidPhoneNumberError } from './errors';
import {
  compact,
  formatCompact,
  formatFriendly,
  formatStandard,
  friendly,
  standard,
} from './format';

describe('format', () => {
  describe('formatStandard', () => {
    it('SHOULD format valid phone numbers', () => {
      assert.strictEqual(formatStandard('2068675309'), '+12068675309');
    });

    it('SHOULD throw an error for invalid phone numbers', () => {
      assert.throws(() => {
        formatStandard('1238675309');
      }, InvalidPhoneNumberError);

      assert.throws(() => {
        // any b/c it won’t work in TypeScript but is possible in JS
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatStandard(null as any);
      }, InvalidPhoneNumberError);
    });
  });

  describe('formatFriendly', () => {
    it('SHOULD format valid phone numbers', () => {
      assert.strictEqual(formatFriendly('2068675309'), '(206) 867-5309');
    });

    it('SHOULD throw an error for invalid phone numbers', () => {
      assert.throws(() => {
        formatFriendly('1238675309');
      }, InvalidPhoneNumberError);

      assert.throws(() => {
        // any b/c it won’t work in TypeScript but is possible in JS
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatFriendly(null as any);
      }, InvalidPhoneNumberError);
    });
  });

  describe('formatCompact', () => {
    it('SHOULD format valid phone numbers', () => {
      assert.strictEqual(formatCompact('2068675309'), '206-867-5309');
    });

    it('SHOULD throw an error for invalid phone numbers', () => {
      assert.throws(() => {
        formatCompact('1238675309');
      }, InvalidPhoneNumberError);

      assert.throws(() => {
        // any b/c it won’t work in TypeScript but is possible in JS
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatCompact(null as any);
      }, InvalidPhoneNumberError);
    });
  });

  it('SHOULD have short-named alias functions', () => {
    assert.deepStrictEqual(standard, formatStandard);
    assert.deepStrictEqual(friendly, formatFriendly);
    assert.deepStrictEqual(compact, formatCompact);
  });
});
