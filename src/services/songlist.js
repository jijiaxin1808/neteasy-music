import baseUrl from "../assets/baseUrl";
import request from "../utils/request";

export function getTagList() {
	return request(`${ baseUrl }playlist/catlist`);
}

export function getSongList(tag, curPage) {
	return request(`${ baseUrl }top/playlist?limit=35&order=new&cat=${tag}&offset=${curPage * 35}`);
}
