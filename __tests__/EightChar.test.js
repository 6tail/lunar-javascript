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

test('身宫1', () => {
  const solar = Solar.fromYmdHms(1994, 12, 6, 2, 0, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getShenGong()).toBe('丁丑');
});

test('身宫2', () => {
  const solar = Solar.fromYmdHms(1990, 12, 11, 6, 0, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getShenGong()).toBe('庚辰');
});

test('身宫3', () => {
  const solar = Solar.fromYmdHms(1993, 5, 23, 4, 0, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getShenGong()).toBe('庚申');
});

test('test11', () => {
  const lunar = Lunar.fromYmdHms(1987, 12, 28, 23, 30, 0);
  const eightChar = lunar.getEightChar();
  expect(eightChar.getYear()).toBe('戊辰');
  expect(eightChar.getMonth()).toBe('甲寅');
  expect(eightChar.getDay()).toBe('庚子');
  expect(eightChar.getTime()).toBe('戊子');
});

test('test12', () => {
  expect(Solar.fromYmdHms('1999', '06', '07', '09', '11', '00').getLunar().getEightChar().toString()).toBe('己卯 庚午 庚寅 辛巳');
});

test('流月', () => {
  const solar = Solar.fromYmdHms(2023, 5, 3, 9, 0, 0);
  const lunar = solar.getLunar();
  const eightChar = lunar.getEightChar();
  const yun = eightChar.getYun(1);
  expect(yun.getDaYun()[0].getLiuNian()[0].getLiuYue()[0].getGanZhi()).toBe('甲寅');
});

test('test19', () => {
  const solarList = Solar.fromBaZi('丁丑','癸卯','癸丑','辛酉', 2, 1900);
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1937-03-27 18:00:00', '1997-03-12 18:00:00']);
});

test('test20', () => {
  const lunar = Solar.fromYmdHms(2024, 1, 29, 9, 30, 0).getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getMingGong()).toBe('癸亥');
  expect(eightChar.getShenGong()).toBe('己未');
});


test('test21', () => {
  expect(Solar.fromYmdHms(1990, 1, 27, 0, 0, 0).getLunar().getEightChar().getShenGong()).toBe('丙寅');
});


test('test23', () => {
  expect(Solar.fromYmdHms(2019, 3, 7, 8, 0, 0).getLunar().getEightChar().getMingGong()).toBe('甲戌');
});


test('test24', () => {
  expect(Solar.fromYmdHms(2019, 3, 27, 2, 0, 0).getLunar().getEightChar().getMingGong()).toBe('丁丑');
});


test('test25', () => {
  expect(Lunar.fromYmdHms(1994, 5, 20, 18, 0 ,0).getEightChar().getMingGong()).toBe('丙寅');
});


test('test26', () => {
  const lunar = Solar.fromYmdHms(1986, 2, 16, 8, 0, 0).getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getMingGong()).toBe('己亥');
  expect(eightChar.getShenGong()).toBe('乙未');
});


test('test27', () => {
  const lunar = Solar.fromYmdHms(1972, 11, 27, 10, 0, 0).getLunar();
  const eightChar = lunar.getEightChar();
  expect(eightChar.getShenGong()).toBe('乙巳');
});

test('test28', () => {
  const solarList = Solar.fromBaZi('丁卯','丁未','甲申','乙丑', 1, 1900);
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1987-08-03 02:00:00']);
});

test('test29', () => {
  const solarList = Solar.fromBaZi('壬申','壬寅','庚辰','甲申', 1, 1801);
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1812-02-18 16:00:00', '1992-03-05 15:00:00']);
});
