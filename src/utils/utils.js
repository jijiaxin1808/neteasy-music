// 待扩展，支持传入数组和、或分开的多个参数
export function sliceObj(obj, keys) {
	return keys.reduce((result, key) => {
		if (obj.hasOwnProperty(key)) {
			result[key] = obj[key];
		}
		return result;
	}, {});
}
/*小数转化为百分比*/
export function toPercent(point) {
	let str = Number(point * 100).toFixed(2);
	str += "%";
	return str;
}
