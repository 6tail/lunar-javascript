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
