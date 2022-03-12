var {Solar, Lunar} = require('../lunar');

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

it('test2', () => {
  const lunar = Lunar.fromYmdHms(2019, 12, 12, 11, 22, 0);
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(1);
  expect(yun.getStartYear()).toBe(0);
  expect(yun.getStartMonth()).toBe(1);
  expect(yun.getStartDay()).toBe(0);
  expect(yun.getStartSolar().toYmd()).toBe('2020-02-06');
});

it('test3', () => {
  const solar = Solar.fromYmdHms(2020, 1, 6, 11, 22, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(1);
  expect(yun.getStartYear()).toBe(0);
  expect(yun.getStartMonth()).toBe(1);
  expect(yun.getStartDay()).toBe(0);
  expect(yun.getStartSolar().toYmd()).toBe('2020-02-06');
});

it('test4', () => {
  const solar = Solar.fromYmdHms(2022, 3, 9, 20, 51, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(1);
  expect(yun.getStartSolar().toYmd()).toBe('2030-12-19');
});

it('test5', () => {
  const solar = Solar.fromYmdHms(2022, 3, 9, 20, 51, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(1, 2);
  expect(yun.getStartYear()).toBe(8);
  expect(yun.getStartMonth()).toBe(9);
  expect(yun.getStartDay()).toBe(2);
  expect(yun.getStartSolar().toYmd()).toBe('2030-12-12');
});

it('test6', () => {
  const solar = Solar.fromYmdHms(2018, 6, 11, 9, 30, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(0, 2);
  expect(yun.getStartSolar().toYmd()).toBe('2020-03-21');
});
