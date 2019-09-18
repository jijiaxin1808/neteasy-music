import dva from "dva";
// import createHistory from "history/createBrowserHistory";
import "./index.css";

// 1. Initialize
// 1. Initialize
const app = dva({
	initialState: {
	  SongList: {
			totalPage: 38,
			groupCount: 7,
			curPage: 1,
			startPage: 6,
			categories: [],
			sub: [[]],
			showTagList: false,
			playlists: [],
			curTag: "全部",
	  },
	}
});

// 2. Plugins
// app.use({});

// 3. Model
const models = require.context("./models", true, /^\.\/.*\.js$/);
models.keys().forEach(key => {
	app.model(models(key).default);
});

// 4. Router
app.router(require("./router").default);

// 5. Start
app.start("#root");
