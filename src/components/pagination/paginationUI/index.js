/** UI params
 * @param curPage - current page
 * @param groupCount - page count between ellipsis
 * @param totalPage - psge count
 * @param startPage - page show between ellipsis
 */

import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import "./index.less";

const PaginationUI = ({ curPage, groupCount, totalPage, startPage = 6,
	handlePageClick, prev, next,
}) => (

	<div className="pagination">
		<ul className="pagi-list">
			<a
				className={classnames({
					"zbtn": true,
					"prev": true,
					"disable": curPage === 1
				})}
				onClick={prev}
			>
                            上一页
			</a>
			<a
				className={classnames({
					"zpgi": true,
					"js-selected": curPage === 1
				})}
				onClick={handlePageClick}
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
							onClick={handlePageClick}
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
				onClick={handlePageClick}
			>
				{totalPage}
			</a>
			<a
				className={classnames({
					"zbtn": true,
					"next": true,
					"disable": curPage === totalPage
				})}
				onClick={next}
			>
                            下一页
			</a>
		</ul>
	</div>
);

PaginationUI.propTypes = {
	prev: PropTypes.func.isRequired,
	next: PropTypes.func.isRequired,
	handlePageClick: PropTypes.func.isRequired,
};

export default PaginationUI;
