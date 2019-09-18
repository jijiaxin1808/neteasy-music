import request from "../utils/request";
import baseUrl from "../assets/baseUrl"; 

export function getTopList(idx) {
	return request(`${ baseUrl }top/list?idx=${idx}`);
}
