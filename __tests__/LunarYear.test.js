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

test('test19', () => {
  const year = LunarYear.fromYear(2021);
  expect(year.getDayCount()).toBe(354);
});

test('test20', () => {
  const year = LunarYear.fromYear(2023);
  expect(year.getDayCount()).toBe(384);
});

test('test21', () => {
  const year = LunarYear.fromYear(1517);
  expect(year.getDayCount()).toBe(384);
});
