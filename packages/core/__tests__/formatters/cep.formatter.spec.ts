import { CepFormatter } from '@usekit/core';

const VALID_FORMATTED_CEP = '00000-000';
const VALID_UNFORMATTED_CEP = '00000000';
const INVALID_FORMAT_CEP = '0000';

const cepFormatter = new CepFormatter();

describe('test CEP formatter', () => {
  it('should format CEP', () => {
    expect(cepFormatter.format(VALID_UNFORMATTED_CEP)).toBe(
      VALID_FORMATTED_CEP,
    );
    expect(cepFormatter.format(VALID_FORMATTED_CEP)).toBe(VALID_FORMATTED_CEP);
    expect(cepFormatter.format(INVALID_FORMAT_CEP)).toBe(INVALID_FORMAT_CEP);
  });

  it('should unformat CEP', () => {
    expect(cepFormatter.unformat(VALID_UNFORMATTED_CEP)).toBe(
      VALID_UNFORMATTED_CEP,
    );
    expect(cepFormatter.unformat(VALID_FORMATTED_CEP)).toBe(
      VALID_UNFORMATTED_CEP,
    );
    expect(cepFormatter.unformat(INVALID_FORMAT_CEP)).toBe(INVALID_FORMAT_CEP);
  });

  it('should check if CEP isFormatted', () => {
    expect(cepFormatter.isFormatted(VALID_UNFORMATTED_CEP)).toBe(false);
    expect(cepFormatter.isFormatted(VALID_FORMATTED_CEP)).toBe(true);
    expect(cepFormatter.isFormatted(INVALID_FORMAT_CEP)).toBe(false);
  });

  it('should check if CEP isUnformatted', () => {
    expect(cepFormatter.isUnformatted(VALID_UNFORMATTED_CEP)).toBe(true);
    expect(cepFormatter.isUnformatted(VALID_FORMATTED_CEP)).toBe(false);
    expect(cepFormatter.isUnformatted(INVALID_FORMAT_CEP)).toBe(false);
  });

  it('should check if CEP isFormattable', () => {
    expect(cepFormatter.isFormattable(VALID_UNFORMATTED_CEP)).toBe(true);
    expect(cepFormatter.isFormattable(VALID_FORMATTED_CEP)).toBe(true);
    expect(cepFormatter.isFormattable(INVALID_FORMAT_CEP)).toBe(false);
  });
});
