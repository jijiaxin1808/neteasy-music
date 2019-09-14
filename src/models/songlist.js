import * as songListService from "../services/songlist";

export default {
	namespace: "SongList",
	state: {

	},
	reducers: {
		"orientate-cur-page"(state, { curPage }) {
			return {
				...state,
				curPage,
			};
		},
		"next-page"(state, { curPage }) {
			return {
				...state,
				curPage,
			};
		},
		"prev-page"(state, { curPage }) {
			return {
				...state,
				curPage,
			};
		},
		"change-start-page"(state, { startPage }) {
			return {
				...state,
				startPage,
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
		}
	},
	effects: {
		*getTags(action, { call, put }) {
			const temp = yield call(songListService.getTagList, {});
			// console.log('temp.data', temp.data);
			if(temp.data.code === 200) {
				console.log(temp.data.categories);

				yield put({
					type: "add-tags-list",
					payload: {
						categories: temp.data.categories,
						sub: temp.data.sub,
					}
				});
			}
		}
	},
};
