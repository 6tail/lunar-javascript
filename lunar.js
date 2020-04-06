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
        getOtherFestivals:function(){
          var l = [];
          var fs = SolarUtil.OTHER_FESTIVAL[this._p.month+'-'+this._p.day];
          if(fs){
            for(var i=0,j=fs.length;i<j;i++){
              l.push(fs[i]);
            }
          }
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
        getXingZuo:function(){
          return this.getXingzuo();
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
          s += ' '+this.getXingZuo()+'座';
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
      var dayOffset = LunarUtil.computeAddDays(y,m,d);
      var addDays = (dayOffset + LunarUtil.BASE_DAY_GANZHI_INDEX)%60;
      var dayGanIndex = addDays%10;
      var dayZhiIndex = addDays%12;
      var lunar = {
        _p:{
          year:y,
          month:m,
          day:d,
          dayOffset:dayOffset,
          dayGanIndex:dayGanIndex,
          dayZhiIndex:dayZhiIndex,
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
        getYearGan:function(){
          return LunarUtil.GAN[(this._p.year-4)%10+1];
        },
        getYearZhi:function(){
          return LunarUtil.ZHI[(this._p.year-4)%12+1];
        },
        getYearInGanZhi:function(){
          return this.getYearGan()+this.getYearZhi();
        },
        getMonthGan:function(){
          var m = Math.abs(this._p.month)-1;
          var yearGanIndex = (this._p.year-4)%10;
          var offset = (yearGanIndex%5+1)*2;
          return LunarUtil.GAN[(m+offset)%10+1];
        },
        getMonthZhi:function(){
          var m = Math.abs(this._p.month)-1;
          return LunarUtil.ZHI[(m+LunarUtil.BASE_MONTH_ZHI_INDEX)%12+1];
        },
        getMonthInGanZhi:function(){
          return this.getMonthGan()+this.getMonthZhi();
        },
        getDayGan:function(){
          return LunarUtil.GAN[this._p.dayGanIndex+1];
        },
        getDayZhi:function(){
          return LunarUtil.ZHI[this._p.dayZhiIndex+1];
        },
        getDayInGanZhi:function(){
          return this.getDayGan()+this.getDayZhi();
        },
        getShengxiao:function(){
          return LunarUtil.SHENGXIAO[(this._p.year-4)%12+1];
        },
        getYearShengXiao:function(){
          return LunarUtil.SHENGXIAO[(this._p.year-4)%12+1];
        },
        getMonthShengXiao:function(){
          var zhi = this.getMonthZhi();
          for(var i=0,j=LunarUtil.ZHI.length;i<j;i++){
            if(LunarUtil.ZHI[i]===zhi){
              return LunarUtil.SHENGXIAO[i];
            }
          }
          return '';
        },
        getDayShengXiao:function(){
          var zhi = this.getDayZhi();
          for(var i=0,j=LunarUtil.ZHI.length;i<j;i++){
            if(LunarUtil.ZHI[i]===zhi){
              return LunarUtil.SHENGXIAO[i];
            }
          }
          return '';
        },
        getYearInChinese:function(){
          var y = (this._p.year+'');
          var s = '';
          for(var i=0,j=y.length;i<j;i++){
            s+=LunarUtil.NUMBER[y.charAt(i)-'0'];
          }
          return s;
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
        getPengZuGan:function(){
          return LunarUtil.PENGZU_GAN[this._p.dayGanIndex+1];
        },
        getPengZuZhi:function(){
          return LunarUtil.PENGZU_ZHI[this._p.dayZhiIndex+1];
        },
        getPositionXi:function(){
          return LunarUtil.POSITION_XI[this._p.dayGanIndex+1];
        },
        getPositionXiDesc:function(){
          return LunarUtil.POSITION_DESC[this.getPositionXi()];
        },
        getPositionYangGui:function(){
          return LunarUtil.POSITION_YANG_GUI[this._p.dayGanIndex+1];
        },
        getPositionYangGuiDesc:function(){
          return LunarUtil.POSITION_DESC[this.getPositionYangGui()];
        },
        getPositionYinGui:function(){
          return LunarUtil.POSITION_YIN_GUI[this._p.dayGanIndex+1];
        },
        getPositionYinGuiDesc:function(){
          return LunarUtil.POSITION_DESC[this.getPositionYinGui()];
        },
        getPositionFu:function(){
          return LunarUtil.POSITION_FU[this._p.dayGanIndex+1];
        },
        getPositionFuDesc:function(){
          return LunarUtil.POSITION_DESC[this.getPositionFu()];
        },
        getPositionCai:function(){
          return LunarUtil.POSITION_CAI[this._p.dayGanIndex+1];
        },
        getPositionCaiDesc:function(){
          return LunarUtil.POSITION_DESC[this.getPositionCai()];
        },
        getChong:function(){
          return LunarUtil.CHONG[this.getDayZhi()];
        },
        getChongGan:function(){
          return LunarUtil.CHONG_GAN[this.getDayGan()];
        },
        getChongGanTie:function(){
          return LunarUtil.CHONG_GAN_TIE[this.getDayGan()];
        },
        getChongShengXiao:function(){
          var chong = this.getChong();
          for(var i=0,j=LunarUtil.ZHI.length;i<j;i++){
            if(LunarUtil.ZHI[i]===chong){
              return LunarUtil.SHENGXIAO[i];
            }
          }
          return '';
        },
        getChongDesc:function(){
          return '('+this.getChongGan()+this.getChong()+')'+this.getChongShengXiao();
        },
        getSha:function(){
          return LunarUtil.SHA[this.getDayZhi()];
        },
        getYearNaYin:function(){
          return LunarUtil.NAYIN[this.getYearInGanZhi()];
        },
        getMonthNaYin:function(){
          return LunarUtil.NAYIN[this.getMonthInGanZhi()];
        },
        getDayNaYin:function(){
          return LunarUtil.NAYIN[this.getDayInGanZhi()];
        },
        getSeason:function(){
          return LunarUtil.SEASON[Math.abs(this._p.month)];
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
        getWeek:function(){
          return (this._p.dayOffset+LunarUtil.BASE_WEEK_INDEX)%7;
        },
        getWeekInChinese:function(){
          return SolarUtil.WEEK[this.getWeek()];
        },
        getXiu:function(){
          return LunarUtil.XIU[this.getDayZhi()+this.getWeek()];
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
        getOtherFestivals:function(){
          var l = [];
          var fs = LunarUtil.OTHER_FESTIVAL[this._p.month+'-'+this._p.day];
          if(fs){
            for(var i=0,j=fs.length;i<j;i++){
              l.push(fs[i]);
            }
          }
          return l;
        },
        getSolar:function(){
          return this._p.solar;
        },
        toString:function(){
          return this.getYearInChinese()+'年'+this.getMonthInChinese()+'月'+this.getDayInChinese();
        },
        toFullString:function(){
          var s = this.toString();
          s += ' '+this.getYearInGanZhi()+'('+this.getYearShengXiao()+')年';
          s += ' '+this.getMonthInGanZhi()+'('+this.getMonthShengXiao()+')月';
          s += ' '+this.getDayInGanZhi()+'('+this.getDayShengXiao()+')日';
          s += ' 纳音['+this.getYearNaYin()+' '+this.getMonthNaYin()+' '+this.getDayNaYin()+']';
          var festivals = this.getFestivals();
          var i,j;
          for(i=0,j=festivals.length;i<j;i++){
            s += ' ('+festivals[i]+')';
          }
          var otherFestivals = this.getOtherFestivals();
          for(i=0,j=otherFestivals.length;i<j;i++){
            s += ' ('+otherFestivals[i]+')';
          }
          var jq = this.getJie()+this.getQi();
          if(jq.length>0){
            s += ' ['+jq+']';
          }
          s += ' '+this.getGong()+'方'+this.getShou();
          s += ' '+this.getXiu()+this.getZheng()+this.getAnimal();
          s += ' 彭祖百忌['+this.getPengZuGan()+' '+this.getPengZuZhi()+']';
          s += ' 喜神方位['+this.getPositionXi()+']('+this.getPositionXiDesc()+')';
          s += ' 阳贵神方位['+this.getPositionYangGui()+']('+this.getPositionYangGuiDesc()+')';
          s += ' 阴贵神方位['+this.getPositionYinGui()+']('+this.getPositionYinGuiDesc()+')';
          s += ' 福神方位['+this.getPositionFu()+']('+this.getPositionFuDesc()+')';
          s += ' 财神方位['+this.getPositionCai()+']('+this.getPositionCaiDesc()+')';
          s += ' 冲['+this.getChongDesc()+']';
          s += ' 煞['+this.getSha()+']';
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
      OTHER_FESTIVAL:{'1-8':['周恩来逝世纪念日'],'1-10':['中国公安110宣传日'],'1-21':['列宁逝世纪念日'],'1-26':['国际海关日'],'2-2':['世界湿地日'],'2-4':['世界抗癌日'],'2-7':['京汉铁路罢工纪念'],'2-10':['国际气象节'],'2-19':['邓小平逝世纪念日'],'2-21':['国际母语日'],'2-24':['第三世界青年日'],'3-1':['国际海豹日'],'3-3':['全国爱耳日'],'3-5':['周恩来诞辰纪念日','中国青年志愿者服务日'],'3-6':['世界青光眼日'],'3-12':['孙中山逝世纪念日'],'3-14':['马克思逝世纪念日'],'3-17':['国际航海日'],'3-18':['全国科技人才活动日'],'3-21':['世界森林日','世界睡眠日'],'3-22':['世界水日'],'3-23':['世界气象日'],'3-24':['世界防治结核病日'],'4-2':['国际儿童图书日'],'4-7':['世界卫生日'],'4-22':['列宁诞辰纪念日'],'4-23':['世界图书和版权日'],'4-26':['世界知识产权日'],'5-3':['世界新闻自由日'],'5-5':['马克思诞辰纪念日'],'5-8':['世界红十字日'],'5-11':['世界肥胖日'],'5-23':['世界读书日'],'5-27':['上海解放日'],'5-31':['世界无烟日'],'6-5':['世界环境日'],'6-6':['全国爱眼日'],'6-8':['世界海洋日'],'6-11':['中国人口日'],'6-14':['世界献血日'],'7-1':['香港回归纪念日'],'7-7':['中国人民抗日战争纪念日'],'7-11':['世界人口日'],'8-5':['恩格斯逝世纪念日'],'8-6':['国际电影节'],'8-12':['国际青年日'],'8-22':['邓小平诞辰纪念日'],'9-3':['中国抗日战争胜利纪念日'],'9-8':['世界扫盲日'],'9-9':['毛泽东逝世纪念日'],'9-14':['世界清洁地球日'],'9-18':['九一八事变纪念日'],'9-20':['全国爱牙日'],'9-21':['国际和平日'],'9-27':['世界旅游日'],'10-4':['世界动物日'],'10-10':['辛亥革命纪念日'],'10-13':['中国少年先锋队诞辰日'],'10-25':['抗美援朝纪念日'],'11-12':['孙中山诞辰纪念日'],'11-28':['恩格斯诞辰纪念日'],'12-1':['世界艾滋病日'],'12-12':['西安事变纪念日'],'12-13':['南京大屠杀纪念日'],'12-26':['毛泽东诞辰纪念日']},
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
      BASE_DAY_GANZHI_INDEX:15,
      BASE_MONTH_ZHI_INDEX:2,
      BASE_WEEK_INDEX:2,
      GAN:['','甲','乙','丙','丁','戊','己','庚','辛','壬','癸'],
      POSITION_XI:['','艮','乾','坤','离','巽','艮','乾','坤','离','巽'],
      POSITION_YANG_GUI:['','坤','坤','兑','乾','艮','坎','离','艮','震','巽'],
      POSITION_YIN_GUI:['','艮','坎','乾','兑','坤','坤','艮','离','巽','震'],
      POSITION_FU:['','巽','巽','震','震','坎','离','坤','坤','乾','兑'],
      POSITION_CAI:['','艮','艮','坤','坤','坎','坎','震','震','离','离'],
      ZHI:['','子','丑','寅','卯','辰','巳','午','未','申','酉','戌','亥'],
      PENGZU_GAN:['','甲不开仓财物耗散','乙不栽植千株不长','丙不修灶必见灾殃','丁不剃头头必生疮','戊不受田田主不祥','己不破券二比并亡','庚不经络织机虚张','辛不合酱主人不尝','壬不泱水更难提防','癸不词讼理弱敌强'],
      PENGZU_ZHI:['','子不问卜自惹祸殃','丑不冠带主不还乡','寅不祭祀神鬼不尝','卯不穿井水泉不香','辰不哭泣必主重丧','巳不远行财物伏藏','午不苫盖屋主更张','未不服药毒气入肠','申不安床鬼祟入房','酉不会客醉坐颠狂','戌不吃犬作怪上床','亥不嫁娶不利新郎'],
      NUMBER:['零','壹','贰','叁','肆','伍','陆','柒','捌','玖'],
      MONTH:['','正','贰','叁','肆','伍','陆','柒','捌','玖','拾','冬','腊'],
      SEASON:['','孟春','仲春','季春','孟夏','仲夏','季夏','孟秋','仲秋','季秋','孟冬','仲冬','季冬'],
      SHENGXIAO:['','鼠','牛','虎','兔','龙','蛇','马','羊','猴','鸡','狗','猪'],
      DAY:['','初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'],
      JIE:['小寒','立春','惊蛰','清明','立夏','芒种','小暑','立秋','白露','寒露','立冬','大雪'],
      LEAP_MONTH_YEAR:[6,14,19,25,33,36,38,41,44,52,55,79,117,136,147,150,155,158,185,193],
      LUNAR_MONTH:[0x00,0x04,0xad,0x08,0x5a,0x01,0xd5,0x54,0xb4,0x09,0x64,0x05,0x59,0x45,0x95,0x0a,0xa6,0x04,0x55,0x24,0xad,0x08,0x5a,0x62,0xda,0x04,0xb4,0x05,0xb4,0x55,0x52,0x0d,0x94,0x0a,0x4a,0x2a,0x56,0x02,0x6d,0x71,0x6d,0x01,0xda,0x02,0xd2,0x52,0xa9,0x05,0x49,0x0d,0x2a,0x45,0x2b,0x09,0x56,0x01,0xb5,0x20,0x6d,0x01,0x59,0x69,0xd4,0x0a,0xa8,0x05,0xa9,0x56,0xa5,0x04,0x2b,0x09,0x9e,0x38,0xb6,0x08,0xec,0x74,0x6c,0x05,0xd4,0x0a,0xe4,0x6a,0x52,0x05,0x95,0x0a,0x5a,0x42,0x5b,0x04,0xb6,0x04,0xb4,0x22,0x6a,0x05,0x52,0x75,0xc9,0x0a,0x52,0x05,0x35,0x55,0x4d,0x0a,0x5a,0x02,0x5d,0x31,0xb5,0x02,0x6a,0x8a,0x68,0x05,0xa9,0x0a,0x8a,0x6a,0x2a,0x05,0x2d,0x09,0xaa,0x48,0x5a,0x01,0xb5,0x09,0xb0,0x39,0x64,0x05,0x25,0x75,0x95,0x0a,0x96,0x04,0x4d,0x54,0xad,0x04,0xda,0x04,0xd4,0x44,0xb4,0x05,0x54,0x85,0x52,0x0d,0x92,0x0a,0x56,0x6a,0x56,0x02,0x6d,0x02,0x6a,0x41,0xda,0x02,0xb2,0xa1,0xa9,0x05,0x49,0x0d,0x0a,0x6d,0x2a,0x09,0x56,0x01,0xad,0x50,0x6d,0x01,0xd9,0x02,0xd1,0x3a,0xa8,0x05,0x29,0x85,0xa5,0x0c,0x2a,0x09,0x96,0x54,0xb6,0x08,0x6c,0x09,0x64,0x45,0xd4,0x0a,0xa4,0x05,0x51,0x25,0x95,0x0a,0x2a,0x72,0x5b,0x04,0xb6,0x04,0xac,0x52,0x6a,0x05,0xd2,0x0a,0xa2,0x4a,0x4a,0x05,0x55,0x94,0x2d,0x0a,0x5a,0x02,0x75,0x61,0xb5,0x02,0x6a,0x03,0x61,0x45,0xa9,0x0a,0x4a,0x05,0x25,0x25,0x2d,0x09,0x9a,0x68,0xda,0x08,0xb4,0x09,0xa8,0x59,0x54,0x03,0xa5,0x0a,0x91,0x3a,0x96,0x04,0xad,0xb0,0xad,0x04,0xda,0x04,0xf4,0x62,0xb4,0x05,0x54,0x0b,0x44,0x5d,0x52,0x0a,0x95,0x04,0x55,0x22,0x6d,0x02,0x5a,0x71,0xda,0x02,0xaa,0x05,0xb2,0x55,0x49,0x0b,0x4a,0x0a,0x2d,0x39,0x36,0x01,0x6d,0x80,0x6d,0x01,0xd9,0x02,0xe9,0x6a,0xa8,0x05,0x29,0x0b,0x9a,0x4c,0xaa,0x08,0xb6,0x08,0xb4,0x38,0x6c,0x09,0x54,0x75,0xd4,0x0a,0xa4,0x05,0x45,0x55,0x95,0x0a,0x9a,0x04,0x55,0x44,0xb5,0x04,0x6a,0x82,0x6a,0x05,0xd2,0x0a,0x92,0x6a,0x4a,0x05,0x55,0x0a,0x2a,0x4a,0x5a,0x02,0xb5,0x02,0xb2,0x31,0x69,0x03,0x31,0x73,0xa9,0x0a,0x4a,0x05,0x2d,0x55,0x2d,0x09,0x5a,0x01,0xd5,0x48,0xb4,0x09,0x68,0x89,0x54,0x0b,0xa4,0x0a,0xa5,0x6a,0x95,0x04,0xad,0x08,0x6a,0x44,0xda,0x04,0x74,0x05,0xb0,0x25,0x54,0x03],
      JIE_YEAR:[[13,49,85,117,149,185,201,250,250],[13,45,81,117,149,185,201,250,250],[13,48,84,112,148,184,200,201,250],[13,45,76,108,140,172,200,201,250],[13,44,72,104,132,168,200,201,250],[5,33,68,96,124,152,188,200,201],[29,57,85,120,148,176,200,201,250],[13,48,76,104,132,168,196,200,201],[25,60,88,120,148,184,200,201,250],[16,44,76,108,144,172,200,201,250],[28,60,92,124,160,192,200,201,250],[17,53,85,124,156,188,200,201,250]],
      JIE_MAP:[[7,6,6,6,6,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,5,5,5,5,5,4,5,5],[5,4,5,5,5,4,4,5,5,4,4,4,4,4,4,4,4,3,4,4,4,3,3,4,4,3,3,3],[6,6,6,7,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,5],[5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,4,4,5,5,4,4,4,5,4,4,4,4,5],[6,6,6,7,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,5],[6,6,7,7,6,6,6,7,6,6,6,6,5,6,6,6,5,5,6,6,5,5,5,6,5,5,5,5,4,5,5,5,5],[7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,6,6,6,7,7],[8,8,8,9,8,8,8,8,7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,7],[8,8,8,9,8,8,8,8,7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,7],[9,9,9,9,8,9,9,9,8,8,9,9,8,8,8,9,8,8,8,8,7,8,8,8,7,7,8,8,8],[8,8,8,8,7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,7],[7,8,8,8,7,7,8,8,7,7,7,8,7,7,7,7,6,7,7,7,6,6,7,7,6,6,6,7,7]],
      QI:['大寒','雨水','春分','谷雨','夏满','夏至','大暑','处暑','秋分','霜降','小雪','冬至'],
      QI_YEAR:[[13,45,81,113,149,185,201],[21,57,93,125,161,193,201],[21,56,88,120,152,188,200,201],[21,49,81,116,144,176,200,201],[17,49,77,112,140,168,200,201],[28,60,88,116,148,180,200,201],[25,53,84,112,144,172,200,201],[29,57,89,120,148,180,200,201],[17,45,73,108,140,168,200,201],[28,60,92,124,160,192,200,201],[16,44,80,112,148,180,200,201],[17,53,88,120,156,188,200,201]],
      QI_MAP:[[21,21,21,21,21,20,21,21,21,20,20,21,21,20,20,20,20,20,20,20,20,19,20,20,20,19,19,20],[20,19,19,20,20,19,19,19,19,19,19,19,19,18,19,19,19,18,18,19,19,18,18,18,18,18,18,18],[21,21,21,22,21,21,21,21,20,21,21,21,20,20,21,21,20,20,20,21,20,20,20,20,19,20,20,20,20],[20,21,21,21,20,20,21,21,20,20,20,21,20,20,20,20,19,20,20,20,19,19,20,20,19,19,19,20,20],[21,22,22,22,21,21,22,22,21,21,21,22,21,21,21,21,20,21,21,21,20,20,21,21,20,20,20,21,21],[22,22,22,22,21,22,22,22,21,21,22,22,21,21,21,22,21,21,21,21,20,21,21,21,20,20,21,21,21],[23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,22,22,22,22,23],[23,24,24,24,23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,23],[23,24,24,24,23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,23],[24,24,24,24,23,24,24,24,23,23,24,24,23,23,23,24,23,23,23,23,22,23,23,23,22,22,23,23,23],[23,23,23,23,22,23,23,23,22,22,23,23,22,22,22,23,22,22,22,22,21,22,22,22,21,21,22,22,22],[22,22,23,23,22,22,22,23,22,22,22,22,21,22,22,22,21,21,22,22,21,21,21,22,21,21,21,21,22]],
      XIU:{'申1':'毕','申2':'翌','申3':'箕','申4':'奎','申5':'鬼','申6':'氐','申0':'虚','子1':'毕','子2':'翌','子3':'箕','子4':'奎','子5':'鬼','子6':'氐','子0':'虚','辰1':'毕','辰2':'翌','辰3':'箕','辰4':'奎','辰5':'鬼','辰6':'氐','辰0':'虚','巳1':'危','巳2':'觜','巳3':'轸','巳4':'斗','巳5':'娄','巳6':'柳','巳0':'房','酉1':'危','酉2':'觜','酉3':'轸','酉4':'斗','酉5':'娄','酉6':'柳','酉0':'房','丑1':'危','丑2':'觜','丑3':'轸','丑4':'斗','丑5':'娄','丑6':'柳','丑0':'房','寅1':'心','寅2':'室','寅3':'参','寅4':'角','寅5':'牛','寅6':'胃','寅0':'星','午1':'心','午2':'室','午3':'参','午4':'角','午5':'牛','午6':'胃','午0':'星','戌1':'心','戌2':'室','戌3':'参','戌4':'角','戌5':'牛','戌6':'胃','戌0':'星','亥1':'张','亥2':'尾','亥3':'壁','亥4':'井','亥5':'亢','亥6':'女','亥0':'昴','卯1':'张','卯2':'尾','卯3':'壁','卯4':'井','卯5':'亢','卯6':'女','卯0':'昴','未1':'张','未2':'尾','未3':'壁','未4':'井','未5':'亢','未6':'女','未0':'昴'},
      ZHENG:{'角':'木','井':'木','奎':'木','斗':'木','亢':'金','鬼':'金','娄':'金','牛':'金','氐':'土','柳':'土','胃':'土','女':'土','房':'日','星':'日','昴':'日','虚':'日','心':'月','张':'月','毕':'月','危':'月','尾':'火','翼':'火','觜':'火','室':'火','箕':'水','轸':'水','参':'水','壁':'水'      },
      ANIMAL:{'角':'蛟','斗':'獬','奎':'狼','井':'犴','亢':'龙','牛':'牛','娄':'狗','鬼':'羊','女':'蝠','氐':'貉','胃':'彘','柳':'獐','房':'兔','虚':'鼠','昴':'鸡','星':'马','心':'狐','危':'燕','毕':'乌','张':'鹿','尾':'虎','室':'猪','觜':'猴','翼':'蛇','箕':'豹','壁':'獝','参':'猿','轸':'蚓'      },
      GONG:{'角':'东','井':'南','奎':'西','斗':'北','亢':'东','鬼':'南','娄':'西','牛':'北','氐':'南','柳':'南','胃':'西','女':'北','房':'东','星':'南','昴':'西','虚':'北','心':'东','张':'南','毕':'西','危':'北','尾':'东','翼':'南','觜':'西','室':'北','箕':'东','轸':'南','参':'西','壁':'北'      },
      SHOU:{'东':'青龙','南':'朱雀','西':'白虎','北':'玄武'},
      FESTIVAL:{'1-1':'春节','1-15':'元宵节','2-2':'龙头节','5-5':'端午节','7-7':'七夕节','8-15':'中秋节','9-9':'重阳节','12-8':'腊八节','12-30':'除夕'},
      OTHER_FESTIVAL:{'1-1':['弥勒佛圣诞'],'1-8':['五殿阎罗天子诞'],'1-9':['玉皇上帝诞'],'2-1':['一殿秦广王诞'],'2-2':['福德土地正神诞'],'2-3':['文昌帝君诞'],'2-6':['东华帝君诞'],'2-8':['释迦牟尼佛出家'],'2-15':['释迦牟尼佛般涅槃'],'2-17':['东方杜将军诞'],'2-18':['至圣先师孔子讳辰'],'2-19':['观音大士诞'],'2-21':['普贤菩萨诞'],'3-1':['二殿楚江王诞'],'3-3':['玄天上帝诞'],'3-8':['六殿卞城王诞'],'3-15':['昊天上帝诞'],'3-16':['准提菩萨诞'],'3-19':['中岳大帝诞'],'3-20':['子孙娘娘诞'],'3-27':['七殿泰山王诞'],'3-28':['苍颉至圣先师诞'],'4-1':['八殿都市王诞'],'4-4':['文殊菩萨诞'],'4-8':['释迦牟尼佛诞'],'4-14':['纯阳祖师诞'],'4-15':['钟离祖师诞'],'4-17':['十殿转轮王诞'],'4-18':['紫徽大帝诞'],'4-20':['眼光圣母诞'],'5-1':['南极长生大帝诞'],'5-8':['南方五道诞'],'5-11':['天下都城隍诞'],'5-12':['炳灵公诞'],'5-13':['关圣降'],'5-16':['天地元气造化万物之辰'],'5-18':['张天师诞'],'5-22':['孝娥神诞'],'6-19':['观世音菩萨成道日'],'6-24':['关帝诞'],'7-7':['魁星诞'],'7-13':['长真谭真人诞','大势至菩萨诞'],'7-15':['中元节'],'7-18':['西王母诞'],'7-19':['太岁诞'],'7-22':['增福财神诞'],'7-29':['杨公忌'],'7-30':['地藏菩萨诞'],'8-1':['许真君诞'],'8-3':['司命灶君诞'],'8-5':['雷声大帝诞'],'8-10':['北斗大帝诞'],'8-12':['西方五道诞'],'8-16':['天曹掠刷真君降'],'8-18':['天人兴福之辰'],'8-23':['汉恒候张显王诞'],'8-24':['灶君夫人诞'],'8-29':['至圣先师孔子诞'],'9-1':['北斗九星降世'],'9-3':['五瘟神诞'],'9-9':['酆都大帝诞'],'9-13':['孟婆尊神诞'],'9-17':['金龙四大王诞'],'9-19':['观世音菩萨出家'],'9-30':['药师琉璃光佛诞'],'10-1':['寒衣节'],'10-3':['三茅诞'],'10-5':['达摩祖师诞'],'10-8':['佛涅槃日'],'10-15':['下元节'],'11-4':['至圣先师孔子诞'],'11-6':['西岳大帝诞'],'11-11':['太乙救苦天尊诞'],'11-17':['阿弥陀佛诞'],'11-19':['太阳日宫诞'],'11-23':['张仙诞'],'11-26':['北方五道诞'],'12-8':['释迦如来成佛之辰'],'12-16':['南岳大帝诞'],'12-21':['天猷上帝诞'],'12-23':['小年'],'12-24':['子时灶君上天朝玉帝'],'12-29':['华严菩萨诞']},
      CHONG:{'子':'午','丑':'未','寅':'申','卯':'酉','辰':'戌','巳':'亥','午':'子','未':'丑','申':'寅','酉':'卯','戌':'辰','亥':'巳'},
      CHONG_GAN:{'甲':'戊','乙':'己','丙':'庚','丁':'辛','戊':'壬','己':'癸','庚':'甲','辛':'乙','壬':'丙','癸':'丁'},
      CHONG_GAN_BAD:{'庚':'甲','辛':'乙','壬':'丙','癸':'丁'},
      CHONG_GAN_TIE:{'甲':'己','乙':'戊','丙':'辛','丁':'庚','戊':'癸','己':'壬','庚':'乙','辛':'甲','壬':'丁','癸':'丙'},
      CHONG_GAN_TIE_GOOD:{'甲':'己','丙':'辛','戊':'癸','庚':'乙','壬':'丁'},
      SHA:{'子':'南','丑':'东','寅':'北','卯':'西','辰':'南','巳':'东','午':'北','未':'西','申':'南','酉':'东','戌':'北','亥':'西'},
      POSITION_DESC:{'坎':'正北','艮':'东北','震':'正东','巽':'东南','离':'正南','坤':'西南','兑':'正西','乾':'西北'},
      NAYIN:{'甲子':'海中金','甲午':'沙中金','丙寅':'炉中火','丙申':'山下火','戊辰':'大林木','戊戌':'平地木','庚午':'路旁土','庚子':'壁上土','壬申':'剑锋金','壬寅':'金箔金','甲戌':'山头火','甲辰':'覆灯火','丙子':'涧下水','丙午':'天河水','戊寅':'城头土','戊申':'大驿土','庚辰':'白蜡金','庚戌':'钗钏金','壬午':'杨柳木','壬子':'桑柘木','甲申':'泉中水','甲寅':'大溪水','丙戌':'屋上土','丙辰':'沙中土','戊子':'霹雳火','戊午':'天上火','庚寅':'松柏木','庚申':'石榴木','壬辰':'长流水','壬戌':'大海水','乙丑':'海中金','乙未':'沙中金','丁卯':'炉中火','丁酉':'山下火','己巳':'大林木','己亥':'平地木','辛未':'路旁土','辛丑':'壁上土','癸酉':'剑锋金','癸卯':'金箔金','乙亥':'山头火','乙巳':'覆灯火','丁丑':'涧下水','丁未':'天河水','己卯':'城头土','己酉':'大驿土','辛巳':'白蜡金','辛亥':'钗钏金','癸未':'杨柳木','癸丑':'桑柘木','乙酉':'泉中水','乙卯':'大溪水','丁亥':'屋上土','丁巳':'沙中土','己丑':'霹雳火','己未':'天上火','辛卯':'松柏木','辛酉':'石榴木','癸巳':'长流水','癸亥':'大海水'},
      computeAddDays:function(year,month,day){
        var y = this.BASE_YEAR;
        var m = this.BASE_MONTH;
        var diff = this.getDaysOfMonth(y,m)-this.BASE_DAY;
        m = this.nextMonth(y,m);
        while(true){
          diff += this.getDaysOfMonth(y,m);
          m = this.nextMonth(y,m);
          if(m===1){
            y++;
          }
          if(y===year&&m===month){
            diff += day;
            break;
          }
        }
        return diff;
      },
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
