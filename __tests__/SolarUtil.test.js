var {SolarUtil, Solar} = require('../lunar');

test('isLeapYear()', () => {
  expect(SolarUtil.isLeapYear(2020)).toBe(true);
  expect(SolarUtil.isLeapYear(2021)).toBe(false);
});

test('getDaysOfMonth()', () => {
  expect(SolarUtil.getDaysOfMonth(2020, 1)).toBe(31);
  expect(SolarUtil.getDaysOfMonth(2021, 2)).toBe(28);
});

test('addDays', () => {
  var solar = Solar.fromYmd(2022,1,1).next(1);
  expect(solar.getYear()).toBe(2022);
  expect(solar.getMonth()).toBe(1);
  expect(solar.getDay()).toBe(2);
});

test('addDays2', () => {
  var solar = Solar.fromYmd(2022,1,31).next(1);
  expect(solar.getYear()).toBe(2022);
  expect(solar.getMonth()).toBe(2);
  expect(solar.getDay()).toBe(1);
});

test('addDays3', () => {
  var solar = Solar.fromYmd(2022,1,1).next(365);
  expect(solar.getYear()).toBe(2023);
  expect(solar.getMonth()).toBe(1);
  expect(solar.getDay()).toBe(1);
});

test('addDays4', () => {
  var solar = Solar.fromYmd(2023,1,1).next(-365);
  expect(solar.getYear()).toBe(2022);
  expect(solar.getMonth()).toBe(1);
  expect(solar.getDay()).toBe(1);
});

test('addDays5', () => {
  var solar = Solar.fromYmd(1582,10,4).next(1);
  expect(solar.getYear()).toBe(1582);
  expect(solar.getMonth()).toBe(10);
  expect(solar.getDay()).toBe(15);
});

test('addDays6', () => {
  var solar = Solar.fromYmd(1582,10,4).next(18);
  expect(solar.getYear()).toBe(1582);
  expect(solar.getMonth()).toBe(11);
  expect(solar.getDay()).toBe(1);
});

test('addDays7', () => {
  var solar = Solar.fromYmd(1582,11,1).next(-18);
  expect(solar.getYear()).toBe(1582);
  expect(solar.getMonth()).toBe(10);
  expect(solar.getDay()).toBe(4);
});

test('addDays8', () => {
  var solar = Solar.fromYmd(1582,11,1).next(-17);
  expect(solar.getYear()).toBe(1582);
  expect(solar.getMonth()).toBe(10);
  expect(solar.getDay()).toBe(15);
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
  var week = Solar.fromYmd(1582, 10, 1).getWeek();
  expect(week).toBe(1);
});

test('getWeek1', () => {
  var week = Solar.fromYmd(1582, 10, 15).getWeek();
  expect(week).toBe(5);
});
