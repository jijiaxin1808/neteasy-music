import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getRecList({ id }) {
	return request(`${baseUrl}related/playlist?id=${id}`);
}