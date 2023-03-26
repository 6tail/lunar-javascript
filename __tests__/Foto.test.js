var {Foto, Lunar} = require('../lunar');

test('test1()', () => {
  const foto = Foto.fromLunar(Lunar.fromYmd(2021, 10, 14));
  expect(foto.toFullString()).toBe('二五六五年十月十四 (三元降) (四天王巡行)');
});

test('test2()', () => {
  const foto = Foto.fromLunar(Lunar.fromYmd(2020, 4, 13));
  expect(foto.getXiu()).toBe('氐');
  expect(foto.getZheng()).toBe('土');
  expect(foto.getAnimal()).toBe('貉');
  expect(foto.getGong()).toBe('东');
  expect(foto.getShou()).toBe('青龙');
});

test('test3()', () => {
  const foto = Foto.fromLunar(Lunar.fromYmd(2021, 3, 16));
  expect(foto.getOtherFestivals()).toStrictEqual(['准提菩萨圣诞']);
});
