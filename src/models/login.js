import  * as loginService from "../services/login";
import { message } from "antd";


export default {
	namespace: "login",
	state: {
		name: "登录",
		type: "",
		isMouseDown: "false",
		loginTop: "",
		loginLeft: "",
		userName: "",
		userEmail: "",
		userPassword: "",
		RegPassword:"",
		RegName:"",
		regUserName: "",
		loginStatus: false,
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
		},
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
		*loginPhoneEffect ( { payload } , { put,call } ) {
			const res = yield call( loginService.loginPhone,  payload  );
			if ( res ){
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
					});
				} 
			}
		},
		*sendVerifyCode ( { payload } , { put, call } ) {
			loginService.verifyEmail(payload).then(res => {
				if (res.status === 200) {
					if (res.data.code === 0) {
						put({
							type:"clear"
						});
						put({
							type:"changeStatus",
							payload:{
								type:"verifyCode"
							}
						});
					} else if (res.data.code === 1) {
						message.error("邮箱已注册");
					} else {
						message.error("用户名不能为空");
					}
				}
			}).catch(err => {

			});
		},
		*verifyVerifyCode({ payload }, { put, call }) {
			const res = yield call(loginService.verifyEmailCode, payload);
			console.log(res)
		}
	}
};