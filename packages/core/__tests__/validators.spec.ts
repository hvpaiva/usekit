import {
  CpfValidator,
  CnpjValidator,
  CepValidator,
  InssValidator,
} from '@usekit/core';

const cpfValidator = new CpfValidator();
const VALID_FORMATTED_CPF = '419.452.849-27';
const VALID_UNFORMATTED_CPF = '41945284927';
const INVALID_FORMATTED_CPF = '000.000.000-00';
const INVALID_UNFORMATTED_CPF = '00000000000';
const INVALID_FORMAT_CPF = '0000';

const cnpjValidator = new CnpjValidator();
const VALID_FORMATTED_CNPJ = '02.343.733/0001-54';
const VALID_UNFORMATTED_CNPJ = '02343733000154';
const INVALID_FORMATTED_CNPJ = '00.000.000/0000-00';
const INVALID_UNFORMATTED_CNPJ = '00000000000000';
const INVALID_FORMAT_CNPJ = '0000';

const cepValidator = new CepValidator();
const VALID_FORMATTED_CEP = '35400-000';
const VALID_UNFORMATTED_CEP = '35400000';
const INVALID_FORMAT_CEP = '0000';

const inssValidator = new InssValidator();
const VALID_FORMATTED_INSS = '11.111.11111/11';
const VALID_UNFORMATTED_INSS = '111111111111';
const INVALID_FORMAT_INSS = '0000';

describe('test validators', () => {
  it('should validate an CPF', () => {
    expect(cpfValidator.validate(VALID_UNFORMATTED_CPF)).toBe(true);
    expect(cpfValidator.validate(VALID_FORMATTED_CPF)).toBe(true);
    expect(cpfValidator.validate(INVALID_FORMAT_CPF)).toBe(false);
    expect(cpfValidator.validate(INVALID_FORMATTED_CPF)).toBe(false);
    expect(cpfValidator.validate(INVALID_UNFORMATTED_CPF)).toBe(false);
  });

  it('should validate an CNPJ', () => {
    expect(cnpjValidator.validate(VALID_UNFORMATTED_CNPJ)).toBe(true);
    expect(cnpjValidator.validate(VALID_FORMATTED_CNPJ)).toBe(true);
    expect(cnpjValidator.validate(INVALID_FORMAT_CNPJ)).toBe(false);
    expect(cnpjValidator.validate(INVALID_FORMATTED_CNPJ)).toBe(false);
    expect(cnpjValidator.validate(INVALID_UNFORMATTED_CNPJ)).toBe(false);
  });

  it('should validate an CEP', () => {
    expect(cepValidator.validate(VALID_UNFORMATTED_CEP)).toBe(true);
    expect(cepValidator.validate(VALID_FORMATTED_CEP)).toBe(true);
    expect(cepValidator.validate(INVALID_FORMAT_CEP)).toBe(false);
  });

  it('should validate an INSS', () => {
    expect(inssValidator.validate(VALID_UNFORMATTED_INSS)).toBe(true);
    expect(inssValidator.validate(VALID_FORMATTED_INSS)).toBe(true);
    expect(inssValidator.validate(INVALID_FORMAT_INSS)).toBe(false);
  });
});
