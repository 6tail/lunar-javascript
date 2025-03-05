var {Solar, Lunar} = require('../lunar');

test('test1', () => {
  const solar = Solar.fromYmd(1986, 1, 5);
  const lunar = solar.getLunar();
  expect(lunar.getJie()).toBe('小寒');
  expect(lunar.getJieQi()).toBe('小寒');
  expect(lunar.getCurrentJieQi() + '').toBe('小寒');
  expect(lunar.getCurrentJie() + '').toBe('小寒');
  expect(lunar.getCurrentQi()).toBe(null);
  expect(lunar.getQi()).toBe('');
  expect(lunar.getPrevJie().getName()).toBe('大雪');
  expect(lunar.getPrevQi().getName()).toBe('冬至');
  expect(lunar.getPrevJieQi().getName()).toBe('冬至');
});

test('test2', () => {
  const solar = Solar.fromYmdHms(1986, 1, 20, 17, 0, 0);
  const lunar = solar.getLunar();
  expect(lunar.getQi()).toBe('大寒');
  expect(lunar.getJieQi()).toBe('大寒');
  expect(lunar.getCurrentJieQi() + '').toBe('大寒');
  expect(lunar.getCurrentQi() + '').toBe('大寒');
  expect(lunar.getCurrentJie()).toBe(null);
  expect(lunar.getJie()).toBe('');
  expect(lunar.getNextJie().getName()).toBe('立春');
  expect(lunar.getNextQi().getName()).toBe('雨水');
  expect(lunar.getNextJieQi().getName()).toBe('立春');
});

test('test3', () => {
  const solar = Solar.fromYmdHms(1986, 1, 20, 14, 0, 0);
  const lunar = solar.getLunar();
  expect(lunar.getPrevJie().getName()).toBe('小寒');
  expect(lunar.getPrevQi().getName()).toBe('冬至');
  expect(lunar.getPrevJieQi().getName()).toBe('小寒');
});

test('test4', () => {
  const solar = Solar.fromYmd(1986, 12, 7);
  const lunar = solar.getLunar();
  expect(lunar.getJie()).toBe('大雪');
  expect(lunar.getJieQi()).toBe('大雪');
  expect(lunar.getCurrentJieQi() + '').toBe('大雪');
  expect(lunar.getCurrentJie() + '').toBe('大雪');
  expect(lunar.getCurrentQi()).toBe(null);
  expect(lunar.getQi()).toBe('');
  expect(lunar.getNextJie().getName()).toBe('大雪');
  expect(lunar.getNextQi().getName()).toBe('冬至');
  expect(lunar.getNextJieQi().getName()).toBe('大雪');
});

test('test5', () => {
  const solar = Solar.fromYmd(1986, 1, 1);
  const lunar = solar.getLunar();
  expect(lunar.getJie()).toBe('');
  expect(lunar.getQi()).toBe('');
  expect(lunar.getJieQi()).toBe('');
  expect(lunar.getCurrentJieQi()).toBe(null);
  expect(lunar.getCurrentJie()).toBe(null);
  expect(lunar.getCurrentQi()).toBe(null);
  expect(lunar.getPrevJie().getName()).toBe('大雪');
  expect(lunar.getPrevQi().getName()).toBe('冬至');
  expect(lunar.getPrevJieQi().getName()).toBe('冬至');
  expect(lunar.getNextJie().getName()).toBe('小寒');
  expect(lunar.getNextQi().getName()).toBe('大寒');
  expect(lunar.getNextJieQi().getName()).toBe('小寒');
});

test('test6', () => {
  const solar = Solar.fromYmd(2012, 12, 25);
  const lunar = solar.getLunar();
  expect(lunar.getJie()).toBe('');
  expect(lunar.getQi()).toBe('');
  expect(lunar.getJieQi()).toBe('');
  expect(lunar.getCurrentJie()).toBe(null);
  expect(lunar.getCurrentQi()).toBe(null);
  expect(lunar.getCurrentJieQi()).toBe(null);

  expect(lunar.getNextJie().getName()).toBe('小寒');
  expect(lunar.getNextQi().getName()).toBe('大寒');
  expect(lunar.getNextJieQi().getName()).toBe('小寒');

  expect(lunar.getPrevJie().getName()).toBe('大雪');
  expect(lunar.getPrevQi().getName()).toBe('冬至');
  expect(lunar.getPrevJieQi().getName()).toBe('冬至');
});

test('test7', () => {
  const lunar = Lunar.fromYmd(2012, 9, 1);
  expect(lunar.getJieQiTable()['白露'].toYmdHms()).toBe('2012-09-07 13:29:01');
});

test('test8', () => {
  const lunar = Lunar.fromYmd(2050, 12, 1);
  expect(lunar.getJieQiTable()['DA_XUE'].toYmdHms()).toBe('2050-12-07 06:40:53');
});

test('test9', () => {
  const solar = Solar.fromYmd(2021, 12, 21);
  const lunar = solar.getLunar();
  expect(lunar.getJieQi()).toBe('冬至');
  expect(lunar.getJie()).toBe('');
  expect(lunar.getQi()).toBe('冬至');
});

test('test10', () => {
  const lunar = Lunar.fromYmd(2023, 6, 1);
  expect(lunar.getJieQiTable()['冬至'].toYmdHms()).toBe('2022-12-22 05:48:01');
});

test('test11', () => {
  const lunar = Solar.fromYmd(2024, 2, 4).getLunar();
  expect(lunar.getPrevJie(true).getName()).toBe('立春');
  expect(lunar.getNextJie(true).getName()).toBe('惊蛰');
});
