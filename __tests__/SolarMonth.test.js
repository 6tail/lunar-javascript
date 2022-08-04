var {SolarMonth} = require('../lunar');

test('toString()', () => {
  const month = SolarMonth.fromYm(2019, 5);
  expect(month.toString()).toBe('2019-5');
  expect(month.next(1).toString()).toBe('2019-6');
});

test('toFullString()', () => {
  const month = SolarMonth.fromYm(2019, 5);
  expect(month.toFullString()).toBe('2019年5月');
  expect(month.next(1).toFullString()).toBe('2019年6月');
});

test('test1', () => {
  const month = SolarMonth.fromYm(2022, 7);
  const weeks = month.getWeeks(0);
  const lastWeek = weeks[weeks.length - 1];
  const days = lastWeek.getDays();
  expect(days[0].toFullString()).toBe('2022-07-31 00:00:00 星期日 狮子座');
});

test('test2', () => {
  const month = SolarMonth.fromYm(2022, 7);
  const weeks = month.getWeeks(0);
  const lastWeek = weeks[weeks.length - 1];
  const days = lastWeek.getDays();
  expect(days[1].toFullString()).toBe('2022-08-01 00:00:00 星期一 (建军节) 狮子座');
});

test('test3', () => {
  const month = SolarMonth.fromYm(2022, 7);
  const weeks = month.getWeeks(0);
  const lastWeek = weeks[weeks.length - 1];
  const days = lastWeek.getDays();
  expect(days[6].toFullString()).toBe('2022-08-06 00:00:00 星期六 狮子座');
});
