
export default {
	namespace: "login",
	state: {
		name: "登录",
		type: "loginDefault",
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
			return { ...state,...action.payload }
		},
		initPosition (state,action) {
			return { ...state,...action.payload }
		}

	},
	effects: {
		


	}
};