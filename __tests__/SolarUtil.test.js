var {SolarUtil} = require('../lunar');

test('isLeapYear()', () => {
  expect(SolarUtil.isLeapYear(2020)).toBe(true);
  expect(SolarUtil.isLeapYear(2021)).toBe(false);
});

test('getDaysOfMonth()', () => {
  expect(SolarUtil.getDaysOfMonth(2020, 1)).toBe(31);
  expect(SolarUtil.getDaysOfMonth(2021, 2)).toBe(28);
});
