
export default {
	namespace: "login",
	state: {
		name: "登录",
		type: "loginDefault",
		isMouseDown: "false",
		loginTop: "300px",
		loginLeft: "700px",
		userName: "",
		userEmail: "",
		userPassword: ""
	},
	reducers: {
		loginPhone( state,action ) {
			return {...state,...action.payload};
		},
		loginEmail( state,action ) {
			return { ...state,...action.payload };
		},
		mouseDown( state ) {
			return { ...state,isMouseDown:true };
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
		}

	},
	effects: {
	}
};