var {Solar, Lunar, LunarYear} = require('../lunar');

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

test('test39', () => {
  const lunar = Lunar.fromYmd(2033, -11, 1);
  expect(lunar.getSolar().toYmd()).toBe('2033-12-22');
});

test('test40', () => {
  const solar = Solar.fromYmdHms(1, 1, 1, 12, 0, 0);
  expect(solar.getLunar().toString()).toBe('〇年冬月十八');
});

test('test41', () => {
  const solar = Solar.fromYmdHms(9999, 12, 31, 12, 0, 0);
  expect(solar.getLunar().toString()).toBe('九九九九年腊月初二');
});

test('test42', () => {
  const lunar = Lunar.fromYmdHms(0, 11, 18, 12, 0, 0);
  expect(lunar.getSolar().toString()).toBe('0001-01-01');
});

test('test43', () => {
  const lunar = Lunar.fromYmdHms(9999, 12, 2, 12, 0, 0);
  expect(lunar.getSolar().toString()).toBe('9999-12-31');
});

test('test022', () => {
  const lunar = Lunar.fromYmd(2033, -11, 1);
  expect(lunar.getSolar().toString()).toBe('2033-12-22');
});

test('test025', () => {
  const solar = Solar.fromYmdHms(2021, 6, 7, 21, 18, 0);
  expect(solar.getLunar().toString()).toBe('二〇二一年四月廿七');
});

test('test026', () => {
  const lunar = Lunar.fromYmdHms(2021, 6, 7, 21, 18, 0);
  expect(lunar.getSolar().toString()).toBe('2021-07-16');
});

test('test027', () => {
  const solar = Solar.fromYmd(1989, 4, 28);
  expect(solar.getLunar().getDay()).toBe(23);
});

test('test028', () => {
  const solar = Solar.fromYmd(1990, 10, 8);
  expect(solar.getLunar().getMonthInGanZhiExact()).toBe('乙酉');
});

test('test029', () => {
  const solar = Solar.fromYmd(1990, 10, 9);
  expect(solar.getLunar().getMonthInGanZhiExact()).toBe('丙戌');
});

test('test030', () => {
  const solar = Solar.fromYmd(1990, 10, 8);
  expect(solar.getLunar().getMonthInGanZhi()).toBe('丙戌');
});

test('test031', () => {
  const solar = Solar.fromYmdHms(1987, 4, 17, 9, 0, 0);
  expect(solar.getLunar().toString()).toBe('一九八七年三月二十');
});

test('test032', () => {
  const lunar = Lunar.fromYmd(2034, 1, 1);
  expect(lunar.getSolar().toString()).toBe('2034-02-19');
});

test('test033', () => {
  const lunar = Lunar.fromYmd(2033, 12, 1);
  expect(lunar.getSolar().toString()).toBe('2034-01-20');
});

test('test034', () => {
  const lunar = Lunar.fromYmd(37, -12, 1);
  expect(lunar.getMonthInChinese()).toBe('闰腊');
});

test('test035', () => {
  let lunar = Lunar.fromYmd(56, -12, 1);
  expect(lunar.getMonthInChinese()).toBe('闰腊');

  lunar = Lunar.fromYmd(75, -11, 1);
  expect(lunar.getMonthInChinese()).toBe('闰冬');

  lunar = Lunar.fromYmd(94, -11, 1);
  expect(lunar.getMonthInChinese()).toBe('闰冬');

  lunar = Lunar.fromYmd(94, 12, 1);
  expect(lunar.getMonthInChinese()).toBe('腊');

  lunar = Lunar.fromYmd(113, 12, 1);
  expect(lunar.getMonthInChinese()).toBe('腊');

  lunar = Lunar.fromYmd(113, -12, 1);
  expect(lunar.getMonthInChinese()).toBe('闰腊');

  lunar = Lunar.fromYmd(5552, -12, 1);
  expect(lunar.getMonthInChinese()).toBe('闰腊');
});

test('test036', () => {
  const solar = Solar.fromYmd(5553, 1, 22);
  expect(solar.getLunar().toString()).toBe('五五五二年闰腊月初二');
});

test('test037', () => {
  const solar = Solar.fromYmd(7013, 12, 24);
  expect(solar.getLunar().toString()).toBe('七〇一三年闰冬月初四');
});

test('test038', () => {
  const lunar = Lunar.fromYmd(7013, -11, 4);
  expect(lunar.getSolar().toString()).toBe('7013-12-24');
});

test('test041', () => {
  const solar = Solar.fromYmd(4, 2, 10);
  expect(solar.getLunar().getYearShengXiao()).toBe('鼠');
});

test('test042', () => {
  const solar = Solar.fromYmd(4, 2, 9);
  expect(solar.getLunar().getYearShengXiao()).toBe('猪');
});

test('test043', () => {
  const solar = Solar.fromYmd(1, 2, 12);
  expect(solar.getLunar().getYearShengXiao()).toBe('鸡');
});

