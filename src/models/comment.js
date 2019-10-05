import * as commentService from "../services/comment";
import { message } from "antd";

export default {
	namespace: "comment",
	state: {},
	reducers: {
		init( state,{ payload } ) {//
			return { ...state, data: payload.commentdata };
		}
	},
	effects: {
		*getcomment( {payload},{ call,put } ) {
			const res = yield call(commentService.getComment,payload);
			if(res.code===200) {
				yield put({
					type: "init",
					payload: {
						commentdata: res.comments
					}
				});
			} 
			else {
				message.info(res.message);
			}
		},
		*commentlike( {payload},{ call,put } ) {
			const res = yield call(commentService.commentLike,payload);
			if(res.code===200) {
				console.log("点赞成功");
			} 
			else {
				message.info(res.message);
			}
		},
		*sendcomment( {payload},{ call,put } ) {
			const res = yield commentService.sendComment(payload);
			if(res.code===200) {
			} 
			else {
				message.info(res.message);
			}
		},
        
        
	}

};