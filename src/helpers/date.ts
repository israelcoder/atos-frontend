import { DateTime, Settings } from 'luxon';

Settings.defaultLocale = 'pt-BR';

export function DateTimeZoned(
  date: DateTime | Date | string | number = DateTime.now(),
) {
  if (date instanceof DateTime) {
    return date.setZone('America/Sao_Paulo');
  } else if (date instanceof Date) {
    return DateTime.fromJSDate(date).setZone('America/Sao_Paulo');
  } else if (typeof date === 'number') {
    return DateTime.fromMillis(date).setZone('America/Sao_Paulo');
  } else if (typeof date === 'string') {
    return DateTime.fromISO(date).setZone('America/Sao_Paulo');
  }

  return date;
}
