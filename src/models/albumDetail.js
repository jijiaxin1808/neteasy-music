import * as album from "../services/album";

export default {
  namespace: "AlbumDetail",
  state: {},
  reducers: {
    "add-album"(state, { payload }) {
      return {...state, ...payload};
    }
  },
  effects: {
    *getAlbum({ payload }, { call, put }) {
      
      let temp = yield call(album.getAlbumDetail, payload.id);
      if(temp.code === 200) {
        console.log(temp)
        yield put({
          type: "add-album",
          payload: {
            details: temp
          }
        });
      }
    }
  },
}