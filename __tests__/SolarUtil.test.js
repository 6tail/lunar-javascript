var {SolarUtil} = require('../lunar');

test('isLeapYear()', () => {
  expect(SolarUtil.isLeapYear(2020)).toBe(true);
  expect(SolarUtil.isLeapYear(2021)).toBe(false);
});

test('getDaysOfMonth()', () => {
  expect(SolarUtil.getDaysOfMonth(2020, 1)).toBe(31);
  expect(SolarUtil.getDaysOfMonth(2021, 2)).toBe(28);
});

test('addDays', () => {
  var ymd = SolarUtil.addDays(2022,1,1, 1);
  expect(ymd.year).toBe(2022);
  expect(ymd.month).toBe(1);
  expect(ymd.day).toBe(2);
});

test('addDays2', () => {
  var ymd = SolarUtil.addDays(2022,1,31, 1);
  expect(ymd.year).toBe(2022);
  expect(ymd.month).toBe(2);
  expect(ymd.day).toBe(1);
});

test('addDays3', () => {
  var ymd = SolarUtil.addDays(2022,1,1, 365);
  expect(ymd.year).toBe(2023);
  expect(ymd.month).toBe(1);
  expect(ymd.day).toBe(1);
});

test('addDays4', () => {
  var ymd = SolarUtil.addDays(2023,1,1, -365);
  expect(ymd.year).toBe(2022);
  expect(ymd.month).toBe(1);
  expect(ymd.day).toBe(1);
});

test('addDays5', () => {
  var ymd = SolarUtil.addDays(1582,10,4, 1);
  expect(ymd.year).toBe(1582);
  expect(ymd.month).toBe(10);
  expect(ymd.day).toBe(15);
});

test('addDays6', () => {
  var ymd = SolarUtil.addDays(1582,10,4, 18);
  expect(ymd.year).toBe(1582);
  expect(ymd.month).toBe(11);
  expect(ymd.day).toBe(1);
});

test('addDays7', () => {
  var ymd = SolarUtil.addDays(1582,11,1, -18);
  expect(ymd.year).toBe(1582);
  expect(ymd.month).toBe(10);
  expect(ymd.day).toBe(4);
});

test('addDays8', () => {
  var ymd = SolarUtil.addDays(1582,11,1, -17);
  expect(ymd.year).toBe(1582);
  expect(ymd.month).toBe(10);
  expect(ymd.day).toBe(15);
});

test('getDaysBetween', () => {
  var days = SolarUtil.getDaysBetween(1582, 10, 4, 1582, 10, 15);
  expect(days).toBe(1);
});

test('getDaysBetween1', () => {
  var days = SolarUtil.getDaysBetween(1582, 10, 4, 1582, 11, 1);
  expect(days).toBe(18);
});

test('getDaysBetween2', () => {
  var days = SolarUtil.getDaysBetween(1582, 1, 1, 1583, 1, 1);
  expect(days).toBe(355);
});

test('getWeek', () => {
  var week = SolarUtil.getWeek(1582, 10, 1);
  expect(week).toBe(1);
});

test('getWeek1', () => {
  var week = SolarUtil.getWeek(1582, 10, 15);
  expect(week).toBe(5);
});
