var {Solar} = require('../lunar');

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
