import React, { Fragment } from "react";
import "./index.less";
import { Link } from "dva/router";
 
class Mv extends React.Component {
	render() {
		const count = (nums)=> {
			if(nums>100000) {
				return parseInt(nums/10000)+1+"万次";
			}
			else return nums+"次";
		};
		const data = {
			"id": 10894053,
			"name": "我和我的祖国 青春版",
			"artistId": 11995107,
			"artistName": "周冬雨",
			"briefDesc": "",
			"desc": "由网易云音乐、中国青年报联合策划打造的《我和我的祖国》青春版MV正式上线发布。该作品由周冬雨、许魏洲、关晓彤、马天宇、鞠婧祎、魏大勋与各行业青年等共同演绎，让我们共同祝福伟大祖国繁荣昌盛，我爱我的国！",
			"cover": "http://p1.music.126.net/DC_p41E8oi-_YeCuy2Q1mQ==/109951164386271738.jpg",
			"coverId": 109951164386271740,
			"playCount": 638913,
			"subCount": 7993,
			"shareCount": 4516,
			"likeCount": 19299,
			"commentCount": 1601,
			"duration": 216000,
			"nType": 0,
			"publishTime": "2019-09-26",
			"brs": {
				"240": "http://vodkgeyttp8.vod.126.net/cloudmusic/99dd/core/3a7b/92c8d1236de0ef1346cafa1d26ad5dc1.mp4?wsSecret=bbec1f1f95807e2609517b1d6a6928d1&wsTime=1569760716",
				"480": "http://vodkgeyttp8.vod.126.net/cloudmusic/99dd/core/3a7b/b020cd275b6549f7524bb09e7b3b4809.mp4?wsSecret=1d9647abccf8aca1a1abaa6a3b8304ca&wsTime=1569760717",
				"720": "http://vodkgeyttp8.vod.126.net/cloudmusic/99dd/core/3a7b/6b7dc5801035199f7f127ab647b66f91.mp4?wsSecret=3c25c2a37c365c6bf2cb8a2872d1ffc6&wsTime=1569760717",
				"1080": "http://vodkgeyttp8.vod.126.net/cloudmusic/99dd/core/3a7b/99411847324d662e2a672601c2de2da4.mp4?wsSecret=1679113c0ead936203622fd135392e2e&wsTime=1569760717"
			},
			"artists": [
				{
					"id": 11995107,
					"name": "周冬雨"
				},
				{
					"id": 12000097,
					"name": "许魏洲"
				},
				{
					"id": 1150075,
					"name": "关晓彤"
				},
				{
					"id": 4485,
					"name": "马天宇"
				},
				{
					"id": 1032298,
					"name": "鞠婧祎"
				},
				{
					"id": 12144105,
					"name": "魏大勋"
				}
			],
			"isReward": false,
			"commentThreadId": "R_MV_5_10894053"
		};
		const recommenddata = [
			{
				"alg": "icf3",
				"type": 1,
				"title": "《我和我的祖国》首支预告片",
				"durationms": 122368,
				"creator": [
					{
						"userId": 427210706,
						"userName": "ago_everglow"
					}
				],
				"playTime": 233457,
				"coverUrl": "http://p1.music.126.net/pe6jeMrQb4FzmS-p6YkFvQ==/109951164355185710.jpg",
				"vid": "5386F53B1B0A178598A37B06D74C315C",
				"aliaName": null,
				"transName": null,
				"markTypes": [],
				"liveRoom": null
			},
			{
				"alg": "icf3",
				"type": 1,
				"title": "《我和我的祖国》预告片——回归",
				"durationms": 108373,
				"creator": [
					{
						"userId": 427210706,
						"userName": "ago_everglow"
					}
				],
				"playTime": 112240,
				"coverUrl": "http://p1.music.126.net/6vAV5mdy_Rm9QuzGFCExjw==/109951164321234933.jpg",
				"vid": "12B7C804A8BCC0D9ACF6B7F2EDB45177",
				"aliaName": null,
				"transName": null,
				"markTypes": [],
				"liveRoom": null
			},
			{
				"alg": "icf3",
				"type": 1,
				"title": "小提琴演奏《我和我的祖国》，共贺祖国成立70周年！",
				"durationms": 181504,
				"creator": [
					{
						"userId": 280927993,
						"userName": "m天使vs恶魔m"
					}
				],
				"playTime": 9605,
				"coverUrl": "http://p1.music.126.net/IyYQEuxclwL_vKN-7GJgMg==/109951164366307328.jpg",
				"vid": "D9B2868C463686EBF6E8A90B7366CD9F",
				"aliaName": null,
				"transName": null,
				"markTypes": [],
				"liveRoom": null
			},
			{
				"alg": "prom3_promByTitle-13720945-video",
				"type": 1,
				"title": "《我爱你中国》老师＆小朋友合唱版",
				"durationms": 279160,
				"creator": [
					{
						"userId": 1310261041,
						"userName": "影小咩"
					}
				],
				"playTime": 7165,
				"coverUrl": "http://p1.music.126.net/pB-_MymJlDlciKt-oPeoxQ==/109951164389406812.jpg",
				"vid": "A5E6CB31D284C8DF103163C2EBC0797A",
				"aliaName": null,
				"transName": null,
				"markTypes": [],
				"liveRoom": null
			},
			{
				"alg": "icf3",
				"type": 1,
				"title": "灯光秀燃爆烟台，万人齐唱《我和我的祖国》",
				"durationms": 73792,
				"creator": [
					{
						"userId": 67471698,
						"userName": "不搭音乐"
					}
				],
				"playTime": 177267,
				"coverUrl": "http://p1.music.126.net/hbxjbFb-Lq8qmvMrxLtO2A==/109951163880099070.jpg",
				"vid": "00BF4E91F7D2DFC4DB6076F890B62E72",
				"aliaName": null,
				"transName": null,
				"markTypes": [],
				"liveRoom": null
			}
		];
		return (
			<div className = "mv">
				<div className = "mv-contet" >
				</div>
				<div className = "mv-sidebar">
					<div className = "mv-detail" >
						<p>mv简介</p>
						<p>{ `发布时间： ${ data.publishTime }` }</p>
						<p>{ "播放次数:"}  {count(data.playCount)}</p>
						<p className = "mv-desc">{ data.desc }</p>
				    </div>
					<div className = "mv-recommend">
						{
							recommenddata.map((item, index)=>{
								return (
									  <Fragment> 
										  {/* <Link to = { `video?id=${ item.vid }` }>
											<img src = { `${ item.coverUrl }` } alt = { item.title }  />
											<span></span>
										</Link> */}
									</Fragment>
								  );
							 })
						}
					</div>
				</div>
			</div>
		);
	}
}
export default Mv;