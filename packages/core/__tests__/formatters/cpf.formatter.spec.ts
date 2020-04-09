import { CpfFormatter } from '@usekit/core';

const VALID_FORMATTED_CPF = '000.000.000-00';
const VALID_UNFORMATTED_CPF = '00000000000';
const INVALID_FORMAT_CPF = '0000';

const cpfFormatter = new CpfFormatter();

describe('test CPF formatter', () => {
  it('should format CPF', () => {
    expect(cpfFormatter.format(VALID_UNFORMATTED_CPF)).toBe(
      VALID_FORMATTED_CPF,
    );
    expect(cpfFormatter.format(VALID_FORMATTED_CPF)).toBe(VALID_FORMATTED_CPF);
    expect(cpfFormatter.format(INVALID_FORMAT_CPF)).toBe(INVALID_FORMAT_CPF);
  });

  it('should unformat CPF', () => {
    expect(cpfFormatter.unformat(VALID_UNFORMATTED_CPF)).toBe(
      VALID_UNFORMATTED_CPF,
    );
    expect(cpfFormatter.unformat(VALID_FORMATTED_CPF)).toBe(
      VALID_UNFORMATTED_CPF,
    );
    expect(cpfFormatter.unformat(INVALID_FORMAT_CPF)).toBe(INVALID_FORMAT_CPF);
  });

  it('should check if CPF isFormatted', () => {
    expect(cpfFormatter.isFormatted(VALID_UNFORMATTED_CPF)).toBe(false);
    expect(cpfFormatter.isFormatted(VALID_FORMATTED_CPF)).toBe(true);
    expect(cpfFormatter.isFormatted(INVALID_FORMAT_CPF)).toBe(false);
  });

  it('should check if CPF isUnformatted', () => {
    expect(cpfFormatter.isUnformatted(VALID_UNFORMATTED_CPF)).toBe(true);
    expect(cpfFormatter.isUnformatted(VALID_FORMATTED_CPF)).toBe(false);
    expect(cpfFormatter.isUnformatted(INVALID_FORMAT_CPF)).toBe(false);
  });

  it('should check if CPF isFormattable', () => {
    expect(cpfFormatter.isFormattable(VALID_UNFORMATTED_CPF)).toBe(true);
    expect(cpfFormatter.isFormattable(VALID_FORMATTED_CPF)).toBe(true);
    expect(cpfFormatter.isFormattable(INVALID_FORMAT_CPF)).toBe(false);
  });
});
