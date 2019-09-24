import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getTagList() {
	return request(`${ baseUrl }playlist/catlist`);
}

export function getSongList({ tag, curPage, limit }) {
	return request(`${ baseUrl }top/playlist?limit=${limit}&order=new&cat=${tag}&offset=${curPage * 35}`);
}
