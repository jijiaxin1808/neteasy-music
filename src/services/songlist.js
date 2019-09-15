
import request from "../utils/request";

export function getTagList() {
	return request("http://localhost:3000/playlist/catlist");
}

export function getSongList(tag, curPage) {
	return request("http://localhost:3000/top/playlist?limit=35&order=new&cat=" + `${tag}` + `&offset=${curPage * 35}`);
}
