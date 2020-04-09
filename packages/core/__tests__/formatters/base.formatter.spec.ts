import { BaseFormatter } from '@usekit/core';

const VALID_FORMATTED_CUSTOM = '000-000';
const VALID_UNFORMATTED_CUSTOM = '000000';
const INVALID_FORMAT_CUSTOM = '0000';

const CUSTOM_FORMATS = {
  formatted: {
    pattern: /^(\d{3})-(\d{3})$/m,
    replacement: '$1-$2',
  },
  unformatted: {
    pattern: /^(\d{3})(\d{3})$/m,
    replacement: '$1$2',
  },
};

const customFormatter = new BaseFormatter(CUSTOM_FORMATS);

describe('test base formatter', () => {
  it('should format CUSTOM', () => {
    expect(customFormatter.format(VALID_UNFORMATTED_CUSTOM)).toBe(
      VALID_FORMATTED_CUSTOM,
    );
    expect(customFormatter.format(VALID_FORMATTED_CUSTOM)).toBe(
      VALID_FORMATTED_CUSTOM,
    );
    expect(customFormatter.format(INVALID_FORMAT_CUSTOM)).toBe(
      INVALID_FORMAT_CUSTOM,
    );
  });

  it('should unformat CUSTOM', () => {
    expect(customFormatter.unformat(VALID_UNFORMATTED_CUSTOM)).toBe(
      VALID_UNFORMATTED_CUSTOM,
    );
    expect(customFormatter.unformat(VALID_FORMATTED_CUSTOM)).toBe(
      VALID_UNFORMATTED_CUSTOM,
    );
    expect(customFormatter.unformat(INVALID_FORMAT_CUSTOM)).toBe(
      INVALID_FORMAT_CUSTOM,
    );
  });

  it('should check if CUSTOM isFormatted', () => {
    expect(customFormatter.isFormatted(VALID_UNFORMATTED_CUSTOM)).toBe(false);
    expect(customFormatter.isFormatted(VALID_FORMATTED_CUSTOM)).toBe(true);
    expect(customFormatter.isFormatted(INVALID_FORMAT_CUSTOM)).toBe(false);
  });

  it('should check if CUSTOM isUnformatted', () => {
    expect(customFormatter.isUnformatted(VALID_UNFORMATTED_CUSTOM)).toBe(true);
    expect(customFormatter.isUnformatted(VALID_FORMATTED_CUSTOM)).toBe(false);
    expect(customFormatter.isUnformatted(INVALID_FORMAT_CUSTOM)).toBe(false);
  });

  it('should check if CUSTOM isFormattable', () => {
    expect(customFormatter.isFormattable(VALID_UNFORMATTED_CUSTOM)).toBe(true);
    expect(customFormatter.isFormattable(VALID_FORMATTED_CUSTOM)).toBe(true);
    expect(customFormatter.isFormattable(INVALID_FORMAT_CUSTOM)).toBe(false);
  });
});
