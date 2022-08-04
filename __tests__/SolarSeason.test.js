var {SolarSeason} = require('../lunar');

test('toString()', () => {
  const season = SolarSeason.fromYm(2019, 5);
  expect(season.toString()).toBe('2019.2');
  expect(season.next(1).toString()).toBe('2019.3');
});

test('toFullString()', () => {
  const season = SolarSeason.fromYm(2019, 5);
  expect(season.toFullString()).toBe('2019年2季度');
  expect(season.next(1).toFullString()).toBe('2019年3季度');
});
