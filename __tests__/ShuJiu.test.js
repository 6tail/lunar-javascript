var {Solar} = require('../lunar');

test('test1()', () => {
  const solar = Solar.fromYmd(2020,12,21);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  if(null==shuJiu){
    throw solar.toYmd();
  }
  expect(shuJiu.toString()).toBe('一九');
  expect(shuJiu.toFullString()).toBe('一九第1天');
});

test('test2()', () => {
  const solar = Solar.fromYmd(2020,12,22);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  if(null==shuJiu){
    throw solar.toYmd();
  }
  expect(shuJiu.toString()).toBe('一九');
  expect(shuJiu.toFullString()).toBe('一九第2天');
});

test('test3()', () => {
  const solar = Solar.fromYmd(2020,1,7);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  if(null==shuJiu){
    throw solar.toYmd();
  }
  expect(shuJiu.toString()).toBe('二九');
  expect(shuJiu.toFullString()).toBe('二九第8天');
});

test('test4()', () => {
  const solar = Solar.fromYmd(2021,1,6);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  if(null==shuJiu){
    throw solar.toYmd();
  }
  expect(shuJiu.toString()).toBe('二九');
  expect(shuJiu.toFullString()).toBe('二九第8天');
});

test('test5()', () => {
  const solar = Solar.fromYmd(2021,1,8);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  if(null==shuJiu){
    throw solar.toYmd();
  }
  expect(shuJiu.toString()).toBe('三九');
  expect(shuJiu.toFullString()).toBe('三九第1天');
});

test('test6()', () => {
  const solar = Solar.fromYmd(2021,3,5);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  if(null==shuJiu){
    throw solar.toYmd();
  }
  expect(shuJiu.toString()).toBe('九九');
  expect(shuJiu.toFullString()).toBe('九九第3天');
});

test('test7()', () => {
  const solar = Solar.fromYmd(2021,7,5);
  const lunar = solar.getLunar();
  const shuJiu = lunar.getShuJiu();
  expect(shuJiu).toBe(null);
});
