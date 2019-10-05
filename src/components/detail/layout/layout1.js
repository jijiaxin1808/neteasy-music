/*电台、 专辑、歌单 layout*/
import React from "react";
import "./layout.less";
import DownLoad from "../downLoad";

function LayoutOne(props) {

	const sliderData = props.children.sliderData;
	return (
		<div className="wrap">
			<div className="g-mn">
				<div className="g-mn-ct">
					<div className="g-wrap">
						<div className="info">
							<div className="cover">
								{props.renderImg()}
								<div className="mask" />
							</div>
							<div className="cnt">
								{props.children.renderInfo()}
							</div>
							{props.children.renderShowList()}
						</div>
					</div>
				</div>
			</div>
			<div className="slider">
				<div className="slider-wrap">
					<div className="hd">{sliderData.tags[0]}</div>
					{props.children.renderPicList()}
					<div className="hd">{sliderData.tags[1]}</div>
					{props.children.renderRecList()}
					<DownLoad />
				</div>
			</div>
		</div>
	);
}

export default LayoutOne;