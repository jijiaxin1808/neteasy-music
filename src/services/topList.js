import request from "../utils/request";
import baseUrl from "../assets/baseUrl"; 

export function getTopList(idx) {
	return request(`${baseUrl}top/list?idx=10`);
}
export function getToplistDetail(idx) {
	return request(`${baseUrl}toplist/detail`);
}
export function getToplistComment(idx) {
	return request(`${baseUrl}comment/music?id=34923114&limit=1`);
}