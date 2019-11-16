import * as loginService from "../services/login";
import { message } from "antd";

export default {
  namespace:"userAuth",
  state: {

  },
  reducers: {
    "set-login-status"(state, { payload }) {
      return {...state, ...payload}
    },
    "set-user-info"(state, { payload }) {
      return {...state, ...payload}
    }
  },
  effects: {
    *getLoginStatus({ payload }, { put, call }) {

      const res = yield call(loginService.getLoginStatus);

      if (res) {
        if(res.code === 301) {

          yield put({
            type: "set-login-status",
            payload: {loginStatus: false}
          });
        } else if (res.code === 200) {
          
          yield put({
            type: "set-login-status",
            payload: {loginStatus: true}
          });
          yield put({
            type: "set-user-info",
            payload: {userInfo: res}
          });
        } 
      }
    }
  } 
}