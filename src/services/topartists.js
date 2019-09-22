import request from "../utils/request";

export function getTopArtists({ limit, offset }) {
	return request(`http://localhost:3000/top/artists?offset=${offset}&limit=${limit}`);
}