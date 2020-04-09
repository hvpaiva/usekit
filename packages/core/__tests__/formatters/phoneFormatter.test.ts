import { PhoneFormatter } from '@usekit/core';

const VALID_FORMATTED_PHONE = '(00) 0 0000-0000';
const VALID_UNFORMATTED_PHONE = '00000000000';
const INVALID_FORMAT_PHONE = '0000';

const phoneFormatter = new PhoneFormatter();

describe('test PHONE formatter', () => {
  it('should format PHONE', () => {
    expect(phoneFormatter.format(VALID_UNFORMATTED_PHONE)).toBe(
      VALID_FORMATTED_PHONE,
    );
    expect(phoneFormatter.format(VALID_FORMATTED_PHONE)).toBe(
      VALID_FORMATTED_PHONE,
    );
    expect(phoneFormatter.format(INVALID_FORMAT_PHONE)).toBe(
      INVALID_FORMAT_PHONE,
    );
  });

  it('should unformat PHONE', () => {
    expect(phoneFormatter.unformat(VALID_UNFORMATTED_PHONE)).toBe(
      VALID_UNFORMATTED_PHONE,
    );
    expect(phoneFormatter.unformat(VALID_FORMATTED_PHONE)).toBe(
      VALID_UNFORMATTED_PHONE,
    );
    expect(phoneFormatter.unformat(INVALID_FORMAT_PHONE)).toBe(
      INVALID_FORMAT_PHONE,
    );
  });

  it('should check if PHONE isFormatted', () => {
    expect(phoneFormatter.isFormatted(VALID_UNFORMATTED_PHONE)).toBe(false);
    expect(phoneFormatter.isFormatted(VALID_FORMATTED_PHONE)).toBe(true);
    expect(phoneFormatter.isFormatted(INVALID_FORMAT_PHONE)).toBe(false);
  });

  it('should check if PHONE isUnformatted', () => {
    expect(phoneFormatter.isUnformatted(VALID_UNFORMATTED_PHONE)).toBe(true);
    expect(phoneFormatter.isUnformatted(VALID_FORMATTED_PHONE)).toBe(false);
    expect(phoneFormatter.isUnformatted(INVALID_FORMAT_PHONE)).toBe(false);
  });

  it('should check if PHONE isFormattable', () => {
    expect(phoneFormatter.isFormattable(VALID_UNFORMATTED_PHONE)).toBe(true);
    expect(phoneFormatter.isFormattable(VALID_FORMATTED_PHONE)).toBe(true);
    expect(phoneFormatter.isFormattable(INVALID_FORMAT_PHONE)).toBe(false);
  });
});
