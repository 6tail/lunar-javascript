# lunar [![License](https://img.shields.io/badge/license-MIT-4EB1BA.svg?style=flat-square)](https://github.com/6tail/lunar-javascript/blob/master/LICENSE)

lunar is a calendar library for Solar and Chinese Lunar.

[简体中文](https://github.com/6tail/lunar-javascript/blob/master/README_ZH.md)

## Example

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script src="lunar.js"></script>
    <script>
      var solar = Solar.fromYmd(2016,9,8);
      console.log(solar.toFullString());
      console.log(solar.getLunar().toFullString());
    </script>
  </body>
</html>
```

Output:

    2016-09-08 闰年 星期四 处女座
    丙申年捌月初八 猴年 北方玄武 斗木獬

## Documentation

Please visit [http://6tail.cn/calendar/api.html](http://6tail.cn/calendar/api.html "http://6tail.cn/calendar/api.html")

## Contact

<a target="_blank" href="https://jq.qq.com/?_wv=1027&k=5F9Pbf0"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="lunar" title="lunar"></a>

