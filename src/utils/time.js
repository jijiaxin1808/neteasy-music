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