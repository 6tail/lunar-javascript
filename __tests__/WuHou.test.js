var {Solar} = require('../lunar');

test('test1()', () => {
  const solar = Solar.fromYmd(2020,4,23);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('萍始生');
});

test('test2()', () => {
  const solar = Solar.fromYmd(2021,1,15);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('雉始雊');
});

test('test3()', () => {
  const solar = Solar.fromYmd(2017,1,5);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('雁北乡');
});

test('test4()', () => {
  const solar = Solar.fromYmd(2020,4,10);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('田鼠化为鴽');
});

test('test5()', () => {
  const solar = Solar.fromYmd(2020,6,11);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('鵙始鸣');
});

test('test6()', () => {
  const solar = Solar.fromYmd(2020,6,1);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('麦秋至');
});

test('test7()', () => {
  const solar = Solar.fromYmd(2020,12,8);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('鹖鴠不鸣');
});

test('test8()', () => {
  const solar = Solar.fromYmd(2020,12,11);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('鹖鴠不鸣');
});

test('test9()', () => {
  const solar = Solar.fromYmd(1982,12,22);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('蚯蚓结');
});

test('test10', () => {
  const solar = Solar.fromYmd(2021,12,21);
  const lunar = solar.getLunar();
  expect(lunar.getHou()).toBe('冬至 初候');
});

test('test11', () => {
  const solar = Solar.fromYmd(2021,12,26);
  const lunar = solar.getLunar();
  expect(lunar.getHou()).toBe('冬至 二候');
});

test('test12', () => {
  const solar = Solar.fromYmd(2021,12,31);
  const lunar = solar.getLunar();
  expect(lunar.getHou()).toBe('冬至 三候');
});

test('test13', () => {
  const solar = Solar.fromYmd(2022,1,5);
  const lunar = solar.getLunar();
  expect(lunar.getHou()).toBe('小寒 初候');
});

test('test14', () => {
  const solar = Solar.fromYmd(2022,5,20);
  const lunar = solar.getLunar();
  expect(lunar.getHou()).toBe('立夏 三候');
});

test('test15', () => {
  const solar = Solar.fromYmd(2022, 8, 22);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('寒蝉鸣');
});

test('test16', () => {
  const solar = Solar.fromYmd(2022, 8, 23);
  const lunar = solar.getLunar();
  expect(lunar.getWuHou()).toBe('鹰乃祭鸟');
});
