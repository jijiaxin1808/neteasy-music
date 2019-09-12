export default {
    namespace: "login",
    state: {
        topMessage:"登录",
    },
    reducers: {
        loginPhone( state,action ) {
            return {...state,...action.payload};
    },
        loginEmail( state,action ) {
            return { ...state,...action.payload }
        }
    },
    effects: {
    


    }







}