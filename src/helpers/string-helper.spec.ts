import { describe, expect, it } from 'vitest';

import {
  capitalizeFirstLetter,
  getNameInitials,
  getOnlyNumbers,
} from './string';

describe('getOnlyNumbers', () => {
  it('should get only numbers from a string', () => {
    const result = getOnlyNumbers('abc123def456');
    expect(result).toBe('123456');
  });

  it('should return an empty string when there are no numbers', () => {
    const result = getOnlyNumbers('abcdef');
    expect(result).toBe('');
  });

  it('should return an empty string when null is passed', () => {
    const result = getOnlyNumbers(null as any);
    expect(result).toBe('');
  });
});

describe('capitalizeFirstLetter', () => {
  it('should capitalize the first letter of a string', () => {
    const result = capitalizeFirstLetter('hello');
    expect(result).toBe('Hello');
  });

  it('should return the same string if it is empty', () => {
    const result = capitalizeFirstLetter('');
    expect(result).toBe('');
  });
});

describe('getNameInitials', () => {
  it('should get the initials of a name', () => {
    const result = getNameInitials('John Doe');
    expect(result).toBe('JD');
  });

  it('should return an empty string when the name is empty', () => {
    const result = getNameInitials('');
    expect(result).toBe('');
  });
});
