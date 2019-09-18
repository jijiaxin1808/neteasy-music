import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getToplistDetail() {
	return request( `${baseUrl}toplist/detail`);
}
export function getToplist( data ) {
	return request( `${baseUrl}top/list?idx=0`);
}



