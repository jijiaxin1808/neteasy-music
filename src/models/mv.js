import  * as mvService from "../services/mv";

export default {
  namespace: "mv",
  state: {
    mvUrl: {},
    mvDetails: {},
  },
  reducers: {
    "add-mvDetails"(state, {payload}) {
      return {...state, ...payload}
    },
    "add-mvUrl"(state, {payload}) {
      return {...state, ...payload}
    }
  },
  effects: {

    *getMvDetails({ payload }, { put, call }) {
      const res = yield call(mvService.getMvDetails, payload);
      // res.data
      if (res.code === 200) {
        yield put({
          type: "add-mvDetails",
          payload: {
            mvDetails: res.data,
          }
        });
      }
    },
    *getMvUrl({ payload }, { put, call }) {
      const res = yield call(mvService.getMvUrl, payload);
      // data.url
      if (res.code === 200) {
        yield put({
          type: "add-mvUrl",
          payload: {
            mvUrl: res.data.url,
          }
        });
      }
    }
  }
}