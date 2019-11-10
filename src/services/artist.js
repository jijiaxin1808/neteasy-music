import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

export function getArtistSongList(id) {
  return request(`${ baseUrl }artists?id=${id}`);
}
export function getArtistAlbum({id, limit, offset}) {
  return request(`${ baseUrl }artist/album?id=${id}&limit=${limit}&offset=${offset}`);
}
export function getMv(id) {
  return request(`${ baseUrl }artist/mv?id=${id}`);
}
export function getDesc(id) {
  return request(`${ baseUrl }artist/desc?id=${id}`);
}