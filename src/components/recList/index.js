import React from "react";
import "./index.less";

function RecList(props) {

	const { recList } = props;
	return (
		<ul className="rec-song-list">
			{
				recList.map(item => {
					return (
						<li>
							<div className="u-cover">
								<a>
									<img src={`${item.coverImgUrl}?param=50y50`} alt={item.coverImgUrl}/>
								</a>
							</div>
							<div className="info">
								<p className="s-name f-thide">
									<a>{item.name}</a>
								</p>
								<p className="c-name f-thide">
									<span>by</span>
									<a>{item.creator.nickname}</a>
									<sub className="icon-84"></sub>
								</p>
							</div>
						</li>
					);
				})
			}
		</ul>
	);
}

export default RecList;