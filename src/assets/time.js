//接收的是一个时间数字
function   getDate( time ) {
	const date = new Date( time );
	const min = date.getMinutes();
	const sec = date.getSeconds;
	const nowDate =new  Date();
	const year = date.getFullYear();
	const mouth = date.getMonth();
	const day = date.getDay();
	const hour = date.getHours();
	console.log(nowDate.getMonth(),"111",nowDate.getUTCMonth(),nowDate.getDay());
	
	if( nowDate.getFullYear() !== year ) {
		return `${year}年${mouth}月${day}日`;
	} 
	else if ( nowDate.getMonth() !== mouth ) {
		console.log(nowDate.getMonth(),"111",mouth);
		return `${mouth}月${day}日`;
	}
	else if( nowDate.getDay() !== day ) {
		return `${mouth}月${day}日`;
	}
	else if( nowDate.getHours() !== hour  ) {
		return `${nowDate.getMinutes() - min}分钟前`;
	}
	else if( nowDate.getMinutes() !== min ) {
		return `${nowDate.getSeconds()-sec}秒前`;
	}
	else return `${mouth}月${day}日`;

}

export default getDate;

