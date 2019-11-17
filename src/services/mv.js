import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getMvDetails({id}) {
  return request(`${baseUrl}mv/detail?mvid=${id}`);
}
export function getMvUrl({id}) {
  return request(`${baseUrl}mv/url?id=${id}`);
}