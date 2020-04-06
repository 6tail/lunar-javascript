# lunar [![License](https://img.shields.io/badge/license-MIT-4EB1BA.svg?style=flat-square)](https://github.com/6tail/lunar-javascript/blob/master/LICENSE)

lunar是一个无依赖的支持阳历和阴历的日历工具库。

[English](https://github.com/6tail/lunar-javascript/blob/master/README_EN.md)

## 示例

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
  </head>
  <body>
    <script src="lunar.js"></script>
    <script>
      var solar = Solar.fromYmd(1986,5,29);
      console.log(solar.toFullString());
      console.log(solar.getLunar().toFullString());
    </script>
  </body>
</html>
```

输出结果：

    1986-05-29 星期四 双子座
    壹玖捌陆年肆月廿一 丙寅(虎)年 癸巳(蛇)月 癸酉(鸡)日 纳音[炉中火 长流水 剑锋金] 星期四 北方玄武 斗木獬 彭祖百忌[癸不词讼理弱敌强 酉不会客醉坐颠狂] 喜神方位[巽](东南) 阳贵神方位[巽](东南) 阴贵神方位[震](正东) 福神方位[兑](正西) 财神方位[离](正南) 冲[(丁卯)兔] 煞[东]

## 文档

请移步至 [http://6tail.cn/calendar/api.html](http://6tail.cn/calendar/api.html "http://6tail.cn/calendar/api.html")

## 联系

<a target="_blank" href="https://jq.qq.com/?_wv=1027&k=5F9Pbf0"><img border="0" src="http://pub.idqqimg.com/wpa/images/group.png" alt="lunar" title="lunar"></a>

