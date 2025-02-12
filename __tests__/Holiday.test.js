const {HolidayUtil} = require('../lunar');

test('test1', () => {
  expect(HolidayUtil.getHoliday('2020-01-01') + '').toBe('2020-01-01 元旦节 2020-01-01');
  // 将2020-01-01修改为春节
  HolidayUtil.fix('202001011120200101');
  expect(HolidayUtil.getHoliday('2020-01-01') + '').toBe('2020-01-01 春节 2020-01-01');

  // 追加2099-01-01为元旦节
  HolidayUtil.fix('209901010120990101');
  expect(HolidayUtil.getHoliday('2099-01-01') + '').toBe('2099-01-01 元旦节 2099-01-01');

  // 将2020-01-01修改为春节，并追加2099-01-01为元旦节
  HolidayUtil.fix('202001011120200101209901010120990101');
  expect(HolidayUtil.getHoliday('2020-01-01') + '').toBe('2020-01-01 春节 2020-01-01');
  expect(HolidayUtil.getHoliday('2099-01-01') + '').toBe('2099-01-01 元旦节 2099-01-01');

  // 更改节假日名称
  let names =   HolidayUtil.NAMES;
  names[0] = '元旦';
  names[1] = '大年初一';

  HolidayUtil.fix(names, '');
  expect(HolidayUtil.getHoliday('2020-01-01') + '').toBe('2020-01-01 大年初一 2020-01-01');
  expect(HolidayUtil.getHoliday('2099-01-01') + '').toBe('2099-01-01 元旦 2099-01-01');

  // 追加节假日名称和数据
  names = [];
  for (let i = 0, j =   HolidayUtil.NAMES.length; i < j; i++) {
    names[i] =   HolidayUtil.NAMES[i];
  }
  names[9] = '我的生日';
  names[10] = '结婚纪念日';
  names[11] = '她的生日';

  HolidayUtil.fix(names, '20210529912021052920211111:12021111120211201;120211201');
  expect(HolidayUtil.getHoliday('2021-05-29') + '').toBe('2021-05-29 我的生日 2021-05-29');
  expect(HolidayUtil.getHoliday('2021-11-11') + '').toBe('2021-11-11 结婚纪念日 2021-11-11');
  expect(HolidayUtil.getHoliday('2021-12-01') + '').toBe('2021-12-01 她的生日 2021-12-01');
});

test('test2', () => {
  expect(HolidayUtil.getHoliday('2016-10-04').getTarget()).toBe('2016-10-01');
});

test('testRemove', () => {
  let holiday = HolidayUtil.getHoliday('2010-01-01');
  expect(holiday.getName()).toBe('元旦');

  HolidayUtil.fix('20100101~000000000000000000000000000');
  holiday = HolidayUtil.getHoliday('2010-01-01');
  expect(holiday).toBe(null);
});

test('test2025', () => {
  let names =   HolidayUtil.NAMES;
  names[0] = '元旦节';

  HolidayUtil.fix(names, '');
  const holiday = HolidayUtil.getHoliday(2025, 1, 1);
  expect(holiday.getName()).toBe('元旦节');
});
