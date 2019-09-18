import React from "react";
import { connect } from "dva";
import { withRouter } from "dva/router";
import classnames from "classnames";
import "./index.less";

//es7修饰器@connect() - connect的语法糖，可以不用在connect里写dispatch。eject配置
class Pagination extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};
	}
	render() {
		const {
			totalPage,
			groupCount,
			curPage,
			startPage,
		} = this.props.SongList;

		const {
			handlePageClick,
			handlePrevClick,
			handleNextClick,
		} = this.props;

		return (
			<div className="songlist-wrap">
				<div className="pagination">
					<ul className="pagi-list">
						<a
							className={classnames({
								"zbtn": true,
								"prev": true,
								"disable": curPage === 1
							})}
							onClick={() => {handlePrevClick(this.props.SongList);}}
						>
              上一页
						</a>
						<a
							className={classnames({
								"zpgi": true,
								"js-selected": curPage === 1
							})}
							onClick={(e) => handlePageClick(e)}
						>
              1
						</a>
						<span
							className={classnames({
								zdot: curPage < 6 && totalPage >= 9,
							})}
						>
              ...
						</span>
						{
							Array.from({length: groupCount}).map((item, index) => {
								if(curPage < 6) {
									return index + 2;
								}else {
									return index + startPage;
								}

							}).map(
								(item, index) =>
									(item < totalPage) && <a
										className={classnames({
											"zpgi": true,
											"js-selected": item === curPage
										})}
										onClick={(e) => handlePageClick(e)}
									>
										{item}
									</a>
							)
						}
						<span
							className={classnames({
								zdot: curPage > totalPage - groupCount && totalPage >= 9,
							})}
						>
              ...
						</span>
						<a
							className={classnames({
								"zpgi": true,
								"js-selected": curPage === totalPage
							})}
							onClick={(e) => handlePageClick(e)}
						>
							{totalPage}
						</a>
						<a
							className={classnames({
								"zbtn": true,
								"next": true,
								"disable": curPage === totalPage
							})}
							onClick={() => {handleNextClick(this.props.SongList);}}
						>
              下一页
						</a>
					</ul>
				</div>
			</div>
		);
	}
	shouldComponentUpdate(nextProps, nextState, nextContext) {

		if(nextProps.SongList.curPage === this.props.SongList.curPage) {
			return false;
		} else {
			return true;
		}
	}

	componentDidUpdate() {
		// console.log(this.props);
		const { curPage, curTag } = this.props.SongList;
		const { getMoreSongs, limit, }= this.props;

		getMoreSongs(curPage, curTag, limit);//
	}

}

const mapDispatch = (dispatch) => ({

	handlePageClick(e) {

		dispatch({
			type: "SongList/orientate-cur-page",
			payload: {
				curPage: Number(e.target.innerHTML),
			},
		});
	},

	handleNextClick({curPage, groupCount, startPage, totalPage}) {
		if(curPage === groupCount + startPage - 1 && curPage !== totalPage) {
			dispatch({
				type: "SongList/change-start-page",
				payload: {
					startPage: startPage + groupCount,
				},
			});
		}
		if(curPage === totalPage - groupCount + 1) {
			dispatch({
				type: "SongList/change-start-page",
				payload: {
					startPage: curPage,
				},
			});
		}
		!(curPage === totalPage) && dispatch({
			type: "SongList/next-page",
			payload: {
				curPage: curPage + 1,
			},
		});
	},

	handlePrevClick({curPage, startPage, groupCount,}) {
		if(curPage === startPage) {
			dispatch({
				type: "SongList/change-start-page",
				payload: {
					startPage: startPage - groupCount ,
				}
			});
		}
		!(curPage === 1) && dispatch({
			type: "SongList/prev-page",
			payload: {
				curPage: curPage - 1,
			},
		});
	},
	getMoreSongs(curPage, tag, limit) {
		dispatch({
			type: "SongList/getSongs",
			payload: {
				curPage,
				tag,
				limit,
			},
		});
	},
});

export default withRouter(connect(({ SongList }) => ({
	SongList,
}), mapDispatch)(Pagination));
