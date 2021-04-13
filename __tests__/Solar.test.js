var {Solar} = require('../lunar');

test('test', () => {
  var solar = Solar.fromYmd(2019,5,1);
  expect(solar.toString()).toBe('2019-05-01');
  expect(solar.toFullString()).toBe('2019-05-01 00:00:00 星期三 (劳动节) 金牛座');
  expect(solar.getLunar().toString()).toBe('二〇一九年三月廿七');
  expect(solar.getLunar().toFullString()).toBe('二〇一九年三月廿七 己亥(猪)年 戊辰(龙)月 戊戌(狗)日 子(鼠)时 纳音[平地木 大林木 平地木 桑柘木] 星期三 (七殿泰山王诞) 西方白虎 星宿[参水猿](吉) 彭祖百忌[戊不受田田主不祥 戌不吃犬作怪上床] 喜神方位[巽](东南) 阳贵神方位[艮](东北) 阴贵神方位[坤](西南) 福神方位[坎](正北) 财神方位[坎](正北) 冲[(壬辰)龙] 煞[北]');
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
