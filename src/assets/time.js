//接收的是一个时间数字
function   getDate( time ) {
	const date = new Date( time );
	const min = date.getMinutes();
	const sec = date.getSeconds;
	const nowDate = Date();
	const year = date.getFullYear();
	const mouth = date.getMonth();
	const day = date.getDay();
	const hour = date.getHours();
	if( nowDate.getFullYear !== year ) {
		return `${year}年${mouth}月${day}日`;
	} 
	else if ( nowDate.getMonth() !== mouth ) {
		return `${mouth}月${day}日`;
	}
	else if( nowDate.getDay() !== day ) {
		return `${mouth}月${day}日`;
	}
	else if( nowDate.getHours !== hour  ) {
		return `${hour}:${min}`;
	}
	else if( nowDate.getMinutes !== min  ) {
		return `${nowDate.getSeconds()-sec}`;
	}
}

export default getDate;

