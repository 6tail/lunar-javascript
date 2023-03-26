var {LunarMonth} = require('../lunar');

test('test1', () => {
  const month = LunarMonth.fromYm(2023, 1);
  expect(month.getIndex()).toBe(1);
  expect(month.getGanZhi()).toBe('甲寅');
});

test('test2', () => {
  const month = LunarMonth.fromYm(2023, -2);
  expect(month.getIndex()).toBe(3);
  expect(month.getGanZhi()).toBe('丙辰');
});

test('test3', () => {
  const month = LunarMonth.fromYm(2023, 3);
  expect(month.getIndex()).toBe(4);
  expect(month.getGanZhi()).toBe('丁巳');
});

test('test4', () => {
  const month = LunarMonth.fromYm(2024, 1);
  expect(month.getIndex()).toBe(1);
  expect(month.getGanZhi()).toBe('丙寅');
});

test('test5', () => {
  const month = LunarMonth.fromYm(2023, 12);
  expect(month.getIndex()).toBe(13);
  expect(month.getGanZhi()).toBe('丙寅');
});

test('test6', () => {
  const month = LunarMonth.fromYm(2022, 1);
  expect(month.getIndex()).toBe(1);
  expect(month.getGanZhi()).toBe('壬寅');
});
