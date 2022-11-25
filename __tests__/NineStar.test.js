const {Solar, Lunar} = require('../lunar');

test('test1', () => {
  const lunar = Solar.fromYmd(1985, 2, 19).getLunar();
  expect(lunar.getYearNineStar().getNumber()).toBe('六');
});

test('test023', () => {
  const lunar = Lunar.fromYmd(2022, 1, 1);
  expect(lunar.getYearNineStar().toString()).toBe('六白金开阳');
});

test('test024', () => {
  const lunar = Lunar.fromYmd(2033, 1, 1);
  expect(lunar.getYearNineStar().toString()).toBe('四绿木天权');
});
