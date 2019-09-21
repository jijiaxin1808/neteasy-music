import request from "../utils/request";

export function getAlbum({ offset, limit }) {
	return request(`http://localhost:3000/top/album?offset=${offset}&limit=${limit}`);
}
