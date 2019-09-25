import React from "react";
import { connect } from "dva";
import classnames from "classnames";
import  Audio from "./audio";
import * as timeUtils from "../../utils/time";
import "./index.less";

class PlayBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentTime: 0,
			duration: 0,
			preloadTime: 0,
			startX: 0,
			mouseIsDown: false,
			playState: "paused",
		};
		this.lectureAudio = React.createRef();
		this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
		this.triggerPlayState = this.triggerPlayState.bind(this);
		this.handleCanPlay = this.handleCanPlay.bind(this);
		this.handlePlaybarClick = this.handlePlaybarClick.bind(this);
		this.handleProBtnMouseDown = this.handleProBtnMouseDown.bind(this);
		this.handleProBtnMouseMove = this.handleProBtnMouseMove.bind(this);
		this.handleProBtnMouseUp = this.handleProBtnMouseUp.bind(this);
		this.hanldePlaybarLeave = this.hanldePlaybarLeave.bind(this);
		this.handleVolDrump = this.handleVolDrump.bind(this);
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
							<a
								className={classnames({
									ply: this.state.playState === "paused",
									paused: this.state.playState !== "paused",
								})}
								title="播放"
								onClick={this.triggerPlayState}
							>
								播放/暂停
							</a>
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
								<div
									className="barbg"
									 onMouseDown={this.handlePlaybarClick}
									onMouseMove={this.handleProBtnMouseMove}
									onMouseUp={this.handleProBtnMouseUp}
									onMouseLeave={this.hanldePlaybarLeave}
								>
									<div
										className="preload-bar"
										style={{width: "0%"}}
										ref={(div) => this.preload = div}
									/>
									<div
										className="process-bar"
										 style={{width: "0%"}}
										ref={(div) => this.process = div}
									>
										<span
											className="process-btn"
											onMouseDown={this.handleProBtnMouseDown}
										>
											<i />
										</span>
									</div>
								</div>
								<span className="time">
									<em>{timeUtils.unitTime(this.state.currentTime)} </em>
									/ {this.state.duration}
								</span>
							</div>
						</div>
						<div className="oper">
							<a><i className="icon-collect" title="收藏">收藏</i></a>
							<a><i className="icon-forward" title="分享">分享</i></a>
						</div>
						<div className="controls">
							<a className="vol">
								<i className="icon-vol" title="音量" onClick={this.handleVolClick}>
								音量
								</i>
								<div className="volbg">
									<div className="vol-bar-road" onMouseDown={this.handleVolDrump}>
										<div className="vol-bar" style={{height: "20%"}}>
											<span className="vol-btn">

											</span>
										</div>
									</div>
								</div>
							</a>
							<a><i className="icon-mode" title="单曲循环">单曲循环</i></a>
							<a><i className="icon-add" title="播放列表">100</i></a>
						</div>
					</div>
				</div>
				<Audio
					ref={this.lectureAudio}
					handleCanPlay={this.handleCanPlay}
					handleTimeUpdate={this.handleTimeUpdate}
				/>
			</div>
		);
	}
	componentDidMount() {

	}
	handleTimeUpdate() {
		let audio = this.lectureAudio.current,
			currentTime = audio.currentTime,
			duration = 	audio.duration,
			preloadTime = audio.buffered.end(0);
			/*获取已缓冲的结束位置*/
		if(audio.paused) {
			this.setState({
				playState: "paused",
			});
		}
		this.setState({
			currentTime,
			preloadTime,
		}, () => {
			this.process.style.width = `${(currentTime / duration) * 100}%`;
			this.preload.style.width = `${(preloadTime / duration) * 100}%`;
		});
	}
	triggerPlayState() {
		const audio = this.lectureAudio.current;
		if(!audio.paused) {
			audio.pause();
			this.setState({
				playState: "paused",
			});
		} else {
			const playPro = audio.play();
			playPro
				.then(() => {
					this.setState({
						playState: "play",
					});
				}).catch(() => {
					audio.pause();
				});
		}
	}
	handleCanPlay() {
		const audio = this.lectureAudio.current;
		this.setState((state, props) => {
			return {
				duration: timeUtils.unitTime(audio.duration),
			};
		});
	}
	handlePlaybarClick(e) {
		/*注意,这里不能用e.target来获取offsetWidth，也不能由e.target来获取getBoundingClientRect().left*/
		e.preventDefault();
		let x = e.clientX - e.currentTarget.getBoundingClientRect().left,
			/*获取鼠标离playbar左边框的距离*/
			width = e.currentTarget.offsetWidth,
			audio = this.lectureAudio.current,
			currentTime = (x / width) * audio.duration;
		audio.currentTime = currentTime;
		this.setState({
			currentTime,
		}, () => {
			audio.currentTime = currentTime;
			(this.state.playState === "play") && audio.play();
		});
	}
	handleProBtnMouseDown(e) {
		/*获取鼠标按下时btn到窗口的距离*/
		e.preventDefault();
		let startX = e.currentTarget.getBoundingClientRect().left;
		this.setState({
			startX,
			mouseIsDown: true,
		});
	}
	handleProBtnMouseMove(e) {
		e.preventDefault();
		/*获取鼠标位置*/
		if(this.state.mouseIsDown) {
			let x = e.clientX - e.currentTarget.getBoundingClientRect().left,
				audio = this.lectureAudio.current,
				width = e.currentTarget.offsetWidth,
				currentTime = (x / width) * audio.duration;
			audio.currentTime = currentTime;
			this.setState({
				currentTime,
			}, () => {
				audio.currentTime = currentTime;
				(this.state.playState === "play") && audio.play();
			});

		}
	}
	handleProBtnMouseUp(e) {
		e.preventDefault();
		this.setState({
			mouseIsDown: false,
		});
	}
	hanldePlaybarLeave(e) {
		e.preventDefault();
		this.setState({
			mouseIsDown: false,
		});
	}
	handleVolDrump() {

	}
}

export default connect()(PlayBar);


