import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getAlbum({ offset, limit }) {
    return request(`${baseUrl}top/album?offset=${offset}&limit=${limit}`);
}
