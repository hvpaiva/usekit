import { CnpjFormatter } from '@usekit/core';

const VALID_FORMATTED_CNPJ = '00.000.000/0000-00';
const VALID_UNFORMATTED_CNPJ = '00000000000000';
const INVALID_FORMAT_CNPJ = '0000';

const cnpjFormatter = new CnpjFormatter();

describe('test CNPJ formatter', () => {
  it('should format CNPJ', () => {
    expect(cnpjFormatter.format(VALID_UNFORMATTED_CNPJ)).toBe(
      VALID_FORMATTED_CNPJ,
    );
    expect(cnpjFormatter.format(VALID_FORMATTED_CNPJ)).toBe(
      VALID_FORMATTED_CNPJ,
    );
    expect(cnpjFormatter.format(INVALID_FORMAT_CNPJ)).toBe(INVALID_FORMAT_CNPJ);
  });

  it('should unformat CNPJ', () => {
    expect(cnpjFormatter.unformat(VALID_UNFORMATTED_CNPJ)).toBe(
      VALID_UNFORMATTED_CNPJ,
    );
    expect(cnpjFormatter.unformat(VALID_FORMATTED_CNPJ)).toBe(
      VALID_UNFORMATTED_CNPJ,
    );
    expect(cnpjFormatter.unformat(INVALID_FORMAT_CNPJ)).toBe(
      INVALID_FORMAT_CNPJ,
    );
  });

  it('should check if CNPJ isFormatted', () => {
    expect(cnpjFormatter.isFormatted(VALID_UNFORMATTED_CNPJ)).toBe(false);
    expect(cnpjFormatter.isFormatted(VALID_FORMATTED_CNPJ)).toBe(true);
    expect(cnpjFormatter.isFormatted(INVALID_FORMAT_CNPJ)).toBe(false);
  });

  it('should check if CNPJ isUnformatted', () => {
    expect(cnpjFormatter.isUnformatted(VALID_UNFORMATTED_CNPJ)).toBe(true);
    expect(cnpjFormatter.isUnformatted(VALID_FORMATTED_CNPJ)).toBe(false);
    expect(cnpjFormatter.isUnformatted(INVALID_FORMAT_CNPJ)).toBe(false);
  });

  it('should check if CNPJ isFormattable', () => {
    expect(cnpjFormatter.isFormattable(VALID_UNFORMATTED_CNPJ)).toBe(true);
    expect(cnpjFormatter.isFormattable(VALID_FORMATTED_CNPJ)).toBe(true);
    expect(cnpjFormatter.isFormattable(INVALID_FORMAT_CNPJ)).toBe(false);
  });
});
