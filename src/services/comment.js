import request from "../utils/request";
import baseUrl from "../assets/baseUrl";
const  commentType = {
	"music": 0,
	"mv": 1,
	"playlist": 2,
	"album": 3,
	"dj": 4,
	"video": 5,
	"event": 6,
};

export function getComment( payload ) {
	const { id, type,  } = payload;
	return request(`${baseUrl}comment/${type}?id=${id}`);
}
export function commentLike( payload ) {
	let {  type,cid, t,id } = payload;
	console.log(payload.type);
	type = ""+type;
	return request( `${baseUrl}like?id=${id}&cid=${cid}&t=${t}&type=${type}` );
	// return request(`${baseUrl}toplist/detail`);
}
export function sendComment( payload ) {
	const { id, t, content,commentId } = payload;
	let type = commentType.payload.type;
	if(t === 1) {
		return request( `${baseUrl}comment?t=1&type=${type}&id=${id}&content=${content}` );
	}
	else 
		return request( `${baseUrl}comment?t=2&type=${type}&id=${id}&content=${content}&commentId=${commentId}` );
}

