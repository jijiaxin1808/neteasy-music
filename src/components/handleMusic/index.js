import React from "react";
import "./index.less";

class HandleMusic extends React.Component {

	render() {
		const { data } = this.props;
		return (
			<div className= "handle-music">
				<div style ={{position:"relative"}}>
					<img src = { data.coverImgUrl } alt= { data.coverImgUrl } />
					<span className="msk"></span>
				</div>
				<div className = "handle-music-btn" >
					<p>{ data.name }</p>
					<ul>
						<li className ="handle-music-btn-1" onClick = { this.props.onClick } >播放<span></span></li>
						<li className = "handle-music-btn-2" onClick = { this.props.onClick }><i>{`(${ data.subscribedCount })`}</i></li>
						<li className = "handle-music-btn-3" onClick = { this.props.onClick }>{`(${ data.shareCount })`}</li>
						<li className = "handle-music-btn-4"  onClick = { this.props.onClick }>下载</li>
						<li className = "handle-music-btn-5"  onClick = { this.props.onClick }>{`(${ data.commentCount })`}</li>
					</ul>
				</div>
			</div>
		);

	}
}
export default HandleMusic;
