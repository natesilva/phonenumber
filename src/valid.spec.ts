import * as assert from 'assert';
import { describe, it } from 'mocha';
import { valid } from '../src';

describe('valid', () => {
  it('SHOULD returns true for valid phone numbers', () => {
    assert(valid('2068675309'));
    assert(valid('12068675309'));
    assert(valid('+12068675309'));
    assert(valid('+12068670000'));
    assert(valid('+12068670911'));
    assert(valid('(206) 867-5309'));
    assert(valid('1 (206) 867-5309'));
    assert(valid('206-867-5309'));
    assert(valid('206.867.5309'));
    assert(valid('206 867 5309'));
    assert(valid('1 206 867 5309'));
    assert(valid('2238675309'));
    assert(valid('3408675309'));
    assert(valid('6678675309'));
    assert(valid('9598675309'));
    assert(valid('206-206-5309'));
    assert(valid('206-614-5309'));
    assert(valid('855-211-1234'));
  });

  it('SHOULD return false for numbers with invalid NPAs', () => {
    assert.strictEqual(valid('200-867-5309'), false);
    assert.strictEqual(valid('006-867-5309'), false);
    assert.strictEqual(valid('126-867-5309'), false);
    assert.strictEqual(valid('911-867-5309'), false);
  });

  it('SHOULD return false for numbers with invalid NXXs', () => {
    assert.strictEqual(valid('206-123-5309'), false);
    assert.strictEqual(valid('206-023-5309'), false);
    assert.strictEqual(valid('206-211-5309'), false);
  });

  it('SHOULD return false for too-long phone numbers', () => {
    assert.strictEqual(valid('206-867-5309123'), false);
  });

  it('SHOULD return false for too-short phone numbers', () => {
    assert.strictEqual(valid('206-867-530'), false);
    assert.strictEqual(valid('311'), false);
  });

  it('SHOULD return false for non-string phone numbers', () => {
    // any b/c it won’t work in TypeScript but is possible in JS
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assert.strictEqual(valid(null as any), false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assert.strictEqual(valid(undefined as any), false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    assert.strictEqual(valid(42 as any), false);
  });

  it('SHOULD return false for bogus 555 numbers', () => {
    assert.strictEqual(valid('206-555-6666'), false);
  });

  it('SHOULD return true for valid 555 numbers', () => {
    assert(valid('206-555-1212'));
    assert(valid('206-555-4334'));
  });
});
