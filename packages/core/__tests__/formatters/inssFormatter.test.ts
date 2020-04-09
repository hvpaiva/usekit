import { InssFormatter } from '@usekit/core';

const VALID_FORMATTED_INSS = '11.111.11111/11';
const VALID_UNFORMATTED_INSS = '111111111111';
const INVALID_FORMAT_INSS = '0000';

const inssFormatter = new InssFormatter();

describe('test INSS formatter', () => {
  it('should format INSS', () => {
    expect(inssFormatter.format(VALID_UNFORMATTED_INSS)).toBe(
      VALID_FORMATTED_INSS,
    );
    expect(inssFormatter.format(VALID_FORMATTED_INSS)).toBe(
      VALID_FORMATTED_INSS,
    );
    expect(inssFormatter.format(INVALID_FORMAT_INSS)).toBe(INVALID_FORMAT_INSS);
  });

  it('should unformat INSS', () => {
    expect(inssFormatter.unformat(VALID_UNFORMATTED_INSS)).toBe(
      VALID_UNFORMATTED_INSS,
    );
    expect(inssFormatter.unformat(VALID_FORMATTED_INSS)).toBe(
      VALID_UNFORMATTED_INSS,
    );
    expect(inssFormatter.unformat(INVALID_FORMAT_INSS)).toBe(
      INVALID_FORMAT_INSS,
    );
  });

  it('should check if INSS isFormatted', () => {
    expect(inssFormatter.isFormatted(VALID_UNFORMATTED_INSS)).toBe(false);
    expect(inssFormatter.isFormatted(VALID_FORMATTED_INSS)).toBe(true);
    expect(inssFormatter.isFormatted(INVALID_FORMAT_INSS)).toBe(false);
  });

  it('should check if INSS isUnformatted', () => {
    expect(inssFormatter.isUnformatted(VALID_UNFORMATTED_INSS)).toBe(true);
    expect(inssFormatter.isUnformatted(VALID_FORMATTED_INSS)).toBe(false);
    expect(inssFormatter.isUnformatted(INVALID_FORMAT_INSS)).toBe(false);
  });

  it('should check if INSS isFormattable', () => {
    expect(inssFormatter.isFormattable(VALID_UNFORMATTED_INSS)).toBe(true);
    expect(inssFormatter.isFormattable(VALID_FORMATTED_INSS)).toBe(true);
    expect(inssFormatter.isFormattable(INVALID_FORMAT_INSS)).toBe(false);
  });
});
