import * as songListService from "../services/songlist";

export default {

	namespace: "SongList",
	state: {

	},
	reducers: {
		"orientate-cur-page"(state, { payload }) {
			return {
				...state,
				curPage: payload.curPage,
			};
		},
		"next-page"(state, { payload }) {
			return {
				...state,
				curPage: payload.curPage,
			};
		},
		"prev-page"(state, { payload }) {
			return {
				...state,
				curPage: payload.curPage,
			};
		},
		"change-start-page"(state, { payload }) {
			return {
				...state,
				startPage: payload.startPage,
			};
		},
		"add-tags-list"(state, { payload }) {

			const categories = [];
			for(let cat in payload.categories) {
				categories.push(payload.categories[cat]);
			}
			const sub = [];
			for(let i = 0 ; i < categories.length ; i++) {
				sub.push([]);
			}
			payload.sub.map(item => {
				sub[item.category].push({
					name: item.name,
					hot: item.hot,
				});
				return null;
			});

			return {
				...state,
				categories,
				sub,
			};
		},
		"toggle-select-click"(state, { payload }) {
			return {
				...state,
				showTagList: !state.showTagList
			};
		},
		"add-play-list"(state, { payload }) {

		  return {
		    ...state,
				playlists: payload.playlists,
			};
		},
		"change-cur-tag"(state, { payload }) {

		  return {
		    ...state,
				curTag: payload.tag,
			};
		}
	},
	effects: {
		*getTags(action, { call, put }) {

			const temp = yield call(songListService.getTagList, {});

			if(temp.code === 200) {

				yield put({
					type: "add-tags-list",
					payload: {
						categories: temp.categories,
						sub: temp.sub,
					},
				});
			}
		},

		*getSongs({ payload }, { call, put }) {

			const temp = yield call(songListService.getSongList, payload.tag, payload.curPage, payload.limit);

			if(temp.code === 200) {

				yield put({
					type: "add-play-list",
					payload: {
						playlists: temp.playlists,
					},
				});
			}
		}
	},
};
