import { describe, expect, it } from 'vitest';

import { maskCEP, maskCNPJ, maskCPF, maskPhone } from './masks';

describe('maskCPF', () => {
  it('should format a valid CPF', () => {
    const result = maskCPF('12345678901');
    expect(result).toBe('123.456.789-01');
  });

  it('should format a CPF with existing formatting', () => {
    const result = maskCPF('123.456.789-01');
    expect(result).toBe('123.456.789-01');
  });

  it('should return empty string when input is empty', () => {
    const result = maskCPF('');
    expect(result).toBe('');
  });

  it('should format CPF with mixed characters', () => {
    const result = maskCPF('123abc456def789gh01');
    expect(result).toBe('123.456.789-01');
  });
});

describe('maskCNPJ', () => {
  it('should format a valid CNPJ', () => {
    const result = maskCNPJ('12345678000195');
    expect(result).toBe('12.345.678/0001-95');
  });

  it('should format a CNPJ with existing formatting', () => {
    const result = maskCNPJ('12.345.678/0001-95');
    expect(result).toBe('12.345.678/0001-95');
  });

  it('should return empty string when input is empty', () => {
    const result = maskCNPJ('');
    expect(result).toBe('');
  });

  it('should return the same value when input is null or undefined', () => {
    expect(maskCNPJ(null as any)).toBe(null);
    expect(maskCNPJ(undefined as any)).toBe(undefined);
  });

  it('should format CNPJ with mixed characters', () => {
    const result = maskCNPJ('12abc345def678ghi000jkl195');
    expect(result).toBe('12.345.678/0001-95');
  });
});

describe('maskCEP', () => {
  it('should format a valid CEP', () => {
    const result = maskCEP('12345678');
    expect(result).toBe('12345-678');
  });

  it('should format a CEP with existing formatting', () => {
    const result = maskCEP('12345-678');
    expect(result).toBe('12345-678');
  });

  it('should return empty string when input is empty', () => {
    const result = maskCEP('');
    expect(result).toBe('');
  });

  it('should return the same value when input is null or undefined', () => {
    expect(maskCEP(null as any)).toBe(null);
    expect(maskCEP(undefined as any)).toBe(undefined);
  });

  it('should format CEP with mixed characters', () => {
    const result = maskCEP('123abc45def678');
    expect(result).toBe('12345-678');
  });
});

describe('maskPhone', () => {
  it('should format a mobile phone with area code', () => {
    const result = maskPhone('11987654321');
    expect(result).toBe('(11) 98765-4321');
  });

  it('should format a landline phone with area code', () => {
    const result = maskPhone('1133334444');
    expect(result).toBe('(11) 3333-4444');
  });

  it('should format a phone with country code', () => {
    const result = maskPhone('5511987654321');
    expect(result).toBe('+55 (11) 98765-4321');
  });

  it('should format a landline phone with country code', () => {
    const result = maskPhone('551133334444');
    expect(result).toBe('+55 (11) 3333-4444');
  });

  it('should return empty string when input is empty', () => {
    const result = maskPhone('');
    expect(result).toBe('');
  });

  it('should return the same value when input is null or undefined', () => {
    expect(maskPhone(null as any)).toBe(null);
    expect(maskPhone(undefined as any)).toBe(undefined);
  });

  it('should format phone with mixed characters', () => {
    const result = maskPhone('11abc987def654ghi321');
    expect(result).toBe('(11) 98765-4321');
  });

  it('should format phone with existing formatting', () => {
    const result = maskPhone('(11) 98765-4321');
    expect(result).toBe('(11) 98765-4321');
  });
});
