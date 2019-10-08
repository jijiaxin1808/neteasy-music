import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getAlbum({ offset, limit }) {
	return request(`${baseUrl}top/album?offset=${offset}&limit=${limit}`);
}
export function getHotAlbum() {
	return request(`${baseUrl}album/newest`);
}
export function getAlbumDetail(id) {
	return request(`${baseUrl}album?id=${id}`);
}