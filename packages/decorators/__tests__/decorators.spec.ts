import { Validator } from 'class-validator';

import { IsInss, IsCpf, IsCnpj, IsCep } from '@usekit/decorators';

class TestClass {
  @IsInss()
  inss: string;

  @IsCpf()
  cpf: string;

  @IsCnpj()
  cnpj: string;

  @IsCep()
  cep: string;

  constructor(inss: string, cpf: string, cnpj: string, cep: string) {
    this.inss = inss;
    this.cpf = cpf;
    this.cnpj = cnpj;
    this.cep = cep;
  }
}

const VALID_FORMATTED_MODEL = new TestClass(
  '11.111.11111/11',
  '419.452.849-27',
  '02.343.733/0001-54',
  '35400-000',
);

const VALID_UNFORMATTED_MODEL = new TestClass(
  '111111111111',
  '41945284927',
  '02343733000154',
  '35400000',
);

const INVALID_MODEL = new TestClass(
  '111111111',
  '419452849',
  '023437330001',
  '354000',
);
const validator = new Validator();

describe('test decorators', () => {
  it('should pass with valid formatted model', () => {
    return validator.validate(VALID_FORMATTED_MODEL).then((errors) => {
      expect(errors.length).toBe(0);
    });
  });

  it('should pass with valid unformatted model', () => {
    return validator.validate(VALID_UNFORMATTED_MODEL).then((errors) => {
      expect(errors.length).toBe(0);
    });
  });

  it('should fail with wrong model values', () => {
    return validator.validate(INVALID_MODEL).then((errors) => {
      expect(errors.length).toBe(4);
    });
  });
});
