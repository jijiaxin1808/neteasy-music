export default {
	namespace: "djradio",
	state:{
		isShow:[true,false],
	},
	reducers:{
		handlePrev( state ) {
			console.log("prev1");
			return {
				...state,isShow:[ true,false ]
			};
		},
		handleNext( state ) {
			console.log("next1");
			return {
				...state,isShow:[ false,true ]
			};
		}
	},
	effects:{
        
	}
};