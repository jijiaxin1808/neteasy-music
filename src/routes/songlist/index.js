import React from "react";
import "./index.less";
import SongListContainer from "../../components/songlist/songlistContainer";
import Pagination from "../../components/pagination/paginationContainer";

const SongList = (props) => (

	<div className="wrap">
		<SongListContainer />
		<Pagination />
	</div>

);

export default SongList;
