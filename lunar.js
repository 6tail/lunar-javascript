(function(W){
  var Solar = (function(){
    var _fromDate = function(date){
      return _fromYmd(date.getFullYear(),date.getMonth()+1,date.getDate());
    };
    var _fromYmd = function(y,m,d){
      return {
        _p:{
          year:y,
          month:m,
          day:d,
          calendar:new Date(y+'/'+m+'/'+d)
        },
        getYear:function(){
          return this._p.year;
        },
        getMonth:function(){
          return this._p.month;
        },
        getDay:function(){
          return this._p.day;
        },
        getWeek:function(){
          return this._p.calendar.getDay();
        },
        getWeekInChinese:function(){
          return SolarUtil.WEEK[this.getWeek()];
        },
        /**
         * 获取当天的阳历周
         * @param start 星期几作为一周的开始，1234560分别代表星期一至星期天
         */
        getSolarWeek:function(start){
          return SolarWeek.fromDate(this._p.calendar,start);
        },
        isLeapYear:function(){
          return SolarUtil.isLeapYear(this._p.year);
        },
        getFestivals:function(){
          var l = [];
          var f = SolarUtil.FESTIVAL[this._p.month+'-'+this._p.day];
          if(f) l.push(f);
          var week = this.getWeek();
          var weekInMonth = Math.ceil((this._p.day-week)/7);
          if(week>0) weekInMonth++;
          f = SolarUtil.WEEK_FESTIVAL[this._p.month+'-'+weekInMonth+'-'+week];
          if(f) l.push(f);
          return l;
        },
        getXingzuo:function(){
          var index = 11,m = this._p.month,d = this._p.day;
          var y = m*100+d;
          if(y>=321&&y<=419) index = 0;
          else if(y>=420&&y<=520) index = 1;
          else if(y>=521&&y<=620) index = 2;
          else if(y>=621&&y<=722) index = 3;
          else if(y>=723&&y<=822) index = 4;
          else if(y>=823&&y<=922) index = 5;
          else if(y>=923&&y<=1022) index = 6;
          else if(y>=1023&&y<=1121) index = 7;
          else if(y>=1122&&y<=1221) index = 8;
          else if(y>=1222||y<=119) index = 9;
          else if(y<=218) index = 10;
          return SolarUtil.XINGZUO[index];
        },
        toString:function(){
          return [this._p.year,(this._p.month<10?'0':'')+this._p.month,(this._p.day<10?'0':'')+this._p.day].join('-');
        },
        toFullString:function(){
          var s = this.toString();
          if(this.isLeapYear()){
            s += ' 闰年';
          }
          s += ' 星期'+this.getWeekInChinese();
          var festivals = this.getFestivals();
          for(var i=0,j=festivals.length;i<j;i++){
            s += ' ('+festivals[i]+')';
          }
          s += ' '+this.getXingzuo()+'座';
          return s;
        },
        next:function(days){
          var date = new Date(this._p.year+'/'+this._p.month+'/'+this._p.day);
          date.setDate(date.getDate()+days);
          return _fromDate(date);
        },
        getLunar:function(){
          return Lunar.fromDate(this._p.calendar);
        }
      };
    };
    return {
      fromYmd:function(y,m,d){return _fromYmd(y,m,d);},
      fromDate:function(date){return _fromDate(date);}
    };
  })();
  var Lunar = (function(){
    var _fromDate = function(date){
      var solar = Solar.fromDate(date);
      var y = solar.getYear();
      var m = solar.getMonth();
      var d = solar.getDay();
      var startY,startM,startD;
      var lunarY,lunarM,lunarD;
      if(y<2000){
        startY = SolarUtil.BASE_YEAR;
        startM = SolarUtil.BASE_MONTH;
        startD = SolarUtil.BASE_DAY;
        lunarY = LunarUtil.BASE_YEAR;
        lunarM = LunarUtil.BASE_MONTH;
        lunarD = LunarUtil.BASE_DAY;
      }else{
        startY = SolarUtil.BASE_YEAR+99;
        startM = 1;
        startD = 1;
        lunarY = LunarUtil.BASE_YEAR+99;
        lunarM = 11;
        lunarD = 25;
      }
      var diff = 0,i;
      for(i=startY;i<y;i++){
        diff += 365;
        if(SolarUtil.isLeapYear(i)) diff += 1;
      }
      for(i=startM;i<m;i++){
        diff += SolarUtil.getDaysOfMonth(y,i);
      }
      diff += d-startD;
      lunarD += diff;
      var lastDate = LunarUtil.getDaysOfMonth(lunarY,lunarM);
      while(lunarD>lastDate){
        lunarD -= lastDate;
        lunarM = LunarUtil.nextMonth(lunarY,lunarM);
        if(lunarM===1) lunarY++;
        lastDate = LunarUtil.getDaysOfMonth(lunarY,lunarM);
      }
      return _fromYmd(lunarY,lunarM,lunarD,solar);
    };
    var _fromYmd = function(y,m,d,solar){
      var lunar = {
        _p:{
          year:y,
          month:m,
          day:d,
          solar:null
        },
        _toSolar:function(){
          var y = LunarUtil.BASE_YEAR;
          var m = LunarUtil.BASE_MONTH;
          var d = LunarUtil.BASE_DAY;
          var diff = LunarUtil.getDaysOfMonth(y,m)-d;
          m = LunarUtil.nextMonth(y,m);
          while(true){
            diff += LunarUtil.getDaysOfMonth(y,m);
            m = LunarUtil.nextMonth(y,m);
            if(m===1) y++;
            if(y===this._p.year&&m===this._p.month){
              diff += this._p.day;
              break;
            }
          }
          var date = new Date(SolarUtil.BASE_YEAR+'/'+SolarUtil.BASE_MONTH+'/'+SolarUtil.BASE_DAY);
          date.setDate(date.getDate()+diff);
          return Solar.fromDate(date);
        },
        getYear:function(){
          return this._p.year;
        },
        getMonth:function(){
          return this._p.month;
        },
        getDay:function(){
          return this._p.day;
        },
        getGan:function(){
          return LunarUtil.GAN[(this._p.year-4)%10+1];
        },
        getZhi:function(){
          return LunarUtil.ZHI[(this._p.year-4)%12+1];
        },
        getShengxiao:function(){
          return LunarUtil.SHENGXIAO[(this._p.year-4)%12+1];
        },
        getMonthInChinese:function(){
          var month = this._p.month;
          if(month>0){
            return LunarUtil.MONTH[month];
          }else{
            return '闰'+LunarUtil.MONTH[-month];
          }
        },
        getDayInChinese:function(){
          return LunarUtil.DAY[this._p.day];
        },
        getJie:function(){
          var s = '',solar = this._p.solar;
          var solarYear = solar.getYear();
          var solarMonth = solar.getMonth();
          var solarDay = solar.getDay();
          var index = 0;
          var ry = solarYear-SolarUtil.BASE_YEAR+1;
          while(ry>=LunarUtil.JIE_YEAR[solarMonth-1][index]){
            index++;
          }
          var term = LunarUtil.JIE_MAP[solarMonth-1][4*index+ry%4];
          if(ry===121&&solarMonth===4) term = 5;
          if(ry===132&&solarMonth===4) term = 5;
          if(ry===194&&solarMonth===6) term = 6;
          if(solarDay===term) s = LunarUtil.JIE[solarMonth-1];
          return s;
        },
        getQi:function(){
          var s = '',solar = this._p.solar;
          var solarYear = solar.getYear();
          var solarMonth = solar.getMonth();
          var solarDay = solar.getDay();
          var index = 0;
          var ry = solarYear-SolarUtil.BASE_YEAR+1;
          while(ry>=LunarUtil.QI_YEAR[solarMonth-1][index]){
            index++;
          }
          var term = LunarUtil.QI_MAP[solarMonth-1][4*index+ry%4];
          if(ry===171&&solarMonth===3) term = 21;
          if(ry===181&&solarMonth===5) term = 21;
          if(solarDay===term) s = LunarUtil.QI[solarMonth-1];
          return s;
        },
        getXiu:function(){
          return LunarUtil.XIU[this._p.day-1][Math.abs(this._p.month)-1];
        },
        getZheng:function(){
          return LunarUtil.ZHENG[this.getXiu()];
        },
        getAnimal:function(){
          return LunarUtil.ANIMAL[this.getXiu()];
        },
        getGong:function(){
          return LunarUtil.GONG[this.getXiu()];
        },
        getShou:function(){
          return LunarUtil.SHOU[this.getGong()];
        },
        getFestivals:function(){
          var l = [];
          var f = LunarUtil.FESTIVAL[this._p.month+'-'+this._p.day];
          if(f) l.push(f);
          return l;
        },
        getSolar:function(){
          return this._p.solar;
        },
        toString:function(){
          return this.getGan()+this.getZhi()+'年'+this.getMonthInChinese()+'月'+this.getDayInChinese();
        },
        toFullString:function(){
          var s = this.toString();
          s += ' '+this.getShengxiao()+'年';
          var festivals = this.getFestivals();
          for(var i=0,j=festivals.length;i<j;i++){
            s += ' ('+festivals[i]+')';
          }
          var jieqi = this.getJie()+this.getQi();
          if(jieqi.length>0){
            s += ' ['+jieqi+']';
          }
          s += ' '+this.getGong()+'方'+this.getShou();
          s += ' '+this.getXiu()+this.getZheng()+this.getAnimal();
          return s;
        }
      };
      lunar._p.solar = solar?solar:lunar._toSolar();
      return lunar;
    };
    return {
      fromYmd:function(y,m,d){return _fromYmd(y,m,d);},
      fromDate:function(date){return _fromDate(date);}
    };
  })();
  var SolarWeek = (function(){
    var _fromDate = function(date,start){
      return _fromYmd(date.getFullYear(),date.getMonth()+1,date.getDate(),start);
    };
    var _fromYmd = function(y,m,d,start){
      return {
        _p:{
          year:y,
          month:m,
          day:d,
          start:start,
          calendar:new Date(y+'/'+m+'/'+d)
        },
        getYear:function(){
          return this._p.year;
        },
        getMonth:function(){
          return this._p.month;
        },
        getDay:function(){
          return this._p.day;
        },
        getStart:function(){
          return this._p.start;
        },
        /**
         * 获取当前日期是在当月第几周
         * @return number 周序号，从1开始
         */
        getIndex:function(){
          var firstDate = new Date(this._p.year+'/'+this._p.month+'/1');
          var firstDayWeek = firstDate.getDay();
          return Math.ceil((this._p.day+firstDayWeek-this._p.start)/7);
        },
        /**
         * 周推移
         * @param weeks 推移的周数，负数为倒推
         * @param separateMonth 是否按月单独计算
         * @return object 推移后的阳历周
         */
        next:function(weeks,separateMonth){
          if(0===weeks){
            return _fromYmd(this._p.year,this._p.month,this._p.day,this._p.start);
          }
          var date;
          if(separateMonth){
            var n = weeks;
            date = new Date(this._p.year+'/'+this._p.month+'/'+this._p.day);
            var week = _fromDate(date,this._p.start);
            var month = this._p.month;
            var plus = n>0;
            while(0!==n){
              date.setDate(date.getDate()+(plus?7:-7));
              week = _fromDate(date,this._p.start);
              var weekMonth = week.getMonth();
              if(month!==weekMonth){
                var index = week.getIndex();
                if(plus){
                  if(1===index){
                    var firstDay = week.getFirstDay();
                    week = _fromYmd(firstDay.getYear(),firstDay.getMonth(),firstDay.getDay(),this._p.start);
                    weekMonth = week.getMonth();
                  }else{
                    date = new Date(week.getYear()+'/'+week.getMonth()+'/1');
                    week = _fromDate(date,this._p.start);
                  }
                }else{
                  var size = SolarUtil.getWeeksOfMonth(week.getYear(),week.getMonth(),this._p.start);
                  if(size===index){
                    var lastDay = week.getFirstDay().next(6);
                    week = _fromYmd(lastDay.getYear(),lastDay.getMonth(),lastDay.getDay(),this._p.start);
                    weekMonth = week.getMonth();
                  }else{
                    date = new Date(week.getYear()+'/'+week.getMonth()+'/'+SolarUtil.getDaysOfMonth(week.getYear(),week.getMonth()));
                    week = _fromDate(date,this._p.start);
                  }
                }
                month = weekMonth;
              }
              n-=plus?1:-1;
            }
            return week;
          }else{
            date = new Date(this._p.year+'/'+this._p.month+'/'+this._p.day);
            date.setDate(date.getDate()+weeks*7);
            return _fromDate(date,this._p.start);
          }
        },
        /**
         * 获取本周第一天的阳历日期（可能跨月）
         * @return object 本周第一天的阳历日期
         */
        getFirstDay:function(){
          var date = new Date(this._p.year+'/'+this._p.month+'/'+this._p.day);
          var week = date.getDay();
          var prev = week-this._p.start;
          if(prev<0){
            prev += 7;
          }
          date.setDate(date.getDate()-prev);
          return Solar.fromDate(date);
        },
        /**
         * 获取本周第一天的阳历日期（仅限当月）
         * @return object 本周第一天的阳历日期
         */
        getFirstDayInMonth:function(){
          var days = this.getDays();
          for(var i = 0;i<days.length;i++){
            var day = days[i];
            if(this._p.month===day.getMonth()){
              return day;
            }
          }
          return null;
        },
        /**
         * 获取本周的阳历日期列表（可能跨月）
         * @return Array 本周的阳历日期列表
         */
        getDays:function(){
          var firstDay = this.getFirstDay();
          var l = [];
          l.push(firstDay);
          for(var i = 1;i<7;i++){
            l.push(firstDay.next(i));
          }
          return l;
        },
        /**
         * 获取本周的阳历日期列表（仅限当月）
         * @return Array 本周的阳历日期列表（仅限当月）
         */
        getDaysInMonth:function(){
          var days = this.getDays();
          var l = [];
          for(var i = 0;i<days.length;i++){
            var day = days[i];
            if(this._p.month!==day.getMonth()){
              continue;
            }
            l.push(day);
          }
          return l;
        },
        toString:function(){
          return this.getYear()+'-'+this.getMonth()+'.'+this.getIndex();
        },
        toFullString:function(){
          return this.getYear()+'年'+this.getMonth()+'月第'+this.getIndex()+'周';
        }
      };
    };
    return {
      /**
       * 指定年月日生成当天所在的阳历周
       * @param y 年份
       * @param m 月份
       * @param d 日期
       * @param start 星期几作为一周的开始，1234560分别代表星期一至星期天
       * @return object 阳历周
       */
      fromYmd:function(y,m,d,start){return _fromYmd(y,m,d,start);},
      /**
       * 指定日期生成当天所在的阳历周
       * @param date 日期
       * @param start 星期几作为一周的开始，1234560分别代表星期一至星期天
       * @return object 阳历周
       */
      fromDate:function(date,start){return _fromDate(date,start);}
    };
  })();
  var SolarMonth = (function(){
    var _fromDate = function(date){
      return _fromYm(date.getFullYear(),date.getMonth()+1);
    };
    var _fromYm = function(y,m){
      return {
        _p:{
          year:y,
          month:m,
          calendar:new Date(y+'/'+m+'/1')
        },
        getYear:function(){
          return this._p.year;
        },
        getMonth:function(){
          return this._p.month;
        },
        next:function(months){
          var date = new Date(this._p.year+'/'+this._p.month+'/1');
          date.setMonth(date.getMonth()+months);
          return _fromDate(date);
        },
        getDays:function(){
          var l = [];
          var d = Solar.fromYmd(this._p.year,this._p.month,1);
          l.push(d);
          var days = SolarUtil.getDaysOfMonth(this._p.year,this._p.month);
          for(var i = 1;i<days;i++){
            l.push(d.next(i));
          }
          return l;
        },
        getWeeks:function(start){
          var l = [];
          var weeks = SolarUtil.getWeeksOfMonth(this._p.year,this._p.month,start);
          for(var i = 0;i<weeks;i++){
            l.push(SolarWeek.fromYmd(this._p.year,this._p.month,1+i*7,start));
          }
          return l;
        },
        toString:function(){
          return this.getYear()+'-'+this.getMonth();
        },
        toFullString:function(){
          return this.getYear()+'年'+this.getMonth()+'月';
        }
      };
    };
    return {
      fromYm:function(y,m){return _fromYm(y,m);},
      fromDate:function(date){return _fromDate(date);}
    };
  })();
  var SolarSeason = (function(){
    var _fromDate = function(date){
      return _fromYm(date.getFullYear(),date.getMonth()+1);
    };
    var _fromYm = function(y,m){
      return {
        _p:{
          year:y,
          month:m,
          calendar:new Date(y+'/'+m+'/1')
        },
        getYear:function(){
          return this._p.year;
        },
        getMonth:function(){
          return this._p.month;
        },
        /**
         * 获取当月是第几季度
         * @return number 季度序号，从1开始
         */
        getIndex:function(){
          return Math.ceil(this._p.month/3);
        },
        /**
         * 季度推移
         * @param seasons 推移的季度数，负数为倒推
         * @return object 推移后的季度
         */
        next:function(seasons){
          if(0===seasons){
            return _fromYm(this._p.year,this._p.month);
          }
          var date = new Date(this._p.year+'/'+this._p.month+'/1');
          date.setMonth(date.getMonth()+3*seasons);
          return _fromDate(date);
        },
        /**
         * 获取本季度的月份
         * @return Array 本季度的月份列表
         */
        getMonths:function(){
          var l = [];
          var index = this.getIndex()-1;
          for(var i=0;i<3;i++){
            l.push(SolarMonth.fromYm(this._p.year,3*index+i+1));
          }
          return l;
        },
        toString:function(){
          return this.getYear()+'.'+this.getIndex();
        },
        toFullString:function(){
          return this.getYear()+'年'+this.getIndex()+'季度';
        }
      };
    };
    return {
      fromYm:function(y,m){return _fromYm(y,m);},
      fromDate:function(date){return _fromDate(date);}
    };
  })();
  var SolarHalfYear = (function(){
    var _fromDate = function(date){
      return _fromYm(date.getFullYear(),date.getMonth()+1);
    };
    var _fromYm = function(y,m){
      return {
        _p:{
          year:y,
          month:m,
          calendar:new Date(y+'/'+m+'/1')
        },
        getYear:function(){
          return this._p.year;
        },
        getMonth:function(){
          return this._p.month;
        },
        /**
         * 获取当月是第几半年
         * @return number 半年序号，从1开始
         */
        getIndex:function(){
          return Math.ceil(this._p.month/6);
        },
        /**
         * 半年推移
         * @param halfYears 推移的半年数，负数为倒推
         * @return object 推移后的半年
         */
        next:function(halfYears){
          if(0===halfYears){
            return _fromYm(this._p.year,this._p.month);
          }
          var date = new Date(this._p.year+'/'+this._p.month+'/1');
          date.setMonth(date.getMonth()+6*halfYears);
          return _fromDate(date);
        },
        /**
         * 获取本半年的月份
         * @return Array 本半年的月份列表
         */
        getMonths:function(){
          var l = [];
          var index = this.getIndex()-1;
          for(var i=0;i<6;i++){
            l.push(SolarMonth.fromYm(this._p.year,6*index+i+1));
          }
          return l;
        },
        toString:function(){
          return this.getYear()+'.'+this.getIndex();
        },
        toFullString:function(){
          return this.getYear()+'年'+['上','下'][this.getIndex()-1]+'半年';
        }
      };
    };
    return {
      fromYm:function(y,m){return _fromYm(y,m);},
      fromDate:function(date){return _fromDate(date);}
    };
  })();
  var SolarYear = (function(){
    var _fromDate = function(date){
      return _fromYear(date.getFullYear());
    };
    var _fromYear = function(y){
      return {
        _p:{
          year:y,
          calendar:new Date(y+'/1/1')
        },
        getYear:function(){
          return this._p.year;
        },
        next:function(years){
          var date = new Date(this._p.year+'/1/1');
          date.setFullYear(date.getFullYear()+years);
          return _fromDate(date);
        },
        getMonths:function(){
          var l = [];
          var m = SolarMonth.fromYm(this._p.year,1);
          l.push(m);
          for(var i = 1;i<12;i++){
            l.push(m.next(i));
          }
          return l;
        },
        toString:function(){
          return this.getYear();
        },
        toFullString:function(){
          return this.getYear()+'年';
        }
      };
    };
    return {
      fromYear:function(y){return _fromYear(y);},
      fromDate:function(date){return _fromDate(date);}
    };
  })();
  var SolarUtil = (function(){
    var _isLeapYear = function(year){
      var leap = false;
      if(year%4===0) leap = true;
      if(year%100===0) leap = false;
      if(year%400===0) leap = true;
      return leap;
    };
    return {
      BASE_YEAR:1901,
      BASE_MONTH:1,
      BASE_DAY:1,
      WEEK:['日','一','二','三','四','五','六'],
      DAYS_OF_MONTH:[31,28,31,30,31,30,31,31,30,31,30,31],
      XINGZUO:['白羊','金牛','双子','巨蟹','狮子','处女','天秤','天蝎','射手','摩羯','水瓶','双鱼'],
      FESTIVAL:{'1-1':'元旦节','2-14':'情人节','3-8':'妇女节','3-12':'植树节','3-15':'消费者权益日','4-1':'愚人节','5-1':'劳动节','5-4':'青年节','6-1':'儿童节','7-1':'建党节','8-1':'建军节','9-10':'教师节','10-1':'国庆节','12-24':'平安夜','12-25':'圣诞节'},
      WEEK_FESTIVAL:{'5-2-0':'母亲节','6-3-0':'父亲节','11-4-4':'感恩节'},
      isLeapYear:function(y){return _isLeapYear(y);},
      getDaysOfMonth:function(year,month){
        var m = month-1;
        var d = this.DAYS_OF_MONTH[m];
        if(m===1&&this.isLeapYear(year)){
          d++;
        }
        return d;
      },
      getWeeksOfMonth:function(year,month,start){
        var days = this.getDaysOfMonth(year,month);
        var firstDate = new Date(year+'/'+month+'/1');
        var firstDayWeek = firstDate.getDay();
        return Math.ceil((days+firstDayWeek-start)/7);
      }
    };
  })();
  var LunarUtil = (function(){
    return {
      BASE_YEAR:1900,
      BASE_MONTH:11,
      BASE_DAY:11,
      BASE_INDEX:0,
      GAN:['','甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],
      ZHI:['','子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
      SHENGXIAO:['','鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'],
      MONTH:['','正','贰','叁','肆','伍','陆','柒','捌','玖','拾','冬','腊'],
      DAY:['','初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'],
      JIE:['小寒','立春','惊蛰','清明','立夏','芒种','小暑','立秋','白露','寒露','立冬','大雪'],
      LEAP_MONTH_YEAR:[6,14,19,25,33,36,38,41,44,52,55,79,117,136,147,150,155,158,185,193],
      LUNAR_MONTH:[0x00,0x04,0xad,0x08,0x5a,0x01,0xd5,0x54,0xb4,0x09,0x64,0x05,0x59,0x45,0x95,0x0a,0xa6,0x04,0x55,0x24,0xad,0x08,0x5a,0x62,0xda,0x04,0xb4,0x05,0xb4,0x55,0x52,0x0d,0x94,0x0a,0x4a,0x2a,0x56,0x02,0x6d,0x71,0x6d,0x01,0xda,0x02,0xd2,0x52,0xa9,0x05,0x49,0x0d,0x2a,0x45,0x2b,0x09,0x56,0x01,0xb5,0x20,0x6d,0x01,0x59,0x69,0xd4,0x0a,0xa8,0x05,0xa9,0x56,0xa5,0x04,0x2b,0x09,0x9e,0x38,0xb6,0x08,0xec,0x74,0x6c,0x05,0xd4,0x0a,0xe4,0x6a,0x52,0x05,0x95,0x0a,0x5a,0x42,0x5b,0x04,0xb6,0x04,0xb4,0x22,0x6a,0x05,0x52,0x75,0xc9,0x0a,0x52,0x05,0x35,0x55,0x4d,0x0a,0x5a,0x02,0x5d,0x31,0xb5,0x02,0x6a,0x8a,0x68,0x05,0xa9,0x0a,0x8a,0x6a,0x2a,0x05,0x2d,0x09,0xaa,0x48,0x5a,0x01,0xb5,0x09,0xb0,0x39,0x64,0x05,0x25,0x75,0x95,0x0a,0x96,0x04,0x4d,0x54,0xad,0x04,0xda,0x04,0xd4,0x44,0xb4,0x05,0x54,0x85,0x52,0x0d,0x92,0x0a,0x56,0x6a,0x56,0x02,0x6d,0x02,0x6a,0x41,0xda,0x02,0xb2,0xa1,0xa9,0x05,0x49,0x0d,0x0a,0x6d,0x2a,0x09,0x56,0x01,0xad,0x50,0x6d,0x01,0xd9,0x02,0xd1,0x3a,0xa8,0x05,0x29,0x85,0xa5,0x0c,0x2a,0x09,0x96,0x54,0xb6,0x08,0x6c,0x09,0x64,0x45,0xd4,0x0a,0xa4,0x05,0x51,0x25,0x95,0x0a,0x2a,0x72,0x5b,0x04,0xb6,0x04,0xac,0x52,0x6a,0x05,0xd2,0x0a,0xa2,0x4a,0x4a,0x05,0x55,0x94,0x2d,0x0a,0x5a,0x02,0x75,0x61,0xb5,0x02,0x6a,0x03,0x61,0x45,0xa9,0x0a,0x4a,0x05,0x25,0x25,0x2d,0x09,0x9a,0x68,0xda,0x08,0xb4,0x09,0xa8,0x59,0x54,0x03,0xa5,0x0a,0x91,0x3a,0x96,0x04,0xad,0xb0,0xad,0x04,0xda,0x04,0xf4,0x62,0xb4,0x05,0x54,0x0b,0x44,0x5d,0x52,0x0a,0x95,0x04,0x55,0x22,0x6d,0x02,0x5a,0x71,0xda,0x02,0xaa,0x05,0xb2,0x55,0x49,0x0b,0x4a,0x0a,0x2d,0x39,0x36,0x01,0x6d,0x80,0x6d,0x01,0xd9,0x02,0xe9,0x6a,0xa8,0x05,0x29,0x0b,0x9a,0x4c,0xaa,0x08,0xb6,0x08,0xb4,0x38,0x6c,0x09,0x54,0x75,0xd4,0x0a,0xa4,0x05,0x45,0x55,0x95,0x0a,0x9a,0x04,0x55,0x44,0xb5,0x04,0x6a,0x82,0x6a,0x05,0xd2,0x0a,0x92,0x6a,0x4a,0x05,0x55,0x0a,0x2a,0x4a,0x5a,0x02,0xb5,0x02,0xb2,0x31,0x69,0x03,0x31,0x73,0xa9,0x0a,0x4a,0x05,0x2d,0x55,0x2d,0x09,0x5a,0x01,0xd5,0x48,0xb4,0x09,0x68,0x89,0x54,0x0b,0xa4,0x0a,0xa5,0x6a,0x95,0x04,0xad,0x08,0x6a,0x44,0xda,0x04,0x74,0x05,0xb0,0x25,0x54,0x03],
      JIE_YEAR:[[13,49,85,117,149,185,201,250,250],[13,45,81,117,149,185,201,250,250],[13,48,84,112,148,184,200,201,250],[13,45,76,108,140,172,200,201,250],[13,44,72,104,132,168,200,201,250],[5,33,68,96,124,152,188,200,201],[29,57,85,120,148,176,200,201,250],[13,48,76,104,132,168,196,200,201],[25,60,88,120,148,184,200,201,250],[16,44,76,108,144,172,200,201,250],[28,60,92,124,160,192,200,201,250],[17,53,85,124,156,188,200,201,250]],
      JIE_MAP:[[7,6,6,6,6,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,5,5,5,5,5,4,5,5],[5,4,5,5,5,4,4,5,5,4,4,4,4,4,4,4,4,3,4,4,4,3,3,4,4,3,3,3],[6,6,6,7,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,5],[5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,4,4,5,5,4,4,4,5,4,4,4,4,5],[6,6,6,7,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,5],[6,6,7,7,6,6,6,7,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,5],[7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,6,6,6,7,7],[8,8,8,9,8,8,8,8,7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,7],[8,8,8,9,8,8,8,8,7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,7],[9,9,9,9,8,9,9,9,8,8,9,9,8,8,8,9,8,8,8,8,7,8,8,8,7,7,8,8,8],[8,8,8,8,7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,7],[7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,6,6,6,7,7]],
      QI:['大寒','雨水','春分','谷雨','夏满','夏至','大暑','处暑','秋分','霜降','小雪','冬至'],
      QI_YEAR:[[13,45,81,113,149,185,201],[21,57,93,125,161,193,201],[21,56,88,120,152,188,200,201],[21,49,81,116,144,176,200,201],[17,49,77,112,140,168,200,201],[28,60,88,116,148,180,200,201],[25,53,84,112,144,172,200,201],[29,57,89,120,148,180,200,201],[17,45,73,108,140,168,200,201],[28,60,92,124,160,192,200,201],[16,44,80,112,148,180,200,201],[17,53,88,120,156,188,200,201]],
      QI_MAP:[[21,21,21,21,21,20,21,21,21,20,20,21,21,20,20,20,20,20,20,20,20,19,20,20,20,19,19,20],[20,19,19,20,20,19,19,19,19,19,19,19,19,18,19,19,19,18,18,19,19,18,18,18,18,18,18,18],[21,21,21,22,21,21,21,21,20,21,21,21,20,20,21,21,20,20,20,21,20,20,20,20,19,20,20,20,20],[20,21,21,21,20,20,21,21,20,20,20,21,20,20,20,20,19,20,20,20,19,19,20,20,19,19,19,20,20],[21,22,22,22,21,21,22,22,21,21,21,22,21,21,21,21,20,21,21,21,20,20,21,21,20,20,20,21,21],[22,22,22,22,21,22,22,22,21,21,22,22,21,21,21,22,21,21,21,21,20,21,21,21,20,20,21,21,21],[23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,22,22,22,22,23],[23,24,24,24,23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,23],[23,24,24,24,23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,23],[24,24,24,24,23,24,24,24,23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,23],[23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,22,22,22,22,21,22,22,22,21,21,22,22,22],[22,22,23,23,22,22,22,23,22,22,22,22,21,22,22,22,21,21,22,22,21,21,21,22,21,21,21,21,22]],
      XIU:[
        ['室','奎','胃','毕','参','鬼','张','角','氐','心','斗','虚'],
        ['壁','娄','昴','觜','井','柳','翼','亢','房','尾','女','危'],
        ['奎','胃','毕','参','鬼','星','轸','氐','心','箕','虚','室'],
        ['娄','昴','觜','井','柳','张','角','房','尾','斗','危','壁'],
        ['胃','毕','参','鬼','星','翼','亢','心','箕','女','室','奎'],
        ['昴','觜','井','柳','张','轸','氐','尾','斗','虚','壁','娄'],
        ['毕','参','鬼','星','翼','角','房','箕','女','危','奎','胃'],
        ['觜','井','柳','张','轸','亢','心','斗','虚','室','娄','昴'],
        ['参','鬼','星','翼','角','氐','尾','女','危','壁','胃','毕'],
        ['井','柳','张','轸','亢','房','箕','虚','室','奎','昴','觜'],
        ['鬼','星','翼','角','氐','心','斗','危','壁','娄','毕','参'],
        ['柳','张','轸','亢','房','尾','女','室','奎','胃','觜','井'],
        ['星','翼','角','氐','心','箕','虚','壁','娄','昴','参','鬼'],
        ['张','轸','亢','房','尾','斗','危','奎','胃','毕','井','柳'],
        ['翼','角','氐','心','箕','女','室','娄','昴','觜','鬼','星'],
        ['轸','亢','房','尾','斗','虚','壁','胃','毕','参','柳','张'],
        ['角','氐','心','箕','女','危','奎','昴','觜','井','星','翼'],
        ['亢','房','尾','斗','虚','室','娄','毕','参','鬼','张','轸'],
        ['氐','心','箕','女','危','壁','胃','觜','井','柳','翼','角'],
        ['房','尾','斗','虚','室','奎','昴','参','鬼','星','轸','亢'],
        ['心','箕','女','危','壁','娄','毕','井','柳','张','角','氐'],
        ['尾','斗','虚','室','奎','胃','觜','鬼','星','翼','亢','房'],
        ['箕','女','危','壁','娄','昴','参','柳','张','轸','氐','心'],
        ['斗','虚','室','奎','胃','毕','井','星','翼','角','房','尾'],
        ['女','危','壁','娄','昴','觜','鬼','张','轸','亢','心','箕'],
        ['虚','室','奎','胃','毕','参','柳','翼','角','氐','尾','斗'],
        ['危','壁','娄','昴','觜','井','星','轸','亢','房','箕','女'],
        ['室','奎','胃','毕','参','鬼','张','角','氐','心','斗','虚'],
        ['壁','娄','昴','觜','井','柳','翼','亢','房','尾','女','危'],
        ['胃','鬼','氐','心','虚','星','轸','氐','心','箕','虚','室']
      ],
      ZHENG:{'角':'木','井':'木','奎':'木','斗':'木','亢':'金','鬼':'金','娄':'金','牛':'金','氐':'土','柳':'土','胃':'土','女':'土','房':'日','星':'日','昴':'日','虚':'日','心':'月','张':'月','毕':'月','危':'月','尾':'火','翼':'火','觜':'火','室':'火','箕':'水','轸':'水','参':'水','壁':'水'      },
      ANIMAL:{'角':'蛟','斗':'獬','奎':'狼','井':'犴','亢':'龙','牛':'牛','娄':'狗','鬼':'羊','女':'蝠','氐':'貉','胃':'彘','柳':'獐','房':'兔','虚':'鼠','昴':'鸡','星':'马','心':'狐','危':'燕','毕':'乌','张':'鹿','尾':'虎','室':'猪','觜':'猴','翼':'蛇','箕':'豹','壁':'獝','参':'猿','轸':'蚓'      },
      GONG:{'角':'东','井':'南','奎':'西','斗':'北','亢':'东','鬼':'南','娄':'西','牛':'北','氐':'南','柳':'南','胃':'西','女':'北','房':'东','星':'南','昴':'西','虚':'北','心':'东','张':'南','毕':'西','危':'北','尾':'东','翼':'南','觜':'西','室':'北','箕':'东','轸':'南','参':'西','壁':'北'      },
      SHOU:{'东':'青龙','南':'朱雀','西':'白虎','北':'玄武'},
      FESTIVAL:{'1-1':'春节','1-15':'元宵节','2-2':'龙头节','5-5':'端午节','7-7':'七夕节','8-15':'中秋节','9-9':'重阳节','12-8':'腊八节'},
      nextMonth:function(y,m){
        var n = Math.abs(m)+1;
        if(m>0){
          var index = y-this.BASE_YEAR+this.BASE_INDEX;
          var v = this.LUNAR_MONTH[2*index+1];
          v = (v>>4)&0x0F;
          if(v===m){
            n = -m;
          }
        }
        if(n===13) n = 1;
        return n;
      },
      getDaysOfMonth:function(year,month){
        var index = year-this.BASE_YEAR+this.BASE_INDEX;
        var v = 0,l = 0,d = 30;
        if(1<=month&&month<=8){
          v = this.LUNAR_MONTH[2*index];
          l = month-1;
          if(((v>>l)&0x01)===1){
            d = 29;
          }
        }else if(9<=month&&month<=12){
          v = this.LUNAR_MONTH[2*index+1];
          l = month-9;
          if(((v>>l)&0x01)===1){
            d = 29;
          }
        }else{
          v = this.LUNAR_MONTH[2*index+1];
          v = (v>>4)&0x0F;
          if(v!==Math.abs(month)){
            d = 0;
          }else{
            d = 29;
            for(var i = 0;i<this.LEAP_MONTH_YEAR.length;i++){
              if(this.LEAP_MONTH_YEAR[i]===index){
                d = 30;
                break;
              }
            }
          }
        }
        return d;
      }
    };
  })();
  W.SolarUtil = SolarUtil;
  W.LunarUtil = LunarUtil;
  W.Solar = Solar;
  W.Lunar = Lunar;
  W.SolarWeek = SolarWeek;
  W.SolarMonth = SolarMonth;
  W.SolarSeason = SolarSeason;
  W.SolarHalfYear = SolarHalfYear;
  W.SolarYear = SolarYear;
})(window);