test('test044', () => {
  const solar = Solar.fromYmd(1, 1, 1);
  expect(solar.getLunar().getYearShengXiao()).toBe('猴');
});

test('test045', () => {
  const lunarMonth = LunarYear.fromYear(2020).getMonth(-4);
  expect(lunarMonth.toString()).toBe('2020年闰四月(29)天');
});

test('test046', () => {
  const solar = Solar.fromYmdHms(2000, 1, 1, 16, 0, 0);
  expect(solar.getLunar().getHour()).toBe(16);
});

test('test047', () => {
  const lunar = Solar.fromYmd(2017, 2, 15).getLunar();
  expect(lunar.getDayLu()).toBe('子命互禄 辛命进禄');
});

test('test048', () => {
  const lunar = Solar.fromYmd(2021, 11, 13).getLunar();
  expect(lunar.getDayPositionTai()).toBe('碓磨厕 外东南');
});

test('test049', () => {
  const lunar = Solar.fromYmd(2021, 11, 12).getLunar();
  expect(lunar.getDayPositionTai()).toBe('占门碓 外东南');
});

test('test050', () => {
  const lunar = Solar.fromYmd(2021, 11, 13).getLunar();
  expect(lunar.getDayPositionFuDesc()).toBe('西南');
});

test('test051', () => {
  const lunar = Solar.fromYmd(2021, 11, 12).getLunar();
  expect(lunar.getDayPositionFuDesc()).toBe('正北');
});

test('test052', () => {
  const lunar = Solar.fromYmd(2011, 11, 12).getLunar();
  expect(lunar.getDayPositionTai()).toBe('厨灶厕 外西南');
});

test('test053', () => {
  const lunar = Solar.fromYmd(1722, 9, 25).getLunar();
  expect(lunar.getOtherFestivals() + '').toBe('秋社');
});

test('test054', () => {
  const lunar = Solar.fromYmd(840, 9, 14).getLunar();
  expect(lunar.getOtherFestivals() + '').toBe('秋社');
});

test('test055', () => {
  const lunar = Solar.fromYmd(2022, 3, 16).getLunar();
  expect(lunar.getOtherFestivals() + '').toBe('春社');
});

test('test056', () => {
  const lunar = Solar.fromYmd(2021, 3, 21).getLunar();
  expect(lunar.getOtherFestivals() + '').toBe('春社');
});

test('test057', () => {
  const lunar = Lunar.fromYmd(1582, 9, 18);
  expect(lunar.getSolar().toString()).toBe('1582-10-04');
});

test('test058', () => {
  const lunar = Lunar.fromYmd(1582, 9, 19);
  expect(lunar.getSolar().toString()).toBe('1582-10-15');
});

test('test059', () => {
  const lunar = Lunar.fromYmd(1518, 1, 1);
  expect(lunar.getSolar().toString()).toBe('1518-02-10');
});

test('test060', () => {
  const lunar = Lunar.fromYmd(793, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0793-02-15');
});

test('test061', () => {
  const lunar = Lunar.fromYmd(2025, -6, 1);
  expect(lunar.getSolar().toString()).toBe('2025-07-25');
});

test('test062', () => {
  const lunar = Lunar.fromYmd(2025, 6, 1);
  expect(lunar.getSolar().toString()).toBe('2025-06-25');
});

test('test063', () => {
  const lunar = Lunar.fromYmd(193, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0193-02-19');
});

test('test064', () => {
  const lunar = Lunar.fromYmd(288, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0288-02-19');
});

test('test065', () => {
  const lunar = Lunar.fromYmd(755, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0755-02-16');
});

test('test066', () => {
  const lunar = Lunar.fromYmd(41, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0041-02-20');
});

test('test067', () => {
  const lunar = Lunar.fromYmd(57, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0057-02-23');
});

test('test068', () => {
  const lunar = Lunar.fromYmd(345, 1, 1);
  expect(lunar.getSolar().toString()).toBe('0345-02-18');
});

test('test069', () => {
  const solar = Solar.fromYmd(917, 12, 1);
  expect(solar.getLunar().toString()).toBe('九一七年闰十月十四');
});

test('test070', () => {
  const solar = Solar.fromYmd(917, 12, 31);
  expect(solar.getLunar().toString()).toBe('九一七年冬月十五');
});

test('test071', () => {
  const solar = Solar.fromYmd(918, 1, 1);
  expect(solar.getLunar().toString()).toBe('九一七年冬月十六');
});

test('test072', () => {
  const solar = Solar.fromYmd(1991, 2, 15);
  const lunar = solar.getLunar();
  expect(lunar.toString()).toBe('一九九一年正月初一');
  expect(lunar.getYearInGanZhi()).toBe('辛未');
  expect(lunar.getYearShengXiao()).toBe('羊');
});

test('test073', () => {
  const solar = Lunar.fromYmd(2024, 10, 10).getSolar();
  expect(solar.toString()).toBe('2024-11-10');
});
