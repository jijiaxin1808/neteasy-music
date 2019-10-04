import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "dva";
import Pagination from "../../components/pagination";
import AlbumList from "./main/albumList";
import "./index.less";

export const AlbumContext = React.createContext({
	album: []
});

class Album extends React.Component {

	render() {

	    const { hotAlbum, allAlbum } = this.props;

		return (
			<div className="album-list">
				<div className="content">
					<div className="hot-album">
						<div className="tit">
							<span>热门新碟</span>
						</div>
						<AlbumContext.Provider value={hotAlbum}>
							<AlbumList/>
						</AlbumContext.Provider>
					</div>
					<div className="all-album">
						<div className="tit">
							<span>全部新碟</span>
							<div className="tab">
								{
									["全部", "华语", "欧美", "韩国", "日本"].map(item => (
										<React.Fragment key={item}>
											<NavLink
												to={"/discover/album?" + item.name}
												activeClassName="tag-active"
												onClick={() => this.handleTabClick()}
											>
												{item}
											</NavLink>
											<span>|</span>
										</React.Fragment>
									))
								}
							</div>
						</div>
						<AlbumContext.Provider value={allAlbum}>
							<AlbumList/>
						</AlbumContext.Provider>
					</div>
					<Pagination />
				</div>
			</div>
		);
	}
	componentDidMount() {
	    const { getHotAlbum, getAlbum } = this.props;
	    getHotAlbum();
	    getAlbum(0, 35);
	}
}

const mapDispatch = (dispatch) => ({
	getHotAlbum() {
		dispatch({
			type: "Album/getHotAlbum",
			payload: {},
		});
	},
	getAlbum(offset, limit) {
	    dispatch({
			type: "Album/getAlbum",
			payload: {
				offset,
				limit,
			},
		});
	}
});

export default connect(({ Album }) => ({ hotAlbum: Album.hotAlbum, allAlbum: Album.allAlbum }), mapDispatch)(Album);