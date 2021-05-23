var {Solar, Lunar} = require('../lunar');

test('test1', () => {
  const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYear()).toBe('乙酉');
  expect(eightChar.getMonth()).toBe('戊子');
  expect(eightChar.getDay()).toBe('辛巳');
  expect(eightChar.getTime()).toBe('壬辰');
});

test('test2', () => {
  const solar = Solar.fromYmdHms(1988, 2, 15, 23, 30, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYear()).toBe('戊辰');
  expect(eightChar.getMonth()).toBe('甲寅');
  expect(eightChar.getDay()).toBe('庚子');
  expect(eightChar.getTime()).toBe('戊子');
});

test('test2a', () => {
  const solar = Solar.fromYmdHms(1988, 2, 15, 23, 30, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();

  eightChar.setSect(1);

  expect(eightChar.getYear()).toBe('戊辰');
  expect(eightChar.getMonth()).toBe('甲寅');
  expect(eightChar.getDay()).toBe('辛丑');
  expect(eightChar.getTime()).toBe('戊子');
});

test('test3', () => {
  const solar = Solar.fromYmdHms(1988, 2, 15, 22, 30, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYear()).toBe('戊辰');
  expect(eightChar.getMonth()).toBe('甲寅');
  expect(eightChar.getDay()).toBe('庚子');
  expect(eightChar.getTime()).toBe('丁亥');
});

test('test4', () => {
  const solar = Solar.fromYmdHms(1988, 2, 2, 22, 30, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYear()).toBe('丁卯');
  expect(eightChar.getMonth()).toBe('癸丑');
  expect(eightChar.getDay()).toBe('丁亥');
  expect(eightChar.getTime()).toBe('辛亥');
});

test('test5', () => {
  const lunar = Lunar.fromYmdHms(2019,12,12,11,22,0);
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYear()).toBe('己亥');
  expect(eightChar.getMonth()).toBe('丁丑');
  expect(eightChar.getDay()).toBe('戊申');
  expect(eightChar.getTime()).toBe('戊午');
});

test('地支藏干', () => {
  const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYearHideGan() + '').toBe('辛');
  expect(eightChar.getMonthHideGan() + '').toBe('癸');
  expect(eightChar.getDayHideGan() + '').toBe('丙,庚,戊');
  expect(eightChar.getTimeHideGan() + '').toBe('戊,乙,癸');
});

test('天干十神', () => {
  const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYearShiShenGan()).toBe('偏财');
  expect(eightChar.getMonthShiShenGan()).toBe('正印');
  expect(eightChar.getDayShiShenGan()).toBe('日主');
  expect(eightChar.getTimeShiShenGan()).toBe('伤官');
});

test('地支十神', () => {
  const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYearShiShenZhi() + '').toBe('比肩');
  expect(eightChar.getMonthShiShenZhi() + '').toBe('食神');
  expect(eightChar.getDayShiShenZhi() + '').toBe('正官,劫财,正印');
  expect(eightChar.getTimeShiShenZhi() + '').toBe('正印,偏财,食神');
});

test('地势', () => {
  const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYearDiShi()).toBe('临官');
  expect(eightChar.getMonthDiShi()).toBe('长生');
  expect(eightChar.getDayDiShi()).toBe('死');
  expect(eightChar.getTimeDiShi()).toBe('墓');
});

test('纳音', () => {
  const solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYearNaYin()).toBe('泉中水');
  expect(eightChar.getMonthNaYin()).toBe('霹雳火');
  expect(eightChar.getDayNaYin()).toBe('白蜡金');
  expect(eightChar.getTimeNaYin()).toBe('长流水');
});

test('胎元', () => {
  let solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  let lunar = solar.getLunar();
  let eightChar = lunar.getEightChar();
  expect(eightChar.getTaiYuan()).toBe('己卯');

  solar = Solar.fromYmdHms(1995, 12, 18, 10, 28, 0);
  lunar = solar.getLunar();
  eightChar = lunar.getEightChar();
  expect(eightChar.getTaiYuan()).toBe('己卯');
});

test('命宫', () => {
  let solar = Solar.fromYmdHms(2005, 12, 23, 8, 37, 0);
  let lunar = solar.getLunar();
  let eightChar = lunar.getEightChar();
  expect(eightChar.getMingGong()).toBe('己丑');

  solar = Solar.fromYmdHms(1998, 6, 11, 4, 28, 0);
  lunar = solar.getLunar();
  eightChar = lunar.getEightChar();
  expect(eightChar.getMingGong()).toBe('辛酉');

  solar = Solar.fromYmdHms(1995, 12, 18, 10, 28, 0);
  lunar = solar.getLunar();
  eightChar = lunar.getEightChar();
  expect(eightChar.getMingGong()).toBe('戊子');
});

test('身宫', () => {
  const solar = Solar.fromYmdHms(1995, 12, 18, 10, 28, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getShenGong()).toBe('壬午');
});

