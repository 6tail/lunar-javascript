var {Solar} = require('../lunar');

test('旬', () => {
  const solar = Solar.fromYmdHms(2020, 11, 19, 0, 0, 0);
  const lunar = solar.getLunar();
  expect(lunar.getYearXun()).toBe('甲午');
});

test('旬空', () => {
  const solar = Solar.fromYmdHms(2020, 11, 19, 0, 0, 0);
  const lunar = solar.getLunar();
  expect(lunar.getYearXunKong()).toBe('辰巳');
  expect(lunar.getMonthXunKong()).toBe('午未');
  expect(lunar.getDayXunKong()).toBe('戌亥');
});

test('八字旬空', () => {
  const solar = Solar.fromYmdHms(1990, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getDayXunKong()).toBe('子丑');
});
