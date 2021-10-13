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
