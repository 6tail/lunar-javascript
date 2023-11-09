var {SolarWeek,SolarUtil,Solar} = require('../lunar');

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

test('test1', () => {
  const start = 0;
  const week = SolarWeek.fromYmd(2022, 5, 1, start);
  expect(week.getIndex()).toBe(1);
});

test('test2', () => {
  const start = 2;
  const week = SolarWeek.fromYmd(2021, 5, 4, start);
  expect(week.getIndex()).toBe(2);
});

test('test3', () => {
  const start = 0;
  const week = SolarWeek.fromYmd(2022, 3, 6, start);
  expect(week.getIndexInYear()).toBe(11);
});

test('test4', () => {
  expect(Solar.fromYmd(1129, 11, 17).getWeek()).toBe(0);
});

test('test5', () => {
  expect(Solar.fromYmd(1129, 11, 1).getWeek()).toBe(5);
});

test('test6', () => {
  expect(Solar.fromYmd(8, 11, 1).getWeek()).toBe(4);
});

test('test7', () => {
  expect(Solar.fromYmd(1582, 9, 30).getWeek()).toBe(0);
});

test('test8', () => {
  expect(Solar.fromYmd(1582, 1, 1).getWeek()).toBe(1);
});

test('test9', () => {
  expect(Solar.fromYmd(1500, 2, 29).getWeek()).toBe(6);
});

test('test10', () => {
  expect(Solar.fromYmd(9865, 7, 26).getWeek()).toBe(3);
});

test('test11', () => {
  expect(Solar.fromYmd(1961, 9, 30).getWeek()).toBe(6);
  expect(Solar.fromYmdHms(1961, 9, 30, 23, 59, 59).getWeek()).toBe(6);
});

test('test12', () => {
  expect(Solar.fromYmdHms(2021, 9, 15, 0, 0, 0).getWeek()).toBe(3);
  expect(Solar.fromYmdHms(2021, 9, 15, 23, 59, 59).getWeek()).toBe(3);
});
