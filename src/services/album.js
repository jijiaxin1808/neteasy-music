import request from "../utils/request";

export function getAlbum(offset = 0, limit = 35) {
	return request("http://localhost:3000/top/album?" + `offset=${offset}` + `&limit=${limit}`);
}
