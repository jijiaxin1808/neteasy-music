import React from "react";
import { connect } from "dva";
import classnames from "classnames";
import  Audio from "./audio";
import "./index.less";

class PlayBar extends React.Component {

	constructor(props) {
		super(props);
		this.lectureAudio = React.createRef();
	}
	render() {
		return (
		    <div className="g-btmbar">
				<div className="play-bar">
					<div className="bg" />
					<div className="hand" title="展开播放条" />
					<div className="up-btn">
						<div className="lock">
							<a className="lock-icon">lock</a>
						</div>
					</div>
					<div className="play-bar-wrap">
						<div className="btns">
							<a className="prev" title="上一首">上一首</a>
							<a className="ply" title="播放">播放/暂停</a>
							<a className="next" title="下一首">下一首</a>
						</div>
						<div className="play">
							<div className="head">
								<img src="http://p2.music.126.net/rtezgU6AxamJZKDAScz0dw==/109951164351789011.jpg?param=34y34" />
								<a className="mask">mask</a>
							</div>
							<div className="words">
								<a className="play-flag">DI DI DA</a>
								<a className="by"><span>王淘沙</span></a>
								<a className="icon-link">来自榜单</a>
							</div>
							<div className="p-bar">
								<div className="barbg">
									<div className="preload-bar" style={{width: "30%"}}/>
									<div className="process-bar" style={{width: "20%"}}>
										<span className="process-btn">
											<i />
										</span>
									</div>
								</div>
								<span className="time">
									<em>00.00 </em>
                                    / 03.18
								</span>
							</div>
						</div>
						<div className="oper">
							<a><i className="icon-collect" title="收藏">收藏</i></a>
							<a><i className="icon-forward" title="分享">分享</i></a>
						</div>
						<div className="controls">
							<a><i className="icon-vol" title="音量">音量</i></a>
							<a><i className="icon-mode" title="单曲循环">单曲循环</i></a>
							<a><i className="icon-add" title="播放列表">100</i></a>
						</div>
					</div>
				</div>
				<Audio ref={this.lectureAudio} />
			</div>
		);
	}
	componentDidMount() {
	    console.log(this.lectureAudio.current);
	}
	handleTimeUpdate() {

	}
}

export default connect()(PlayBar);