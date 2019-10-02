import React from "react";
import "./index.less";

class PlayQueue extends React.Component {
	constructor() {
		super();
		this.state = {
			isScroll:true 
		};
	}
	shouldComponentUpdate(nextProps, nextState) {
		if(nextProps.currentTime-this.props.currentTime >= 1) {
			return false;
		}
		else return true;
	}
	render() {
		
		const data =  "[00:00.000] 作曲 : 唐汉霄\n[00:00.697] 作词 : 唐汉霄\n[00:02.093]编曲：栾卓忻\n[00:07.410]\n[00:12.866]城市黎明的灯火\n[00:15.548]总有光环在陨落\n[00:18.181]模仿者一个又一个\n[00:22.406]\n[00:23.999]无人问津的角色\n[00:26.616]你选择去崇拜谁呢 怨恨谁呢\n[00:33.731]\n[00:35.267]假装热情的冷落\n[00:37.948]假装自由的枷锁\n[00:40.714]你最后成为了什么\n[00:45.483]\n[00:46.364]燃烧华丽的烟火\n[00:49.200]绽放一次就足够了 奢求什么\n[00:56.582]\n[00:59.331]无名之辈 我是谁\n[01:02.482]忘了谁 也无所谓\n[01:05.182]谁不是 拼了命走到生命的结尾\n[01:10.515]也许很累一身狼狈\n[01:13.417]也许卑微一生无为\n[01:16.131]也许永远成为不了 你的光辉\n[01:21.885]\n[01:22.216]无名之辈 我是谁\n[01:24.966]忘了谁 也无所谓\n[01:27.764]继续追 谁的光荣不是伴着眼泪\n[01:33.065]也许很累一身狼狈\n[01:35.848]也许卑微一生无为\n[01:38.948]谁生来不都是一样 尽管叫我无名之辈\n[01:49.799]\n[02:06.915]无名之辈 我是谁\n[02:10.065]忘了谁 也无所谓\n[02:12.682]谁不是 拼了命走到生命的结尾\n[02:18.281]也许很累一身狼狈\n[02:20.915]也许卑微一生无为\n[02:24.198]也许永远也成为不了谁\n[02:32.398]无名之辈 我是谁\n[02:35.482]忘了谁 也无所谓\n[02:38.198]继续追 谁的光荣不是伴着眼泪\n[02:43.666]也许很累一身狼狈\n[02:46.565]也许卑微一生无为\n[02:49.531]谁生来不都是一样 尽管叫我无名之辈\n[02:59.535]\n[03:00.520]无名之辈\n[03:04.318]尽管叫我无名之辈\n[03:11.334]\n[03:12.434]制作人：唐汉霄、栾卓忻\n[03:13.200]和声：唐汉霄\n[03:13.902]混音及母带：刘俊杰\n[03:14.634]人声录音：Toufu@唐汉霄工作室\n[03:15.268]音乐制作发行：智慧大狗\n[03:15.917]出品人：张葛\n[03:16.689]监制：崔恕、王明宇\n";
		const cr = data.split(/\[\d{2}:\d{2}.\d{3}\]/ig);
		let reg = /\[\d{2}:\d{2}.\d{3}\]/ig;
		const time =  data.match(reg);
		const time1 = time.map(( item )=>{
			const time = item.match(/\d{2}:\d{2}/);
			const numbertime = Number(time[0][4])+Number(time[0][3])*10+Number(time[0][1])*60+Number(time[0][0])*360;
			return numbertime;
		});
		const isShow = true;
		const { currentTime,isPlayqueueShow } = this.props;
		const length = time1.length;
		let nowP = 0;
		let scrollTop = 0;
		if(this.state.isScroll){
			for( let i=0;i<length;i++ ){
				if(currentTime <time1[i]) {
					nowP = i+1;
					scrollTop = 32*(this.state.nowP-5);
					console.log("当前为第",i,"句");
					break;
				}
			}
			this.lrc && this.lrc.scrollTo(0,scrollTop);
		}
		if(isShow) {
			return (		
            	<div className = { isPlayqueueShow?"playqueue":"playqueue-hide" } >

					<div className = "playqueue-playlist" >    
						<div className = "playqueue-playlist-header">
							<p>播放列表({0})</p>
							<div>
								<span><i className = "playqueue-iconadd"></i>收藏全部</span>
								<span><i className = "playqueue-icondel"></i>清除</span>
							</div>
						</div>
						<div className ="playqueue-playlist-content" >
							{
								cr.map(()=>{
									return (
										<div className = "playqueue-playlist-list">
											<div>
												<span className = "playqueue-playlist-playing"></span>
												<span className = "playqueue-playlist-songname">name</span>
											</div>
											<div className = "playqueue-playlist-list-right">
												<div className = "playqueue-playlist-icons" >
													<i className = "playqueue-playlist-icon1" ></i>
													<i className = "playqueue-playlist-icon2"></i>
													<i className = "playqueue-playlist-icon3"></i>
													<i className = "playqueue-playlist-icon4"></i>
												</div>
												<span className = "playqueue-playlist-singer">singer</span>
												<span className = "playqueue-playlist-sonngtime">time</span>
												<span className = "playqueue-playlist-">link</span>
											</div>
										</div>
									);
								})
							}
							
				
						</div>

					</div>
					<div className = "playqueue-lrc">
						<div className = "playqueue-lrc-header">
							<span>name</span>
							<span className = "playqueue-lrc-cancel">X</span>
						</div>
						<div className = "playqueue-lrc-content"  ref={div => this.lrc =div} onScroll = {(e)=>{ 
							this.setState({isScroll:false});
							
							 setTimeout(()=>{
								this.setState({isScroll:true});},10000); }}
						>
							{ 
								cr.map((item, index)=>{
									if( index+1 === this.nowP ){
										return (
											<p style = {{color:"red",transition:"all 0.7s linear;"}}>{item}</p>
										);
									}
									return (
									
										<p>{item}</p>
									);
							 })
							}
						</div>
					</div>
				</div>
			);
		}
		else return null;
	}
}
export default PlayQueue; 
