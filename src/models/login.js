export default {
    namespace: "login",
    state: {
        name:"登录",
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