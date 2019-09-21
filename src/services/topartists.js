import request from "../utils/request";

export function getTopArtists({ offset, limit }) {
	return request(`http://localhost:3000/top/artists?offset=${offset}&limit=${limit}`);
}