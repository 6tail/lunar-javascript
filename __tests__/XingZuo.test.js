var {Solar} = require('../lunar');

test('test1()', () => {
  let solar = Solar.fromYmd(2020, 3, 21);
  expect(solar.getXingZuo()).toBe('白羊');
  solar = Solar.fromYmd(2020, 4, 19);
  expect(solar.getXingZuo()).toBe('白羊');
});

test('test2()', () => {
  let solar = Solar.fromYmd(2020, 4, 20);
  expect(solar.getXingZuo()).toBe('金牛');
  solar = Solar.fromYmd(2020, 5, 20);
  expect(solar.getXingZuo()).toBe('金牛');
});

test('test3()', () => {
  let solar = Solar.fromYmd(2020, 5, 21);
  expect(solar.getXingZuo()).toBe('双子');
  solar = Solar.fromYmd(2020, 6, 21);
  expect(solar.getXingZuo()).toBe('双子');
});

test('test4()', () => {
  let solar = Solar.fromYmd(2020, 6, 22);
  expect(solar.getXingZuo()).toBe('巨蟹');
  solar = Solar.fromYmd(2020, 7, 22);
  expect(solar.getXingZuo()).toBe('巨蟹');
});

test('test5()', () => {
  let solar = Solar.fromYmd(2020, 7, 23);
  expect(solar.getXingZuo()).toBe('狮子');
  solar = Solar.fromYmd(2020, 8, 22);
  expect(solar.getXingZuo()).toBe('狮子');
});

test('test6()', () => {
  let solar = Solar.fromYmd(2020, 8, 23);
  expect(solar.getXingZuo()).toBe('处女');
  solar = Solar.fromYmd(2020, 9, 22);
  expect(solar.getXingZuo()).toBe('处女');
});

test('test7()', () => {
  let solar = Solar.fromYmd(2020, 9, 23);
  expect(solar.getXingZuo()).toBe('天秤');
  solar = Solar.fromYmd(2020, 10, 23);
  expect(solar.getXingZuo()).toBe('天秤');
});

test('test8()', () => {
  let solar = Solar.fromYmd(2020, 10, 24);
  expect(solar.getXingZuo()).toBe('天蝎');
  solar = Solar.fromYmd(2020, 11, 22);
  expect(solar.getXingZuo()).toBe('天蝎');
});

test('test9()', () => {
  let solar = Solar.fromYmd(2020, 11, 23);
  expect(solar.getXingZuo()).toBe('射手');
  solar = Solar.fromYmd(2020, 12, 21);
  expect(solar.getXingZuo()).toBe('射手');
});

test('test10()', () => {
  let solar = Solar.fromYmd(2020, 12, 22);
  expect(solar.getXingZuo()).toBe('摩羯');
  solar = Solar.fromYmd(2021, 1, 19);
  expect(solar.getXingZuo()).toBe('摩羯');
});

test('test11()', () => {
  let solar = Solar.fromYmd(2021, 1, 20);
  expect(solar.getXingZuo()).toBe('水瓶');
  solar = Solar.fromYmd(2021, 2, 18);
  expect(solar.getXingZuo()).toBe('水瓶');
});

test('test12()', () => {
  let solar = Solar.fromYmd(2021, 2, 19);
  expect(solar.getXingZuo()).toBe('双鱼');
  solar = Solar.fromYmd(2021, 3, 20);
  expect(solar.getXingZuo()).toBe('双鱼');
});
