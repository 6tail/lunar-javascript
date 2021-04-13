var {SolarHalfYear} = require('../lunar');

test('toString()', () => {
  const halfYear = SolarHalfYear.fromYm(2019, 5);
  expect(halfYear.toString()).toBe('2019.1');
  expect(halfYear.next(1).toString()).toBe('2019.2');
});

test('toFullString()', () => {
  const halfYear = SolarHalfYear.fromYm(2019, 5);
  expect(halfYear.toFullString()).toBe('2019年上半年');
  expect(halfYear.next(1).toFullString()).toBe('2019年下半年');
});
