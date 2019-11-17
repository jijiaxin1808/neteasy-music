import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getTopArtists({ limit, offset }) {
	return request(`${baseUrl}top/artists?offset=${offset}&limit=${limit}`);
}