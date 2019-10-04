/*时间格式转换*/

/*单位s转换为00.00格式*/
export function unitTime(totalSecond) {
	let totalSeconds = Math.round(totalSecond),
	    minutes = Math.floor(totalSeconds / 60),
		seconds = Math.round(totalSeconds % 60);
		/*minutes注意向下取整*/
	if(minutes < 10) {
		minutes = "0" + minutes;
	}
	if(seconds < 10) {
		seconds = "0" + seconds;
	}
	return `${minutes}:${seconds}`;
}

/*
 * 时间格式化工具
 * 把Long类型的1527672756454日期还原yyyy-MM-dd格式日期
 */
export function dateFormat(longTypeDate){
	var dateTypeDate = "";
	var date = new Date();
	date.setTime(longTypeDate);
	dateTypeDate += date.getFullYear(); //年
	dateTypeDate += "-" + getMonth(date); //月
	dateTypeDate += "-" + getDay(date); //日
	return dateTypeDate;
}
//返回 01-12 的月份值
function getMonth(date){
	var month = "";
	month = date.getMonth() + 1; //getMonth()得到的月份是0-11
	if(month<10){
		month = "0" + month;
	}
	return month;
}
//返回01-30的日期
function getDay(date){
	var day = "";
	day = date.getDate();
	if(day<10){
		day = "0" + day;
	}
	return day;
}


