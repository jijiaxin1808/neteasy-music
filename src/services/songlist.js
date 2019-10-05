import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getTagList() {
	return request(`${ baseUrl }playlist/catlist`);
}

export function getSongList({ tag, curPage = 1, limit, order = "new" }) {
	return request(`${ baseUrl }top/playlist?limit=${limit}&order=${order}&cat=${tag}&offset=${curPage * 35}`);
}
/*获取歌单详情接口*/
export function getSongListDetail({ id }) {
	return request(`${ baseUrl }playlist/detail?id=${id}`);
}