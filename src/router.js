import React from "react";
import { Router, Route, Switch } from "dva/router";
import Header from "./routes/header";
import TopList from "./routes/topList";
import Footer from "./routes/footer";
import SongList from "./routes/songlist";
import Recommand from "./routes/Recommand";

function RouterConfig({ history }) {
	return (

		<Router history={history}>
			<div className="body">
				<Header />
				<Switch>
					<Route exact path="/discover/playlist" component={SongList} />
					<Route exact path="/" component={Recommand} />
					<Route exact path="/discover/toplist" component={TopList} />

				</Switch>
				<Footer />
			</div>
		</Router>

	);
}

export default RouterConfig;
