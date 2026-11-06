function utcCalendarDate(year: number, month: number, day: number): Date {
  const date = new Date(0);
  date.setUTCFullYear(year, month - 1, day);
  return date;
}
export function dayOfYear(isoDate: string): number {
  if (typeof isoDate !== 'string') throw new TypeError('Expected date text');
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(isoDate);
  if (!m) throw new RangeError('Expected YYYY-MM-DD');
  const y = Number(m[1]),
    mo = Number(m[2]),
    d = Number(m[3]),
    date = utcCalendarDate(y, mo, d);
  if (
    y < 1 ||
    date.getUTCFullYear() !== y ||
    date.getUTCMonth() !== mo - 1 ||
    date.getUTCDate() !== d
  )
    throw new RangeError('Invalid date');
  return Math.floor((date.getTime() - utcCalendarDate(y, 1, 1).getTime()) / 86400000) + 1;
}
