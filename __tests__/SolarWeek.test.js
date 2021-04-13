var {SolarWeek,SolarUtil} = require('../lunar');

test('testFromMonday', () => {
  const start = 1;
  const week = SolarWeek.fromYmd(2019, 5, 1, start);
  expect(week.toString()).toBe('2019.5.1');
  expect(week.toFullString()).toBe('2019年5月第1周');
  expect(SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), start)).toBe(5);
  expect(week.getFirstDay().toString()).toBe('2019-04-29');
  expect(week.getFirstDayInMonth().toString()).toBe('2019-05-01');
});

test('testFromSunday', () => {
  const start = 0;
  const week = SolarWeek.fromYmd(2019, 5, 1, start);
  expect(week.toString()).toBe('2019.5.1');
  expect(week.toFullString()).toBe('2019年5月第1周');
  expect(SolarUtil.getWeeksOfMonth(week.getYear(), week.getMonth(), start)).toBe(5);
  expect(week.getFirstDay().toString()).toBe('2019-04-28');
  expect(week.getFirstDayInMonth().toString()).toBe('2019-05-01');
});
