import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getAlbum(offset = 0, limit = 35) {
	return request(`${ baseUrl }top/album?offset=${offset}&limit=${limit}`);
}
