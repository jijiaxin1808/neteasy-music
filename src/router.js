import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./routes/header";
import TopList from "./routes/topList";
import Footer from "./routes/footer";
import SongList from "./routes/songlist";
import Recommand from "./routes/Recommand";
import Artist from "./routes/artist";
import Djradio from "./routes/djradio";
import Album from "./routes/album";
import PlayBar from "./routes/playBar";
import SongListDetail from "./routes/songlistDetail";

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
					<Route exact path="/discover/album" component={Album} />
					<Route exact path="/playlist" component={SongListDetail}/>
				</Switch>
				<PlayBar />
				<Footer />
			</div>
		</Router>

	);
}

export default RouterConfig;
