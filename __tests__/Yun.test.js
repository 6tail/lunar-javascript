var {Solar} = require('../lunar');

it('起运', () => {
  const solar = Solar.fromYmdHms(1981, 1, 29, 23, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(0);
  expect(yun.getStartYear()).toBe(8);
  expect(yun.getStartMonth()).toBe(0);
  expect(yun.getStartDay()).toBe(20);
  expect(yun.getStartSolar().toYmd()).toBe('1989-02-18');
});
