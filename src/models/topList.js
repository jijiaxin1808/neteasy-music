

export default {
	namespace:"topList",
	state:{},
	reducers: {
		init( state,action ) {
			return {
				state , ...action.payload
			};
		},
	},
	effects:{}

};