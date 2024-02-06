var {Solar, SolarUtil} = require('../lunar');

test('test', () => {
  var solar = Solar.fromYmd(2019,5,1);
  expect(solar.toString()).toBe('2019-05-01');
  expect(solar.toFullString()).toBe('2019-05-01 00:00:00 星期三 (劳动节) 金牛座');
  expect(solar.getLunar().toString()).toBe('二〇一九年三月廿七');
  expect(solar.getLunar().toFullString()).toBe('二〇一九年三月廿七 己亥(猪)年 戊辰(龙)月 戊戌(狗)日 子(鼠)时 纳音[平地木 大林木 平地木 桑柘木] 星期三 西方白虎 星宿[参水猿](吉) 彭祖百忌[戊不受田田主不祥 戌不吃犬作怪上床] 喜神方位[巽](东南) 阳贵神方位[艮](东北) 阴贵神方位[坤](西南) 福神方位[艮](东北) 财神方位[坎](正北) 冲[(壬辰)龙] 煞[北]');
});

test('1', () => {
  var solar = Solar.fromYmdHms(2020,5,24,13,0,0);
  expect(solar.getLunar().toString()).toBe('二〇二〇年闰四月初二');
});

test('6', () => {
  var solar = Solar.fromYmd(11,1,1);
  expect(solar.getLunar().toString()).toBe('一〇年腊月初八');
});

test('7', () => {
  var solar = Solar.fromYmd(11,3,1);
  expect(solar.getLunar().toString()).toBe('一一年二月初八');
});

test('9', () => {
  var solar = Solar.fromYmd(26,4,13);
  expect(solar.getLunar().toString()).toBe('二六年三月初八');
});

test('10', () => {
  expect(SolarUtil.isLeapYear(1500)).toBe(true);
});

test('11', () => {
  var solar = Solar.fromYmd(2022, 3, 28);
  expect(solar.getFestivals() + '').toBe('全国中小学生安全教育日');
});

test('12', () => {
  var solar = Solar.fromYmd(2021, 3, 29);
  expect(solar.getFestivals() + '').toBe('全国中小学生安全教育日');
});

test('13', () => {
  var solar = Solar.fromYmd(1996, 3, 25);
  expect(solar.getFestivals() + '').toBe('全国中小学生安全教育日');
});

test('14', () => {
  const solar = Solar.fromYmd(1583, 1, 13);
  expect(solar.getLunar().toString()).toBe('一五八二年腊月二十');
});

test('15', () => {
  const solar = Solar.fromYmd(1583, 1, 14);
  expect(solar.getLunar().toString()).toBe('一五八二年腊月廿一');
});

test('16', () => {
  const solarList = Solar.fromBaZi('丙辰', '丁酉', '丙子', '甲午');
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1916-10-06 12:00:00', '1976-09-21 12:00:00']);
});

test('17', () => {
  const solarList = Solar.fromBaZi('己卯', '辛未', '甲戌', '壬申');
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1939-08-05 16:00:00', '1999-07-21 16:00:00']);
});

test('18', () => {
  const solarList = Solar.fromBaZi('庚子', '戊子', '己卯', '庚午');
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1901-01-01 12:00:00', '1960-12-17 12:00:00']);
});

test('19', () => {
  const solarList = Solar.fromBaZi('庚子', '癸未', '乙丑', '丁亥');
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1960-08-05 22:00:00', '2020-07-21 22:00:00']);
});

test('20', () => {
  const solar = Solar.fromYmd(1582, 10, 4);
  expect(solar.nextDay(1).toYmd()).toBe('1582-10-15');
});

test('21', () => {
  const solar = Solar.fromYmd(1582, 10, 15);
  expect(solar.nextDay(-1).toYmd()).toBe('1582-10-04');
});

test('22', () => {
  const solar = Solar.fromYmd(1582, 10, 15);
  expect(solar.nextDay(-5).toYmd()).toBe('1582-09-30');
});

test('23', () => {
  const solarList = Solar.fromBaZi('癸卯', '甲寅', '甲寅', '甲子', 2, 1843);
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1843-02-09 00:00:00', '2023-02-25 00:00:00']);
});

test('24', () => {
  const solarList = Solar.fromBaZi('己亥', '丁丑', '壬寅', '戊申');
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1900-01-29 16:00:00', '1960-01-15 16:00:00']);
});

test('25', () => {
  const solarList = Solar.fromBaZi('己亥', '丙子', '癸酉', '庚申');
  const timeList = [];
  solarList.forEach(solar => {
    timeList.push(solar.toYmdHms());
  })
  expect(timeList).toStrictEqual(['1959-12-17 16:00:00']);
});

test('26', () => {
  const solar = Solar.fromYmd(2023, 8, 31);
  expect(solar.nextMonth(2).toYmd()).toBe('2023-10-31');
});

test('27', () => {
  const solar = Solar.fromYmd(2023, 8, 31);
  expect(solar.nextYear(2).toYmd()).toBe('2025-08-31');
});

test('28', () => {
  const solar = Solar.fromYmd(2023, 8, 31);
  expect(solar.nextMonth(6).toYmd()).toBe('2024-02-29');
});
