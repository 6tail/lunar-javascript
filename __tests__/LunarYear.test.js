var {LunarYear} = require('../lunar');

test('test1', () => {
  const year = LunarYear.fromYear(2017);
  expect(year.getZhiShui()).toBe('二龙治水');
  expect(year.getFenBing()).toBe('二人分饼');
});

test('test2', () => {
  const year = LunarYear.fromYear(2018);
  expect(year.getZhiShui()).toBe('二龙治水');
  expect(year.getFenBing()).toBe('八人分饼');
});

test('test3', () => {
  const year = LunarYear.fromYear(5);
  expect(year.getZhiShui()).toBe('三龙治水');
  expect(year.getFenBing()).toBe('一人分饼');
});

test('test4', () => {
  const year = LunarYear.fromYear(2021);
  expect(year.getGengTian()).toBe('十一牛耕田');
});

test('test5', () => {
  const year = LunarYear.fromYear(1864);
  expect(year.getYuan()).toBe('上元');
});

test('test6', () => {
  const year = LunarYear.fromYear(1923);
  expect(year.getYuan()).toBe('上元');
});

test('test7', () => {
  const year = LunarYear.fromYear(1924);
  expect(year.getYuan()).toBe('中元');
});

test('test8', () => {
  const year = LunarYear.fromYear(1983);
  expect(year.getYuan()).toBe('中元');
});

test('test9', () => {
  const year = LunarYear.fromYear(1984);
  expect(year.getYuan()).toBe('下元');
});

test('test10', () => {
  const year = LunarYear.fromYear(2043);
  expect(year.getYuan()).toBe('下元');
});

test('test11', () => {
  const year = LunarYear.fromYear(1864);
  expect(year.getYun()).toBe('一运');
});

test('test12', () => {
  const year = LunarYear.fromYear(1883);
  expect(year.getYun()).toBe('一运');
});

test('test13', () => {
  const year = LunarYear.fromYear(1884);
  expect(year.getYun()).toBe('二运');
});

test('test14', () => {
  const year = LunarYear.fromYear(1903);
  expect(year.getYun()).toBe('二运');
});

test('test15', () => {
  const year = LunarYear.fromYear(1904);
  expect(year.getYun()).toBe('三运');
});

test('test16', () => {
  const year = LunarYear.fromYear(1923);
  expect(year.getYun()).toBe('三运');
});

test('test17', () => {
  const year = LunarYear.fromYear(2004);
  expect(year.getYun()).toBe('八运');
});

test('test18', () => {
  const year = LunarYear.fromYear(2022);
  expect(year.getJieQiJulianDays()).toStrictEqual([2459555.7478605337, 2459570.499405936, 2459585.217980813, 2459599.9437018055, 2459614.7018054826, 2459629.5297495862, 2459644.446920318, 2459659.4814200983, 2459674.6389274267, 2459689.9334118855, 2459705.3512322665, 2459720.890569021, 2459736.517794922, 2459752.2178259823, 2459767.9429320656, 2459783.6713957503, 2459799.3534378354, 2459814.969435438, 2459830.480632029, 2459845.8774438635, 2459861.140466851, 2459876.2746654437, 2459891.281458942, 2459906.1807667296, 2459920.9903281447, 2459935.741672728, 2459950.461561025, 2459965.187040542, 2459979.9460747372, 2459994.7736723446, 2460009.6916930582]);
});
