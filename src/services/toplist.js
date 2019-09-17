import request from "../utils/request";

export function getTopList(idx) {
	return request("http://localhost:3000/top/list?" + `idx=${idx}`);
}
