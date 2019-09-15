import Footer from "./routes/footer";
import SongList from "./routes/songlist";
import React from "react";
import { Router, Route, Switch } from "dva/router";
import Header from "./routes/header";

function RouterConfig({ history }) {
	return (

		<Router history={history}>
			<div className="body">
				<Header />
          <Switch>
            <Route path="/discover/playlist" component={SongList} />
          </Switch>
				<Footer />
			</div>
		</Router>

	);
}

export default RouterConfig;
