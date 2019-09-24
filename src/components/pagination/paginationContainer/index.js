//分页器组件的容器组件
import React from "react";
import { connect } from "dva";
import PaginationUI from "../paginationUI";

//es7修饰器@connect() - connect的语法糖，可以不用在connect里写dispatch。eject配置

const Pagination = ({ dispatch, SongList }) => {
	const { totalPage,
		groupCount,
		curPage,
		startPage, } = SongList;

	return (
		<div className="songlist-wrap">
			<PaginationUI
				totalPage={totalPage}
				groupCount={groupCount}
				curPage={curPage}
				startPage={startPage}
				handlePageClick={handlePageClick}
				prev={handlePrevClick}
				next={handleNextClick}
			/>
		</div>
	);

	function handlePageClick(e) {

		dispatch({
			type: "SongList/orientate-cur-page",
			curPage: parseInt(e.target.innerHTML),
		});
	}

	function handleNextClick(e) {
		if(curPage === groupCount + startPage - 1 && curPage !== totalPage) {
			dispatch({
				type: "SongList/change-start-page",
				startPage: startPage + groupCount,
			});
		}
		if(curPage === totalPage - groupCount + 1) {
			dispatch({
				type: "SongList/change-start-page",
				startPage: curPage,
			});
		}
		!(curPage === totalPage) && dispatch({
			type: "SongList/next-page",
			curPage: curPage + 1,
		});
	}

	function handlePrevClick(e) {
		if(curPage === startPage) {
			dispatch({
				type: "SongList/change-start-page",
				startPage: startPage - groupCount ,
			});
		}
		!(curPage === 1) && dispatch({
			type: "SongList/prev-page",
			curPage: curPage - 1,
		});
	}
};

export default connect(({ SongList }) => ({
	SongList,
}))(Pagination);
