import React from "react";
import { connect } from "dva";
import { NavLink } from "dva/router";
import classnames from "classnames";
import SongListInner from "../../components/songlist";
import "./index.less";

class Recommand extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			left: ["-643px", "35px", "713px", "713px"],
			ani: [false, true, false, false],
		};
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
	}
	render() {

		const { hanldleDotClick, recplaylists, recalbums, } = this.props;
		const { left, ani } = this.state;

		return (
		  <div>
				<div className="rec-banner">
					<div className="rec-wrap">
						<div className="rec-banner-inner">
							<a href="/" >
								<img src="http://p1.music.126.net/1GtUjldt_KjmhZ17NO_Krg==/109951164364414304.jpg" />
							</a>
							<div className="download">
								<NavLink to="/" />
								<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
								<span className="shadow-l" />
								<span className="shadow-r"/>
							</div>
							<ul className="rec-ban-dots">
								<li
									className={classnames({
										recClickFlag: true,
										active: true,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false,
									})}
									onClick={hanldleDotClick}
								/>
							</ul>
							<a className="arrow arrow-l" />
							<a className="arrow arrow-r" />
						</div>
					</div>
				</div>
				<div className="rec-module">
					<div className="rec-module-l">
						<div className="rec-songlists">
							<div className="rec-songlists-title rec-module-title">
								<NavLink to="/discover/playlists">
									<i className="ico-rec" />
									<span>热门推荐</span>
								</NavLink>
								<div className="tab">
									{
										["华语", "流行", "摇滚", "民谣", "电子"].map(item => (
											<React.Fragment key={item}>
												<NavLink
													to={"/discover/playlist?" + item.name}
													activeClassName="tag-active"
													onClick={() => {this.handleTagClick();}}
												>
													{item}
												</NavLink>
												<span>|</span>
											</React.Fragment>
										))
									}
								</div>
								<div className="more">
                  更多
									<i className="icon-more" />
								</div>
							</div>
						  <SongListInner playlists={recplaylists} />
							{/*	*/}
						</div>
						{/*新碟上架*/}
						<div className="rec-new">
							<div className="rec-new-title rec-module-title">
								<NavLink to="/discover/playlists">
									<i className="ico-rec" />
									<span>新碟上架</span>
								</NavLink>
								<div className="more">
                  更多
									<i className="icon-more" />
								</div>
							</div>
							<div className="rec-new-inner">
								<a className="arrow arrow-l" onClick={() => {setTimeout(this.prev, 200);}}></a>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[0],
									})}
									style={{
										left: left[0],
									}}
								>
									{
										recalbums.slice(0,5).map(item => {

										  return (
												<li>
													<div className="u-cover u-cover-alb1">
														<img src={item.picUrl + "?param=100y100"} />
														<a className="mask"></a>
														<i className="icon-play"></i>
													</div>
													<p><NavLink to="/">{item.name}</NavLink></p>
													<p className="tit"><NavLink to="/">{item.artist.name}</NavLink></p>
												</li>
											);
										})
									}
								</ul>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[1],
									})}
									style={{
										left: left[1],
									}}
								>
									{
										recalbums.slice(5,10).map(item => {

											return (
												<li>
													<div className="u-cover u-cover-alb1">
														<img src={item.picUrl + "?param=100y100"} />
														<a className="mask"></a>
														<i className="icon-play"></i>
													</div>
													<p><NavLink to="/">{item.name}</NavLink></p>
													<p className="tit"><NavLink to="/">{item.artist.name}</NavLink></p>
												</li>
											);
										})
									}
								</ul>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[2],
									})}
									style={{
										left: left[2],
									}}
								>
									{
										recalbums.slice(0,5).map(item => {

											return (
												<li>
													<div className="u-cover u-cover-alb1">
														<img src={item.picUrl + "?param=100y100"} />
														<a className="mask"></a>
														<i className="icon-play"></i>
													</div>
													<p><NavLink to="/">{item.name}</NavLink></p>
													<p className="tit"><NavLink to="/">{item.artist.name}</NavLink></p>
												</li>
											);
										})
									}
								</ul>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[3],
									})}
									style={{
										left: left[3],
									}}
								>
									{
										recalbums.slice(5,10).map(item => {

											return (
												<li>
													<div className="u-cover u-cover-alb1">
														<img src={item.picUrl + "?param=100y100"} />
														<a className="mask"></a>
														<i className="icon-play"></i>
													</div>
													<p><NavLink to="/">{item.name}</NavLink></p>
													<p className="tit"><NavLink to="/">{item.artist.name}</NavLink></p>
												</li>
											);
										})
									}
								</ul>
								<a className="arrow arrow-r" onClick={() => {setTimeout(this.next, 200);}}></a>
							</div>
						</div>
						{/*新碟上架*/}
						{/*榜单*/}
						<div　className="rec-toplists">
							<div className="rec-toplists-title rec-module-title">
								<NavLink to="/discover/playlists">
									<i className="ico-rec" />
									<span>榜单</span>
								</NavLink>
								<div className="more">
                  更多
									<i className="icon-more" />
								</div>
							</div>
							<div className="rec-toplists-inner">
								{
									["云音乐飙升榜", "云音乐新歌榜", "网易原创歌曲榜"].map((item) => (

										<dl>
											<dt>
												<div className="rec-toplist-cover">
													{/*<img src={`${}?param=80y80`}/>*/}
													<a className="mask"></a>
												</div>
												<div className="rec-toplist-tit">
													<a><h3>{item}</h3></a>
													<div className="btn">
														<a className="icon-play">播放</a>
														<a className="icon-collect">收藏</a>
													</div>
												</div>
											</dt>
											<dd>

											</dd>
										</dl>
									))
								}
							</div>
						</div>
						{/*榜单*/}
					</div>
					<div className="rec-module-slide"></div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		const { getRecSongList, getRecAlbum, getTopList } = this.props;
		getRecSongList();
		getRecAlbum(0, 10);
		getTopList([3, 0, 2]);
 	}
 	prev() {
		const ani = [...this.state.ani];
		const left = [...this.state.left];
		// console.log(left.indexOf("35px"));
		for(let i = 0 ; i < ani.length ; i++) {
			if(i !== left.indexOf("35px")) {
				ani[i] = false;
			}
		}
		const index = (left.indexOf("35px") - 1) < 0 ? 3 : left.indexOf("35px") - 1;
		ani[index] = true;
		left.push(left.shift());
		this.setState({
			left,
			ani,
		});
	}
	next() {
		const ani = [...this.state.ani];
		const left = [...this.state.left];
		for(let i = 0 ; i < ani.length ; i++) {
			if(i !== left.indexOf("35px")) {
				ani[i] = false;
			}
		}
		const index = (left.indexOf("35px") + 1) > 3 ? 0 : left.indexOf("35px") + 1;
		ani[index] = true;
		left.unshift(left.pop());
		this.setState({
			left,
			ani,
		});
	}
}

const mapDispatch = (dispatch) => ({
	getRecSongList() {
		dispatch({
			type: "Recommand/getSongs",
			payload: {
			  tag: "全部",
				curPage: 1,
				limit: 8,
			}
		});
	},
	getRecAlbum(offset, limit, scale) {
	  dispatch({
			type: "Recommand/getAlbum",
			payload: {
			  offset,
				limit,
			},
		});
	},
	getTopList(idxArr) {
	  dispatch({
			type: "Recommand/getTopList",
			payload: {
				idxArr,
			},
		});
	}
});

export default connect(({ Recommand }) => ({
	recplaylists: Recommand.recplaylists,
	recalbums: Recommand.recalbums,
	rectoplists: Recommand.rectoplists,
}), mapDispatch)(Recommand);
