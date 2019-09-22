import request from "../utils/request";
import baseUrl from "../assets/baseUrl";

let artiCode = {
	"入驻歌手": 5001,
	"华语男歌手": 1001,
	"华语女歌手": 1002,
	"华语组合/乐队": 1003,
	"欧美男歌手": 2001,
	"欧美女歌手": 2002,
	"欧美组合/乐队": 2003,
	"日本男歌手": 6001,
	"日本女歌手": 6002,
	"日本组合/乐队": 6003,
	"韩国男歌手": 7001,
	"韩国女歌手": 7002,
	"韩国组合/乐队": 7003,
	"其他男歌手": 4001,
	"其他女歌手": 4002,
	"其他组合/乐队": 4003,
};
export function getArtistList({ limit, tag, offset, initial }) {
	let tagId = artiCode[tag];
	if(tagId === 5001) {
	    return request(`${ baseUrl }artist/list?&cat=${tagId}&offset=${offset}`);
	} else {
		let initail = (initial && initial !== "其它") ? `&initial=${initial}` : "";
		return request(`${ baseUrl }artist/list?limit=${limit}&cat=${tagId}&offset=${offset}${initail}`);
	}
}