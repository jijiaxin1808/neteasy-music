/*
* songlist页面的tag弹出框
* */
import React from "react";
import { connect } from "dva";
import { Link } from "dva/router";
import "./index.less";

class TagList extends React.Component {

	render() {

		const { sub, categories } = this.props;

		return (
			<div className="song-taglist">
				<div className="hd">
					<i className="hd-arrow"></i>
				</div>
				<div className="bd">
					<h3 className="song-taglist-all">
						<Link to="/discover/playlist">全部风格</Link>
					</h3>
					{

						categories.map((item, index) => (
							<dl key={item}>
								<dt>
									<i className={`icon-${index + 1}`}></i>
									<span>{item}</span>
								</dt>
								<dd>
									{
										sub[index].map(item => (
											<React.Fragment>
												<Link to={"/discover/playlist?" + item.name}>
													{item.name}
												</Link>
												<span>|</span>
											</React.Fragment>
										))
									}
								</dd>
							</dl>
						))

					}
				</div>
				<div className="fd">

				</div>
			</div>
		);
	}
}

const mapState = ({ SongList }) => ({
	categories: SongList.categories,
	sub: SongList.sub,
});

export default connect(mapState)(TagList);
