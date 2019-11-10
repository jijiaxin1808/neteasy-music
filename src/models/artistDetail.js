import * as artist from "../services/artist";

export default {
  namespace: "ArtistDetail",
  state: {},
  reducers: {
    "add-songs"(state, { payload }) {
      return {...state, ...payload};
    },
    "add-album"(state, { payload }) {
      return {...state, ...payload};
    },
    "add-desc"(state, { payload }) {
      return {...state, ...payload};
    },
    "add-mv"(state, { payload }) {
      return {...state, ...payload};
    }
  },
  effects: {
    *getHotSongs({ payload }, { call, put }) {

      let temp = yield call(artist.getArtistSongList, payload.id);
      if (temp.code === 200) {
        yield put({
          type: "add-songs",
          payload: {
            songs: temp.hotSongs,
          }
        });
      }
    },
    *getAlbum({ payload }, { call, put }) {

      let temp = yield call(artist.getArtistAlbum, payload);
      if (temp.code === 200) {
        yield put({
          type: "add-album",
          payload: {
            album: temp.hotAlbums,
          }
        });
      }
    },
    *getMv({ payload }, { call, put }) {
      
			let temp = yield call(artist.getMv, payload.id);
      if (temp.code === 200) {
        yield put({
          type: "add-mv",
          payload: {
            mv: temp,
          }
        });
      }
		},
    *getDesc({ payload }, { call, put }) {

      let temp = yield call(artist.getDesc, payload.id);
      if (temp.code === 200) {
        yield put({
          type: "add-desc",
          payload: {
            desc: temp,
          }
        });
      }
    },
  }
}