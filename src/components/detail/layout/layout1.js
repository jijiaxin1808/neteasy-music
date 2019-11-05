/*电台、 专辑、歌单、歌手 layout*/
import React from "react";
import "./layout.less";
import DownLoad from "../downLoad";

function LayoutOne(props) {

	const renderChildren = props.children;
	const sliderData = renderChildren.sliderData;
	return (
		<div className="wrap">
			<div className="g-mn">
				<div className="g-mn-ct">
					<div className="g-wrap">
						<div className="info">
							<div className="cover">
								{renderChildren.renderImg()}
							</div>
							<div className="cnt">
								{renderChildren.renderInfo()}
							</div>
							{renderChildren.renderShowList()}
						</div>
					</div>
				</div>
			</div>
			<div className="slider">
				<div className="slider-wrap">
					{
						sliderData.map(item => {
							return (
								<React.Fragment>
									<div className="hd">{item.tag}</div>
									{item.render()}
								</React.Fragment>							
							);
						})
					}
					<DownLoad />
				</div>
			</div>
		</div>
	);
}

export default LayoutOne;