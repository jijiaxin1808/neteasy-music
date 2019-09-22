import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import Header from "./routes/header";
import TopList from "./routes/topList";
import Footer from "./routes/footer";
import SongList from "./routes/songlist";
import Recommand from "./routes/Recommand";
import Artist from "./routes/artist";
import Djradio from "./routes/djradio";

function RouterConfig({ history }) {
	return (

		<Router history={history}>
			<div className="body">
				<Header />
				<Switch>
					<Route exact path="/discover/playlist" component={SongList} />
					<Route exact path="/discover/recommand" component={Recommand} />
					<Route exact path="/discover/toplist" component={TopList} />
					<Route exact path="/discover/artist" component={Artist} />
					<Route exact path="/discover/djradio" component={Djradio} />
				</Switch>
				<Footer />
			</div>
		</Router>

	);
}

export default RouterConfig;
