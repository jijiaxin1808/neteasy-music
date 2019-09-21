import request from "../utils/request";

export function getTagList() {
	return request("http://localhost:3000/playlist/catlist");
}

export function getSongList({ tag, curPage, limit }) {
	return request(`http://localhost:3000/top/playlist?limit=${limit}&order=new&cat=${tag}&offset=${curPage * 35}`);
}
