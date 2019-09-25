import React from "react";
import { connect } from "dva";
import classnames from "classnames";
import  Audio from "./audio";
import * as timeUtils from "../../utils/time";
import * as utils from "../../utils/utils";
import "./index.less";

class PlayBar extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			currentTime: 0,
			duration: 0,
			preloadTime: 0,
			startX: 0,
			startY: 0,
			currentVolume: 0,
			showVolumeBtn: false,
			mouseIsDown: false,
			volBtnIsDown: false,
			mouseIsLeaveLock: false,
			playState: "paused",
			playbarState: "lock",
		};
		this.lectureAudio = React.createRef();
		this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
		this.triggerPlayState = this.triggerPlayState.bind(this);
		this.handleCanPlay = this.handleCanPlay.bind(this);
		this.handlePlaybarClick = this.handlePlaybarClick.bind(this);
		this.handleProBtnMouseDown = this.handleProBtnMouseDown.bind(this);
		this.handleProBtnMouseMove = this.handleProBtnMouseMove.bind(this);
		this.handleProBtnMouseUp = this.handleProBtnMouseUp.bind(this);
		this.handleVolClick = this.handleVolClick.bind(this);
		this.handleVolDump = this.handleVolDump.bind(this);
		this.handleVolBtnDown = this.handleVolBtnDown.bind(this);
		this.handleVolMove = this.handleVolMove.bind(this);
		this.handleVolUp = this.handleVolUp.bind(this);
		this.handleLockClick = this.handleLockClick.bind(this);
	}
	render() {
		return (
		    <div className="g-btmbar">
				<div
					className={classnames({
						playBar: true,
						unlock: this.state.playbarState === "unlock",
					})}
				>
					<div className="bg" />
					<div className="hand" title="展开播放条" />
					<div className="up-btn">
						<div className="lock">
							<a
								className={classnames({
									lockIcon: this.state.playbarState === "lock",
									unlockIcon: this.state.playbarState === "unlock",
								})}
							   onClick={this.handleLockClick}
							>
								lock
							</a>
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
									onMouseLeave={this.handleProBtnMouseUp}
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
									<em>{timeUtils.unitTime(this.state.currentTime)}</em>
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
								<i
									className={classnames({
										iconVol: true,
										iconMute: this.state.currentVolume === 0,
									})}
									title={`音量${(Number(this.state.currentVolume).toFixed(1))}`}
									onClick={this.handleVolClick}
								>
									音量
								</i>
								<div className={classnames({
									volbg: true,
									showVolumeBtn: this.state.showVolumeBtn,
								})}>
									<div
										className="vol-bar-road"
										onMouseDown={this.handleVolDump}
										onMouseMove={this.handleVolMove}
										onMouseUp={this.handleVolUp}
										onMouseLeave={this.handleVolUp}
									>
										<div className="vol-bar" style={{height: `${utils.toPercent(this.state.currentVolume)}`}}>
											<span className="vol-btn" onMouseDown={this.handleVolBtnDown} />
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
		const audio = this.lectureAudio.current,
			  currentVolume = audio.volume;

		this.setState((state, props) => {
			return {
				duration: timeUtils.unitTime(audio.duration),
				currentVolume,
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
	handleVolDump(e) {
		e.preventDefault();
		let height = e.currentTarget.offsetHeight,
			y = e.currentTarget.getBoundingClientRect().bottom - e.clientY,
			audio = this.lectureAudio.current,
			currentVolume = y / height;
		if(currentVolume <=0) currentVolume = 0;
		if(currentVolume >=1) currentVolume = 1;
		this.setState({
			currentVolume,
		}, () => {
			audio.volume = currentVolume;
		});

	}
	handleVolClick(e) {
		e.preventDefault();
		this.setState({
			showVolumeBtn: !this.state.showVolumeBtn,
		});
	}
	handleVolBtnDown(e) {
		e.preventDefault();
		let startY = e.clientY;
		this.setState({
			startY,
			volBtnIsDown: true,
		});
	}
	handleVolMove(e) {
		e.preventDefault();
		if(this.state.volBtnIsDown) {
			let audio = this.lectureAudio.current,
				height = e.currentTarget.offsetHeight,
				y = e.currentTarget.getBoundingClientRect().bottom - e.clientY,
			    currentVolume = y / height;
			if(currentVolume <=0) currentVolume = 0;
			if(currentVolume >=1) currentVolume = 1;
			this.setState({
				currentVolume,
			}, () => {
				audio.volume = currentVolume;
			});
		}
	}
	handleVolUp(e) {
		e.preventDefault();
		this.setState({
			volBtnIsDown: false,
		});
	}
	handleLockClick(e) {
		e.preventDefault();
		this.setState((state) => {
			return {
				playbarState: state.playbarState === "lock" ? "unlock" : "lock",
			};
		});
	}
}

export default connect()(PlayBar);


