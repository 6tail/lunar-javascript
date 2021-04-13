var {Solar} = require('../lunar');

test('test1()', () => {
  const solar = Solar.fromYmd(2011,7,14);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('初伏');
  expect(fu.toFullString()).toBe('初伏第1天');
});

test('test2()', () => {
  const solar = Solar.fromYmd(2011,7,23);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('初伏');
  expect(fu.toFullString()).toBe('初伏第10天');
});

test('test3()', () => {
  const solar = Solar.fromYmd(2011,7,24);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('中伏');
  expect(fu.toFullString()).toBe('中伏第1天');
});

test('test4()', () => {
  const solar = Solar.fromYmd(2011,8,12);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('中伏');
  expect(fu.toFullString()).toBe('中伏第20天');
});

test('test5()', () => {
  const solar = Solar.fromYmd(2011,8,13);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('末伏');
  expect(fu.toFullString()).toBe('末伏第1天');
});

test('test6()', () => {
  const solar = Solar.fromYmd(2011,8,22);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('末伏');
  expect(fu.toFullString()).toBe('末伏第10天');
});

test('test7()', () => {
  const solar = Solar.fromYmd(2011,7,13);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  expect(fu).toBe(null);
});

test('test8()', () => {
  const solar = Solar.fromYmd(2011,8,23);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  expect(fu).toBe(null);
});

test('test9()', () => {
  const solar = Solar.fromYmd(2012,7,18);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('初伏');
  expect(fu.toFullString()).toBe('初伏第1天');
});

test('test10()', () => {
  const solar = Solar.fromYmd(2012,8,5);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('中伏');
  expect(fu.toFullString()).toBe('中伏第9天');
});

test('test11()', () => {
  const solar = Solar.fromYmd(2012,8,8);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('末伏');
  expect(fu.toFullString()).toBe('末伏第2天');
});

test('test12()', () => {
  const solar = Solar.fromYmd(2020,7,17);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('初伏');
  expect(fu.toFullString()).toBe('初伏第2天');
});

test('test13()', () => {
  const solar = Solar.fromYmd(2020,7,26);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('中伏');
  expect(fu.toFullString()).toBe('中伏第1天');
});

test('test14()', () => {
  const solar = Solar.fromYmd(2020,8,24);
  const lunar = solar.getLunar();
  const fu = lunar.getFu();
  if(null==fu){
    throw solar.toYmd();
  }
  expect(fu.toString()).toBe('末伏');
  expect(fu.toFullString()).toBe('末伏第10天');
});
