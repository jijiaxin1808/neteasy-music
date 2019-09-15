import  * as loginService from "../services/login";
import { message } from "antd";


export default {
	namespace: "login",
	state: {
		name: "登录",
		type: "verifyCode",
		isMouseDown: "false",
		loginTop: "",
		loginLeft: "",
		userName: "",
		userEmail: "",
		userPassword: "",
		RegPassword:"",
		RegName:""
	},
	reducers: {
		loginPhone( state,action ) {
			return {...state,...action.payload};
		},
		loginEmail( state,action ) {
			return { ...state,...action.payload };
		},
		mouseDown( state,action ) {
			return { ...state,isMouseDown:true,...action.payload };
		},
		mouseUp( state ) {
			return { ...state,isMouseDown:false };
		},
		mouseMove( state,action ) {
			return { ...state,...action.payload };
		},
		changeStatus( state,action ) {
			return { ...state,...action.payload };
		},
		clear( state ) {
			return { ...state,userName:"",userEmail:"",userPassword:""};
		} ,
		changeInfo ( state,action ) {
			return { ...state,...action.payload };
		},
		width ( state,action ) {
			return { ...state,...action.payload };
		},
		initPosition (state,action) {
			return { ...state,...action.payload };
		}

	},
	effects: {
		*loginPhone ( { payload } , { put,call } ) {
			const res = yield call( loginService.loginPhone,  payload  );
			if ( res){
				if( res.code === 200 ) {
					message.success("登录成功");
					yield put({
						type:"clear"
					});
					yield put({
						type:"changeStatus",
						payload:{
							type:""
						}
					})
				} 
			}
		},
		*loginEmail ( { payload } , { put,call } ) {
			const res = yield call( loginService.loginEmail,  payload  );
			if ( res){
				if( res.code === 200 ) {
					message.success("登录成功");
					yield put({
						type:"clear"
					});
					yield put({
						type:"changeStatus",
						payload:{
							type:""
						}
					})
				} 
			}
		},
		*sendVerifyCode ( { payload } , { put,call } ) {
			const res = yield call( loginService.sendVerifyCode,  payload  );
			if ( res){
				if( res.code === 200 ) {
					message.success("验证码发送成功");
					yield put({
						type:"clear"
					});
					yield put({
						type:"changeStatus",
						payload:{
							type:""
						}
					})
				} 
			}
		}


	}
};