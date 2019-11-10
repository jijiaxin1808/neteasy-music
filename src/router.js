import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./routes/header";
import Footer from "./routes/footer";
import PlayBar from "./routes/playBar";
import apps from "./app";

function RouterConfig({ history }) {
	return (

		<Router history={history}>
			<div className="body">
				<Header />
				<Switch>
					{
						apps.map(({ name, path, exact = true, component }) => (
							<Route path={path} exact={exact} component={component} key={name} />
							))
					}
				</Switch>
				<PlayBar />
				<Footer />
			</div>
		</Router>

	);
}

export default RouterConfig;
