import request from "../utils/request";
import baseUrl from "../assets/baseUrl"; 

export function getSong({id}) {
  let _id;
  if (id.constructor === Array) {
    _id = id.map(item => item.id).join(",");
  } else {
    _id = id.id;
  }
  if (typeof id === "number") _id = id;

	return request(`${ baseUrl }song/url?id=${_id}`);
}
export function getSongDetail({id}) {
  let _id;
  if (id.constructor === Array) {
    _id = id.map(item => item.id).join(",");
  } else {
    _id = id.id;
  }
  if (typeof id === "number") _id = id;

	return request(`${ baseUrl }song/detail?id=${_id}`);
}
