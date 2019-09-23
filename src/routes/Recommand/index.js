import React from "react";
import { connect } from "dva";
import { NavLink } from "react-router-dom";
import classnames from "classnames";
import SongListInner from "../../components/songlist";
import "./index.less";

class Recommand extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			left: ["-643px", "35px", "713px", "713px"],
			ani: [false, true, false, false],
			showOper: false,
			operIndex: 0,
		};
		this.prev = this.prev.bind(this);
		this.next = this.next.bind(this);
		this.handleMouseleave = this.handleMouseleave.bind(this);
		this.handleMouseover = this.handleMouseover.bind(this);
	}
	render() {

		const {
			recplaylists,
			recalbums,
			rectoplists,
			topartists,
			hanldleDotClick,
		} = this.props;
		const { left, ani, showOper, operIndex, operTopname, } = this.state;


		return (
			<div>
				<div className="rec-banner">
					<div className="rec-wrap">
						<div className="rec-banner-inner">
							<a href="/">
								<img src="http://p1.music.126.net/1GtUjldt_KjmhZ17NO_Krg==/109951164364414304.jpg" />
							</a>
							<div className="download">
								<NavLink to="/" />
								<p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
								<span className="shadow-l" />
								<span className="shadow-r" />
							</div>
							<ul className="rec-ban-dots">
								<li
									className={classnames({
										recClickFlag: true,
										active: true
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
								<li
									className={classnames({
										recClickFlag: true,
										active: false
									})}
									onClick={hanldleDotClick}
								/>
							</ul>
							<a className="arrow arrow-l">&lt</a>
							<a className="arrow arrow-r">&gt</a>

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
									{["华语", "流行", "摇滚", "民谣", "电子"].map(item => (
										<React.Fragment key={item}>
											<NavLink
												to={"/discover/playlist?" + item.name}
												activeClassName="tag-active"
												onClick={() => {
													this.handleTagClick();
												}}
											>
												{item}
											</NavLink>
											<span>|</span>
										</React.Fragment>
									))}
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
								<a
									className="arrow arrow-l"
									onClick={() => {
										setTimeout(this.prev, 200);
									}}
								>
                                    ←
								</a>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[0]
									})}
									style={{
										left: left[0]
									}}
								>
									{recalbums.slice(0, 5).map(item => {
										return (
											<li>
												<div className="u-cover u-cover-alb1">
													<img src={item.picUrl + "?param=100y100"} alt={item.picUrl} />
													<a className="mask">mask</a>
													<i className="icon-play" />
												</div>
												<p>
													<NavLink to="/">{item.name}</NavLink>
												</p>
												<p className="tit">
													<NavLink to="/">{item.artist.name}</NavLink>
												</p>
											</li>
										);
									})}
								</ul>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[1]
									})}
									style={{
										left: left[1]
									}}
								>
									{recalbums.slice(5, 10).map(item => {
										return (
											<li>
												<div className="u-cover u-cover-alb1">
													<img src={item.picUrl + "?param=100y100"} alt={item.picUrl} />
													<a className="mask">mask</a>
													<i className="icon-play" />
												</div>
												<p>
													<NavLink to="/">{item.name}</NavLink>
												</p>
												<p className="tit">
													<NavLink to="/">{item.artist.name}</NavLink>
												</p>
											</li>
										);
									})}
								</ul>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[2]
									})}
									style={{
										left: left[2]
									}}
								>
									{recalbums.slice(0, 5).map(item => {
										return (
											<li>
												<div className="u-cover u-cover-alb1">
													<img src={`${item.picUrl}?param=100y100`} alt="img" />
													<a className="mask" >mask</a>
													<i className="icon-play" />
												</div>
												<p>
													<NavLink to="/">{item.name}</NavLink>
												</p>
												<p className="tit">
													<NavLink to="/">{item.artist.name}</NavLink>
												</p>
											</li>
										);
									})}
								</ul>
								<ul
									className={classnames({
										recNewList: true,
										aniActive: ani[3]
									})}
									style={{
										left: left[3]
									}}
								>
									{recalbums.slice(5, 10).map(item => {
										return (
											<li>
												<div className="u-cover u-cover-alb1">
													<img src={`${item.picUrl}?param=100y100`} alt="img" />
													<a className="mask">mask</a>
													<i className="icon-play">icon-play</i>
												</div>
												<p>
													<NavLink to="/">{item.name}</NavLink>
												</p>
												<p className="tit">
													<NavLink to="/">{item.artist.name}</NavLink>
												</p>
											</li>
										);
									})}
								</ul>
								<a
									className="arrow arrow-r"
									onClick={() => {
										setTimeout(this.next, 200);
									}}
								>
                                 →
								</a>
							</div>
						</div>
						{/*新碟上架*/}
						{/*榜单*/}
						<div className="rec-toplists">
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
								{[
									{
										name: "云音乐飙升榜",
										imgSrc: "http://p2.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg"
									},
									{
										name: "云音乐新歌榜",
										imgSrc: "http://p2.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg"
									},
									{
										name: "网易原创歌曲榜",
										imgSrc: "http://p2.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg"
									}
								].map((item, index) => {
								    const top = item.name;
								    return (
										<dl>
											<dt>
												<div className="rec-toplist-cover">
													<img src={`${item.imgSrc}?param=80y80`} alt="/"/>
													<a className="mask" >mask</a>
												</div>
												<div className="rec-toplist-tit">
													<a>
														<h3>{item.name}</h3>
													</a>
													<div className="btn">
														<a className="icon-play">播放</a>
														<a className="icon-collect">收藏</a>
													</div>
												</div>
											</dt>
											<dd>
												{rectoplists
													.slice(10 * index, 10 * (index + 1))
													.map((item, index) => {
														if (index < 3) {
															return (
																<div
																	key={item}
																	className={classnames({recTopList: true, zHvr: showOper && index === operIndex && top === operTopname})}
																	onMouseOut={this.handleMouseleave}
																	onMouseOver={(e) => this.handleMouseover(e, index, top)} 
																>
																	<div className="tit">
																		<span className="top">{index + 1}</span>
																		<NavLink to="/">
																			{item}
																		</NavLink>
																	</div>
																	<div className="oper">
																		<a className="icon-play">播放</a>
																		<a className="icon-add">添加</a>
																		<a className="icon-collect">收藏</a>
																	</div>
																</div>
															);
														} else {
															return (
																<div
																	key={item}
																	className={classnames({recTopList: true, zHvr: showOper && index === operIndex && top === operTopname})}
																	onMouseOut={this.handleMouseleave}
																	onMouseOver={(e) => this.handleMouseover(e, index, top)}
																>
																	<div className="tit">
																		<span className="no-top">{index + 1}</span>
																		<NavLink to="/" >
																			{item}
																		</NavLink>
																	</div>
																	<div className="oper">
																		<a className="icon-play">播放</a>
																		<a className="icon-add">添加</a>
																		<a className="icon-collect">收藏</a>
																	</div>
																</div>
															);
														}
													})}
											</dd>
											<NavLink className="all" to="/">查看全部&gt;</NavLink>
										</dl>
									);}
								)}
							</div>
						</div>
						{/*榜单*/}
					</div>
					<div className="rec-module-slide">
						<div className="rec-login">
							<p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
							<a className="rec-login-btn">用户登录</a>
						</div>
						<div className="rec-songer">
							<div className="rec-songer-tit rec-slide-tit">
                                入驻歌手
								<NavLink to="/" className="all">查看全部&gt;</NavLink>
							</div>
							{
								topartists.map((item) => {
									return (
										<div className="rec-songer-list">
											<a className="rec-songer-item">
												<img src={`${item.img1v1Url}?param=62y62`} alt="img"/>
												<div className="info">
													<span>{item.name}</span>
													<p>台湾歌手张惠妹</p>
												</div>
											</a>
										</div>
									);
								})
							}
							<div className="btn">
								<a>申请成为网易音乐人</a>
							</div>
						</div>
						<div className="rec-anchor">
							<div className="rec-anchor-tit rec-slide-tit">
                                热门主播
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentDidMount() {
		const {
		    getRecSongList,
			getRecAlbum,
			getTopList,
			getTopArtists,
		} = this.props;

		getRecSongList();
		getRecAlbum(0, 10);
		getTopList([3, 0, 2]);
		getTopArtists(0, 5);
	}
	prev() {
		const ani = [...this.state.ani];
		const left = [...this.state.left];
		// console.log(left.indexOf("35px"));
		for (let i = 0; i < ani.length; i++) {
			if (i !== left.indexOf("35px")) {
				ani[i] = false;
			}
		}
		const index = left.indexOf("35px") - 1 < 0 ? 3 : left.indexOf("35px") - 1;
		ani[index] = true;
		left.push(left.shift());
		this.setState({
			left,
			ani
		});
	}
	next() {
		const ani = [...this.state.ani];
		const left = [...this.state.left];
		for (let i = 0; i < ani.length; i++) {
			if (i !== left.indexOf("35px")) {
				ani[i] = false;
			}
		}
		const index = left.indexOf("35px") + 1 > 3 ? 0 : left.indexOf("35px") + 1;
		ani[index] = true;
		left.unshift(left.pop());
		this.setState({
			left,
			ani
		});
	}
	handleMouseover(e, index, name) {
		this.setState({
			showOper: true,
			operIndex: index,
			operTopname: name,
		});
	}
	handleMouseleave() {
		this.setState({
			showOper: false,
		});
	}
}

const mapDispatch = dispatch => ({
	getRecSongList() {
		dispatch({
			type: "Recommand/getSongs",
			payload: {
				tag: "全部",
				curPage: 1,
				limit: 8
			}
		});
	},
	getRecAlbum(offset, limit) {
		dispatch({
			type: "Recommand/getAlbum",
			payload: {
				offset,
				limit
			}
		});
	},
	getTopList(idxArr) {
		dispatch({
			type: "Recommand/getTopList",
			payload: {
				idxArr
			}
		});
	},
	getTopArtists(offset, limit) {
	    dispatch({
			type: "Recommand/getTopArtists",
			payload: {
				offset,
				limit,
			},
		});
	},
});

export default connect(({ Recommand }) => ({
	recplaylists: Recommand.recplaylists,
	recalbums: Recommand.recalbums,
	rectoplists: Recommand.rectoplists,
	topartists: Recommand.topartists,
}), mapDispatch)(Recommand);
