import request from "../utils/request";

export function getTagList() {
	return request("http://localhost:3000/playlist/catlist");
}

export function getSongList() {
	return request("");
}
