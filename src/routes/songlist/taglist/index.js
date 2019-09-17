/*
* songlist页面的tag弹出框
* */
import React from "react";
import { connect } from "dva";
import { NavLink } from "dva/router";
import "./index.less";

class TagList extends React.Component {

	constructor(props) {
		super(props);
		this.state = {

		};
		this.handleTagClick = this.handleTagClick.bind(this);
	}

	handleTagClick() {

		setTimeout(() => {window.location.reload()}, 1);

	}

	render() {

		const { sub, categories } = this.props;

		return (
			<div className="song-taglist">
				<div className="hd">
					<i className="hd-arrow" />
				</div>
				<div className="bd">
					<h3 className="song-taglist-all">
						<NavLink to="/discover/playlist?全部" onClick={this.handleTagClick}>全部风格</NavLink>
					</h3>
					{

						categories.map((item, index) => (
							<dl key={item}>
								<dt>
									<i className={`icon-${index + 1}`} />
									<span>{item}</span>
								</dt>
								<dd>
									{
										sub[index].map(item => (
											<React.Fragment key={item}>
												<NavLink
													to={"/discover/playlist?" + item.name}
													activeClassName="tag-active"
													onClick={() => {this.handleTagClick()}}
												>
													{item.name}
												</NavLink>
												<span>|</span>
											</React.Fragment>
										))
									}
								</dd>
							</dl>
						))

					}
				</div>
				<div className="fd" />
			</div>
		);
	}
}

const mapState = ({ SongList }) => ({
	categories: SongList.categories,
	sub: SongList.sub,
});
const mapDispatch = (dispatch) => ({});
export default connect(mapState, mapDispatch)(TagList);
