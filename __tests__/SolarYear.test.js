var {SolarYear} = require('../lunar');

test('toString()', () => {
  const year = SolarYear.fromYear(2019);
  expect(year.toString()).toBe('2019');
  expect(year.next(1).toString()).toBe('2020');
});

test('toFullString()', () => {
  const year = SolarYear.fromYear(2019);
  expect(year.toFullString()).toBe('2019年');
  expect(year.next(1).toFullString()).toBe('2020年');
});
