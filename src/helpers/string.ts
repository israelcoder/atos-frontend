export function getOnlyNumbers(value: string) {
  return String(value)
    .replace(/[^\d]+/g, '')
    .trim();
}

export function capitalizeFirstLetter(value: string) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

export function getNameInitials(name: string) {
  return name
    .split(' ')
    .map(word => word.charAt(0))
    .join('');
}
