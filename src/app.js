import React from "react";
import Loadable from "react-loadable";
import { Spin } from "antd";

const  Loading = ({ error })=> {
	if (error) {
		return "Opps Error!!";
	} 
	else {
	    return (
			<Spin size='large'
				style={{
					width: "100%",
					margin: "60px auto"
				}} />);
	}
};
const songlist = Loadable({
	loader: () => import("./routes/songlist"),
	loading: Loading
});

const recommand = Loadable({
	loader: () => import("./routes/Recommand"),
	loading: Loading
});

const toplist = Loadable({
	loader: () => import("./routes/topList"),
	loading: Loading
});

const artist = Loadable({
	loader: () => import("./routes/artist"),
	loading: Loading
});

const djradio = Loadable({
	loader: () => import("./routes/djradio"),
	loading: Loading
});

const album = Loadable({
	loader: () => import("./routes/album"),
	loading: Loading
});

const mv = Loadable({
	loader: () => import("./routes/mv"),
	loading: Loading
});

const program = Loadable({
	loader: () => import("./routes/program"),
	loading: Loading
});


export default [{
	name:"推荐",
	icon: "recommand",
	path: "/",
	component: recommand,
	key: 0
},{
	name: "歌单",
	icon: "songlist",
	path: "/discover/playlist",
	component: songlist,
	key: 1
},{
	name:"推荐",
	icon: "recommand",
	path: "/discover/recommand",
	component: recommand,
	key: 2
},{
	name:"排行榜",
	icon: "toplist",
	path: "/discover/toplist",
	component: toplist,
	key: 3
},{
	name:"歌手",
	icon: "artist",
	path: "/discover/artist",
	component: artist,
	key: 4
},{
	name:"主播电台",
	icon: "djradio",
	path: "/discover/djradio",
	component: djradio,
	key: 5
},{
	name:"新碟上架",
	icon: "album",
	path: "/discover/album",
	component: album,
	key: 6
},{
	name:"MV",
	icon: "/mv",
	path: "/mv",
	component: mv,
	key: 7
},{
	name:"program",
	icon: "/program",
	path: "/program",
	component: program,
	key: 9
}
];




