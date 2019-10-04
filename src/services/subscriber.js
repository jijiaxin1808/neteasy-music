import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getSubscriber({ id, limit }) {
	return request(`${baseUrl}playlist/subscribers?id=${id}&limit=${limit}`);
}