import { getOnlyNumbers } from './string';

export function maskCPF(value: string) {
  if (!value) return value;

  const onlyNumber = getOnlyNumbers(value);
  return onlyNumber.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, '$1.$2.$3-$4');
}

export function maskCNPJ(value: string) {
  if (!value) return value;

  const onlyNumber = getOnlyNumbers(value);
  return onlyNumber.replace(
    /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
    '$1.$2.$3/$4-$5',
  );
}

export function maskCEP(value: string) {
  if (!value) return value;

  const onlyNumber = getOnlyNumbers(value);
  return onlyNumber.replace(/(\d{5})(\d{3})/g, '$1-$2');
}

export function maskPhone(value: string) {
  if (!value) return value;

  const onlyNumber = getOnlyNumbers(value);
  return onlyNumber.replace(
    /^(\d{2})?(\d{2})(\d{4,5})(\d{4})/g,
    (_, group1, group2, group3, group4) => {
      if (group1) return `+${group1} (${group2}) ${group3}-${group4}`;

      return `(${group2}) ${group3}-${group4}`;
    },
  );
}
