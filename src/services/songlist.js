import request from "../utils/request";

export function getTagList() {
	return request("http://192.168.1.23:3000/playlist/catlist");
}


export function getSongList() {
	return request("");
}

