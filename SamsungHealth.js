//返回顶部的JS
var gotop = document.getElementById("sideBar");
var b = gotop.getElementsByTagName("p");
var c = document.documentElement.scrollTop;
window.onscroll = function(){
	var c = document.documentElement.scrollTop;
	if(c >= 700){
		b[0].style.visibility = "visible";
	}else{
		b[0].style.visibility = "hidden";
	}
}
var clickGo = b[0].onclick = function(){
		var ClearInt = setInterval(function(){
		if(document.documentElement.scrollTop !== 0){
			document.documentElement.scrollTop -= 15;
		}else{
			clearInterval(ClearInt);
		}
	},0.1)
}

//设置报名倒计时时间的JS
var userTmie = function(){
	//获取系统时间并且将其转换成"XXXX-XX-XX-XX-XX"
	var AllTimeRuler = new Date();
	var month=AllTimeRuler.getMonth()+1;
	var day=AllTimeRuler.getDate();
	var hour=AllTimeRuler.getHours();
	var min=AllTimeRuler.getMinutes();
	var WinTime = month + "-" + day + "-" + hour + "-" + min
	
	//活动报名预设的结束时间
	var oneActTime = "2018-12-20-23-59";
	var twoActTime = "2018-12-05-23-59";
	var threeActTime = "2018-12-07-23-59";
	var fourActTime = "2018-12-29-23-59";
	var fiveActTime = "2018-06-10-23-59";
	var sixActTime = "2018-05-06-23-59";
	
	//讲时间格式"XXXX-XX-XX-XX-XX"形式转换成数组类型的数据
	var SplitTime =function(Time){
		Time = Time.split("-");
		return Time;
	}
	
	//各个时间调用时间格式转换函数
	var winTimeSplit = SplitTime(WinTime);
	var oneActTimeSplit = SplitTime(oneActTime);
	var twoActTimeSplit = SplitTime(twoActTime);
	var threeActTimeSplit = SplitTime(threeActTime);
	var fourActTimeSplit = SplitTime(fourActTime);
	var fiveActTimeSplit = SplitTime(fiveActTime);
	var sixActTimeSplit = SplitTime(sixActTime);
	
	var compareCalculation = function(Xtime,Ytime,mun){
		//获得页面中对应要放入数据的DOM节点
		var selectTimewrap = document.getElementsByClassName("Time");
		//活动时间与当前时间进行相减
		var newmonth = Xtime[1] - Ytime[0];
		var newdayPD = Xtime[2] - Ytime[1];
		var newhour = Xtime[3] - Ytime[2];
		var newmin = Xtime[4] - Ytime[3];
		if (newmonth == 0 && newdayPD >= 0) {
			var newday = Xtime[2] - Ytime[1];
			var UU = function(obj){
	    	if(obj <= 0){
	    		return "0" + 0;
	    	}else
	    	if(obj > 0 && obj < 10){
	    		return "0" + obj;
	    	}else
	    	if(obj >=10){
	    		return obj;
	    	}
	    }
			var Intnewday = UU(newday);
		    var Intnewhour = UU(newhour);
		    var Intnewmin = UU(newmin);
		}else
		if (newmonth > 0) {
			var UU = function(obj){
	    	if(obj <= 0){
	    		return "0" + 0;
	    	}else
	    	if(obj > 0 && obj < 10){
	    		return "0" + obj;
	    	}else
	    	if(obj >=10){
	    		return obj;
	    	}
	    }
			var newday1 = (30 - Ytime[1]) + Number(Xtime[2]);
			var Intnewday = UU(newday1);
	    	var Intnewhour = UU(newhour);
		    var Intnewmin = UU(newmin);
		}else
	    if(newmonth < 0){
	    	Intnewmonth = "00";
	    	Intnewday = "00";
	    	Intnewhour = "00";
	    	Intnewmin = "00";
	    }else
	    if(newmonth == 0 && newdayPD < 0){
	    	Intnewmonth = "00";
	    	Intnewday = "00";
	    	Intnewhour = "00";
	    	Intnewmin = "00";
	    }
		//判断时间相减的值是否大于0 或者 小于10大于0 或者大于10时使用不同的放入格式（相减得到的数为单数时前面加0）

	    //判断活动结束时间结束后放入的时间格式（00-00-00）
	    if(newmonth = 0) {
	    	console.log(newday);
		    
	    }else
	    if(newmonth > 0){
	    	
	    }
	    //每条时间数据放入DOM节点
		for(var i=0; i<selectTimewrap.length; i++){
				selectTimewrap[i].index = i;
				var v = selectTimewrap[i].index
				var j = 1;
				if(i == 0 && mun == 0){
					selectTimewrap[v].getElementsByTagName("a")[j].innerHTML = Intnewday;
					selectTimewrap[v].getElementsByTagName("a")[j+2].innerHTML = Intnewhour;
					selectTimewrap[v].getElementsByTagName("a")[j+4].innerHTML = Intnewmin;
				}else
				if(i == 1 && mun == 1){
					selectTimewrap[v].getElementsByTagName("a")[j].innerHTML = Intnewday;
					selectTimewrap[v].getElementsByTagName("a")[j+2].innerHTML = Intnewhour;
					selectTimewrap[v].getElementsByTagName("a")[j+4].innerHTML = Intnewmin;
				}else
				if(i == 2 && mun == 2){
					selectTimewrap[v].getElementsByTagName("a")[j].innerHTML = Intnewday;
					selectTimewrap[v].getElementsByTagName("a")[j+2].innerHTML = Intnewhour;
					selectTimewrap[v].getElementsByTagName("a")[j+4].innerHTML = Intnewmin;
				}else
				if(i == 3 && mun == 3){
					selectTimewrap[v].getElementsByTagName("a")[j].innerHTML = Intnewday;
					selectTimewrap[v].getElementsByTagName("a")[j+2].innerHTML = Intnewhour;
					selectTimewrap[v].getElementsByTagName("a")[j+4].innerHTML = Intnewmin;
				}else
				if(i == 4 && mun == 4){
					selectTimewrap[v].getElementsByTagName("a")[j].innerHTML = Intnewday;
					selectTimewrap[v].getElementsByTagName("a")[j+2].innerHTML = Intnewhour;
					selectTimewrap[v].getElementsByTagName("a")[j+4].innerHTML = Intnewmin;
				}else
				if(i == 5 && mun == 5){
					selectTimewrap[v].getElementsByTagName("a")[j].innerHTML = Intnewday;
					selectTimewrap[v].getElementsByTagName("a")[j+2].innerHTML = Intnewhour;
					selectTimewrap[v].getElementsByTagName("a")[j+4].innerHTML = Intnewmin;
				}
		}
	}
	
	//每条时间数据调用“置入函数”
	var onedate = compareCalculation(oneActTimeSplit,winTimeSplit,0);
	var twodate = compareCalculation(twoActTimeSplit,winTimeSplit,1);
	var threedate = compareCalculation(threeActTimeSplit,winTimeSplit,2);
	var fourdate = compareCalculation(fourActTimeSplit,winTimeSplit,3);
	var fivedate = compareCalculation(fiveActTimeSplit,winTimeSplit,4);
	var sixdate = compareCalculation(sixActTimeSplit,winTimeSplit,5);
}

//不断获取新的当前时间，并且不断更新时间倒计时的差值
setInterval('userTmie()',1000);
