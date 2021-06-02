var {Solar, Lunar} = require('../lunar');

test('干支', () => {
  let solar = Solar.fromYmdHms(2020, 1, 1, 13, 22, 0);
let lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('己亥');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');
expect(lunar.getMonthInGanZhi()).toBe('丙子');
expect(lunar.getMonthInGanZhiExact()).toBe('丙子');

//小寒
solar = Solar.fromYmdHms(2020, 1, 6, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('己亥');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('丁丑');
expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');


solar = Solar.fromYmdHms(2020, 1, 20, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('己亥');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('丁丑');
expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');


//春节
solar = Solar.fromYmdHms(2020, 1, 25, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('丁丑');
expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');


solar = Solar.fromYmdHms(2020, 1, 30, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('丁丑');
expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');


solar = Solar.fromYmdHms(2020, 2, 1, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('丁丑');
expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');


solar = Solar.fromYmdHms(2020, 2, 4, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('戊寅');
expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');


solar = Solar.fromYmdHms(2020, 2, 4, 18, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('戊寅');
expect(lunar.getMonthInGanZhiExact()).toBe('戊寅');


solar = Solar.fromYmdHms(2020, 2, 5, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('戊寅');
expect(lunar.getMonthInGanZhiExact()).toBe('戊寅');


solar = Solar.fromYmdHms(2020, 5, 22, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('辛巳');
expect(lunar.getMonthInGanZhiExact()).toBe('辛巳');


solar = Solar.fromYmdHms(2020, 5, 23, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('辛巳');
expect(lunar.getMonthInGanZhiExact()).toBe('辛巳');

solar = Solar.fromYmdHms(2020, 5, 29, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('辛巳');
expect(lunar.getMonthInGanZhiExact()).toBe('辛巳');

solar = Solar.fromYmdHms(2020, 6, 1, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('辛巳');
expect(lunar.getMonthInGanZhiExact()).toBe('辛巳');

solar = Solar.fromYmdHms(2020, 6, 29, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('庚子');
expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
expect(lunar.getYearInGanZhiExact()).toBe('庚子');

expect(lunar.getMonthInGanZhi()).toBe('壬午');
expect(lunar.getMonthInGanZhiExact()).toBe('壬午');

solar = Solar.fromYmdHms(2019, 5, 1, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('己亥');
expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
expect(lunar.getYearInGanZhiExact()).toBe('己亥');

expect(lunar.getMonthInGanZhi()).toBe('戊辰');
expect(lunar.getMonthInGanZhiExact()).toBe('戊辰');

solar = Solar.fromYmdHms(1986, 5, 29, 13, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('丙寅');
expect(lunar.getYearInGanZhiByLiChun()).toBe('丙寅');
expect(lunar.getYearInGanZhiExact()).toBe('丙寅');

expect(lunar.getMonthInGanZhi()).toBe('癸巳');
expect(lunar.getMonthInGanZhiExact()).toBe('癸巳');

solar = Solar.fromYmdHms(1986, 5, 1, 1, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('丙寅');
expect(lunar.getYearInGanZhiByLiChun()).toBe('丙寅');
expect(lunar.getYearInGanZhiExact()).toBe('丙寅');

expect(lunar.getMonthInGanZhi()).toBe('壬辰');
expect(lunar.getMonthInGanZhiExact()).toBe('壬辰');

solar = Solar.fromYmdHms(1986, 5, 6, 1, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('丙寅');
expect(lunar.getYearInGanZhiByLiChun()).toBe('丙寅');
expect(lunar.getYearInGanZhiExact()).toBe('丙寅');

expect(lunar.getMonthInGanZhi()).toBe('癸巳');
expect(lunar.getMonthInGanZhiExact()).toBe('壬辰');

solar = Solar.fromYmdHms(1986, 5, 6, 23, 22, 0);
lunar = solar.getLunar();
expect(lunar.getYearInGanZhi()).toBe('丙寅');
expect(lunar.getYearInGanZhiByLiChun()).toBe('丙寅');
expect(lunar.getYearInGanZhiExact()).toBe('丙寅');

expect(lunar.getMonthInGanZhi()).toBe('癸巳');
expect(lunar.getMonthInGanZhiExact()).toBe('癸巳');
});

test('test8', () => {
  const lunar = Lunar.fromYmdHms(2020,12,10,13,0,0);
  expect(lunar.toString()).toBe('二〇二〇年腊月初十');
  expect(lunar.getSolar().toString()).toBe('2021-01-22');
});

test('test9', () => {
  const lunar = Lunar.fromYmdHms(1500,1,1,12,0,0);
  expect(lunar.getSolar().toString()).toBe('1500-01-31');
});

test('test10', () => {
  const lunar = Lunar.fromYmdHms(1500,12,29,12,0,0);
  expect(lunar.getSolar().toString()).toBe('1501-01-18');
});

test('test11', () => {
  const solar = Solar.fromYmdHms(1500,1,1,12,0,0);
  expect(solar.getLunar().toString()).toBe('一四九九年腊月初一');
});

test('test12', () => {
  const solar = Solar.fromYmdHms(1500,12,31,12,0,0);
  expect(solar.getLunar().toString()).toBe('一五〇〇年腊月十一');
});

test('test13', () => {
  const solar = Solar.fromYmdHms(1582,10,4,12,0,0);
  expect(solar.getLunar().toString()).toBe('一五八二年九月十八');
});

test('test14', () => {
  const solar = Solar.fromYmdHms(1582,10,15,12,0,0);
  expect(solar.getLunar().toString()).toBe('一五八二年九月十九');
});

test('test15', () => {
  const lunar = Lunar.fromYmdHms(1582,9,18,12,0,0);
  expect(lunar.getSolar().toString()).toBe('1582-10-04');
});

test('test16', () => {
  const lunar = Lunar.fromYmdHms(1582,9,19,12,0,0);
  expect(lunar.getSolar().toString()).toBe('1582-10-15');
});

test('test17', () => {
  const lunar = Lunar.fromYmdHms(2019,12,12,11,22,0);
  expect(lunar.getSolar().toString()).toBe('2020-01-06');
});

test('test18', () => {
  const solar = Solar.fromYmdHms(2020,2,4,13,22,0);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('庚子');
  expect(lunar.getYearInGanZhiByLiChun()).toBe('庚子');
  expect(lunar.getYearInGanZhiExact()).toBe('己亥');
  expect(lunar.getMonthInGanZhi()).toBe('戊寅');
  expect(lunar.getMonthInGanZhiExact()).toBe('丁丑');
});

test('test19', () => {
  const solar = Solar.fromYmdHms(2019, 2, 8, 13, 22, 0);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('己亥');
  expect(lunar.getYearInGanZhiByLiChun()).toBe('己亥');
  expect(lunar.getYearInGanZhiExact()).toBe('己亥');
  expect(lunar.getMonthInGanZhi()).toBe('丙寅');
  expect(lunar.getMonthInGanZhiExact()).toBe('丙寅');
});

test('test20', () => {
  const solar = Solar.fromYmdHms(1988, 2, 15, 23, 30,0);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('丁卯');
  expect(lunar.getYearInGanZhiByLiChun()).toBe('戊辰');
  expect(lunar.getYearInGanZhiExact()).toBe('戊辰');
});

test('test21', () => {
  const solar = Solar.fromYmd(1988, 2, 15);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('丁卯');
});

test('test22', () => {
  const solar = Solar.fromYmd(2012, 12, 27);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('壬辰');
  expect(lunar.getMonthInGanZhi()).toBe('壬子');
  expect(lunar.getDayInGanZhi()).toBe('壬戌');
});

test('test23', () => {
  const solar = Solar.fromYmd(2012, 12, 20);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('壬辰');
  expect(lunar.getMonthInGanZhi()).toBe('壬子');
  expect(lunar.getDayInGanZhi()).toBe('乙卯');
});

test('test24', () => {
  const solar = Solar.fromYmd(2012, 11, 20);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('壬辰');
  expect(lunar.getMonthInGanZhi()).toBe('辛亥');
  expect(lunar.getDayInGanZhi()).toBe('乙酉');
});

test('test25', () => {
  const solar = Solar.fromYmd(2012, 10, 20);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('壬辰');
  expect(lunar.getMonthInGanZhi()).toBe('庚戌');
  expect(lunar.getDayInGanZhi()).toBe('甲寅');
});

test('test26', () => {
  const solar = Solar.fromYmd(2012, 9, 20);
  const lunar = solar.getLunar();
  expect(lunar.getYearInGanZhi()).toBe('壬辰');
  expect(lunar.getMonthInGanZhi()).toBe('己酉');
  expect(lunar.getDayInGanZhi()).toBe('甲申');
});

test('test26', () => {
  const solar = Solar.fromYmd(2012, 8, 5);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('戊戌');
});

test('test27', () => {
  const solar = Solar.fromYmd(2000, 2, 2);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('庚寅');
});

test('test28', () => {
  const solar = Solar.fromYmd(1996, 1, 16);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('壬子');
});

test('test29', () => {
  const solar = Solar.fromYmd(1997, 2, 16);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('己丑');
});

test('test30', () => {
  const solar = Solar.fromYmd(1998, 3, 16);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('壬戌');
});

test('test31', () => {
  const solar = Solar.fromYmd(1999, 4, 16);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('戊戌');
});

test('test32', () => {
  const solar = Solar.fromYmd(2000, 7, 16);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('乙亥');
});

test('test33', () => {
  const solar = Solar.fromYmd(2000, 1, 6);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('癸亥');
});

test('test34', () => {
  const solar = Solar.fromYmd(2000, 1, 9);
  const lunar = solar.getLunar();
  expect(lunar.getDayInGanZhi()).toBe('丙寅');
});

test('test35', () => {
  const lunar = Lunar.fromYmd(2021, 12, 29);
  expect(lunar.getFestivals()[0]).toBe('除夕');
});

test('test36', () => {
  const lunar = Lunar.fromYmd(2020, 12, 30);
  expect(lunar.getFestivals()[0]).toBe('除夕');
});

test('test37', () => {
  const lunar = Lunar.fromYmd(2020, 12, 29);
  expect(lunar.getFestivals().length).toBe(0);
});

test('test38', () => {
  const solar = Solar.fromYmd(2022, 1, 31);
  const lunar = solar.getLunar();
  expect(lunar.getFestivals()[0]).toBe('除夕');
});
