const {Lunar, I18n} = require('../lunar');

test('test1', () => {
  const lunar = Lunar.fromYmd(2023,1,1);
  console.log(lunar.toFullString());

  I18n.setLanguage('en');
  console.log(lunar.toFullString());

  I18n.setLanguage('chs');
});

