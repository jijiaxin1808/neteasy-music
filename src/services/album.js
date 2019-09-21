import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getAlbum({ offset, limit }) {
    return request(`http://localhost:3000/top/album?offset=${offset}&limit=${limit}`);
}
