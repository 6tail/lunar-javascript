var {Solar} = require('../lunar');

test('test1()', () => {
  const solar = Solar.fromYmd(2020,4,23);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('佛灭');
});

test('test2()', () => {
  const solar = Solar.fromYmd(2021,1,15);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('友引');
});

test('test3()', () => {
  const solar = Solar.fromYmd(2017,1,5);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('先胜');
});

test('test4()', () => {
  const solar = Solar.fromYmd(2020,4,10);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('友引');
});

test('test5()', () => {
  const solar = Solar.fromYmd(2020,6,11);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('大安');
});

test('test6()', () => {
  const solar = Solar.fromYmd(2020,6,1);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('先胜');
});

test('test7()', () => {
  const solar = Solar.fromYmd(2020,12,8);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('先负');
});

test('test8()', () => {
  const solar = Solar.fromYmd(2020,12,11);
  const lunar = solar.getLunar();
  expect(lunar.getLiuYao()).toBe('赤口');
});
