import React from "react";
import "./index.less";
import { NavLink } from "dva/router";

class DjradioItem extends React.Component {
	render() {
		const data = [
			{
				"mainSong": {
					"name": "手风琴进化史",
					"id": 1392077345,
					"position": 0,
					"alias": [],
					"status": 0,
					"fee": 0,
					"copyrightId": 0,
					"disc": "",
					"no": 0,
					"artists": [
						{
							"name": "孤山的六弦琴",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"ali, withRouter as": [],
							"tra, withRouter ns": "",
							"mus, withRouter icSize": 0
						},
					],
					"album": {
						"name": null,
						"id": 0,
						"type": null,
						"size": 0,
						"picId": 0,
						"blurPicUrl": null,
						"companyId": 0,
						"pic": 0,
						"picUrl": "http://p1.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg",
						"publishTime": 0,
						"description": "",
						"tags": "",
						"company": null,
						"briefDesc": "",
						"artist": {
							"name": "",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						},
						"songs": [],
						"alias": [],
						"status": 0,
						"copyrightId": 0,
						"commentThreadId": "R_AL_3_0",
						"artists": [
							{
								"name": "",
								"id": 0,
								"picId": 0,
								"img1v1Id": 0,
								"briefDesc": "",
								"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"albumSize": 0,
								"alias": [],
								"trans": "",
								"musicSize": 0
							}
						]
					},
					"starred": false,
					"popularity": 0,
					"score": 0,
					"starredNum": 0,
					"duration": 806008,
					"playedNum": 0,
					"dayPlays": 0,
					"hearTime": 0,
					"ringtone": null,
					"crbt": null,
					"audition": null,
					"copyFrom": "",
					"commentThreadId": "R_SO_4_1392077345",
					"rtUrl": null,
					"ftype": 0,
					"rtUrls": [],
					"hMusic": null,
					"mMusic": null,
					"lMusic": {
						"name": null,
						"id": 3982453346,
						"size": 12896156,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 128000,
						"playTime": 806008,
						"volumeDelta": 0
					},
					"bMusic": {
						"name": null,
						"id": 3982453346,
						"size": 12896156,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 128000,
						"playTime": 806008,
						"volumeDelta": 0
					},
					"rtype": 0,
					"rurl": null,
					"mvid": 0,
					"mp3Url": null
				},
				"songs": null,
				"dj": {
					"defaultAvatar": false,
					"province": 370000,
					"authStatus": 0,
					"followed": false,
					"avatarUrl": "http://p1.music.126.net/dlUSLI_rp_qS10cnRToUCw==/109951163653184402.jpg",
					"accountStatus": 0,
					"gender": 1,
					"city": 370100,
					"birthday": 358893373974,
					"userId": 425123053,
					"userType": 0,
					"nickname": "孤山的六弦琴",
					"signature": "我是孤山，艺术专栏作者。我也是一个带着吉他在海外流浪的街头艺人。\n这是我在网易云音乐开设的音频节目《艺术世界漫游指南》。\n在节目里，我会讲有趣的故事，我会聊我的感受，但我不解读音乐，因为，音乐是自己诠释自己的语言，当你听到它时，你自然会得到你想要的。",
					"description": "",
					"detailDescription": "",
					"avatarImgId": 109951163653184400,
					"backgroundImgId": 109951163947940110,
					"backgroundUrl": "http://p1.music.126.net/qgTUZHvNjz7DP0s1cyoSdA==/109951163947940116.jpg",
					"authority": 0,
					"mutual": false,
					"expertTags": null,
					"experts": null,
					"djStatus": 10,
					"vipType": 0,
					"remarkName": null,
					"avatarImgIdStr": "109951163653184402",
					"backgroundImgIdStr": "109951163947940116",
					"avatarImgId_str": "109951163653184402",
					"brand": "艺术世界漫游指南"
				},
				"blurCoverUrl": "http://music.163.com/api/dj/img/blur/109951164375351689",
				"radio": {
					"dj": null,
					"category": "人文历史",
					"buyed": false,
					"price": 0,
					"originalPrice": 0,
					"discountPrice": null,
					"purchaseCount": 0,
					"lastProgramName": null,
					"videos": null,
					"finished": false,
					"underShelf": false,
					"liveInfo": null,
					"createTime": 1542841372837,
					"lastProgramId": 2063241623,
					"feeScope": 0,
					"picUrl": "https://p1.music.126.net/5AD754Fe7mRSFOfhWrDzQQ==/109951163681276369.jpg",
					"programCount": 54,
					"subCount": 3061,
					"picId": 109951163681276370,
					"categoryId": 11,
					"lastPro, withRouter gramCreateTime": 1568952089129,
					"radioFeeType": 0,
					"desc": "我是孤山，一个带着吉他在海外流浪的街头艺人。\n我希望，像吟游诗人那样，用音乐讲述古老的故事。",
					"name": "艺术世界漫游指南",
					"id": 792143385,
					"subed": false
				},
				"duration": 806008,
				"buyed": false,
				"programDesc": null,
				"h5Links": null,
				"canReward": true,
				"auditStatus": 0,
				"videoInfo": null,
				"score": 0,
				"liveInfo": null,
				"alg": "featured",
				"commentThreadId": "A_DJ_1_2063241623",
				"smallLanguageAuditStatus": 0,
				"serialNum": 54,
				"coverUrl": "https://p1.music.126.net/yiGQdQsnhC8lt7pf9QnvSg==/109951164375351689.jpg",
				"createTime": 1568952089129,
				"reward": false,
				"listenerCount": 44,
				"subscribedCount": 0,
				"channels": [
					"人文历史"
				],
				"feeScope": 0,
				"pubStatus": 1,
				"bdAuditStatus": 2,
				"trackCount": 0,
				"mainTrackId": 1392077345,
				"programFeeType": 0,
				"titbits": null,
				"titbitImages": null,
				"isPublish": true,
				"description": "手风琴是如何被发明出来的，手风琴有哪些分类，本期节目会为你详细解答。",
				"name": "手风琴进化史",
				"id": 2063241623,
				"reason": "做一个带着吉他流浪的吟游诗人",
				"subscribed": false,
				"shareCount": 1,
				"likedCount": 2,
				"commentCount": 0
			},
			{
				"mainSong": {
					"name": "「日本」海看久了想见人，人见多了想看海",
					"id": 1391434224,
					"position": 0,
					"alias": [],
					"status": 0,
					"fee": 0,
					"copyrightId": 0,
					"disc": "",
					"no": 0,
					"artists": [
						{
							"name": "黑方HaveFun电台",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						}
					],
					"album": {
						"name": null,
						"id": 0,
						"type": null,
						"size": 0,
						"picId": 0,
						"blurPicUrl": null,
						"companyId": 0,
						"pic": 0,
						"picUrl": "http://p1.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg",
						"publishTime": 0,
						"description": "",
						"tags": "",
						"company": null,
						"briefDesc": "",
						"artist": {
							"name": "",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						},
						"songs": [],
						"alias": [],
						"status": 0,
						"copyrightId": 0,
						"commentThreadId": "R_AL_3_0",
						"artists": [
							{
								"name": "",
								"id": 0,
								"picId": 0,
								"img1v1Id": 0,
								"briefDesc": "",
								"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"albumSize": 0,
								"alias": [],
								"trans": "",
								"musicSize": 0
							}
						]
					},
					"starred": false,
					"popularity": 20,
					"score": 20,
					"starredNum": 0,
					"duration": 1009608,
					"playedNum": 0,
					"dayPlays": 0,
					"hearTime": 0,
					"ringtone": null,
					"crbt": null,
					"audition": null,
					"copyFrom": "",
					"commentThreadId": "R_SO_4_1391434224",
					"rtUrl": null,
					"ftype": 0,
					"rtUrls": [],
					"hMusic": null,
					"mMusic": {
						"name": null,
						"id": 3970660228,
						"size": 24242310,
						"extension": "mp3",
						"sr": 48000,
						"dfsId": 0,
						"bitrate": 192000,
						"playTime": 1009608,
						"volumeDelta": 0
					},
					"lMusic": {
						"name": null,
						"id": 3970660228,
						"size": 24242310,
						"extension": "mp3",
						"sr": 48000,
						"dfsId": 0,
						"bitrate": 192000,
						"playTime": 1009608,
						"volumeDelta": 0
					},
					"bMusic": {
						"name": null,
						"id": 3970660228,
						"size": 24242310,
						"extension": "mp3",
						"sr": 48000,
						"dfsId": 0,
						"bitrate": 192000,
						"playTime": 1009608,
						"volumeDelta": 0
					},
					"rtype": 0,
					"rurl": null,
					"mvid": 0,
					"mp3Url": null
				},
				"songs": null,
				"dj": {
					"defaultAvatar": false,
					"province": 330000,
					"authStatus": 0,
					"followed": false,
					"avatarUrl": "http://p1.music.126.net/M80FOIzMjT-uE9hxM_BKrg==/18799449813684660.jpg",
					"accountStatus": 0,
					"gender": 0,
					"city": 330100,
					"birthday": 1499356800000,
					"userId": 539006506,
					"userType": 0,
					"nickname": "黑方HaveFun电台",
					"signature": "这是一个像喝了一瓶黑方之后，时刻Have Fun的旅游电台。分享最Local的玩法，带你实现最自由的旅行。",
					"description": "",
					"detailDescription": "",
					"avatarImgId": 18799449813684660,
					"backgroundImgId": 109951162868128400,
					"backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
					"authority": 0,
					"mutual": false,
					"expertTags": null,
					"experts": null,
					"djStatus": 10,
					"vipType": 0,
					"remarkName": null,
					"avatarImgIdStr": "18799449813684660",
					"backgroundImgIdStr": "109951162868128395",
					"avatarImgId_str": "18799449813684660",
					"brand": "黑方HaveFun电台"
				},
				"blurCoverUrl": "http://music.163.com/api/dj/img/blur/109951164369950648",
				"radio": {
					"dj": null,
					"category": "旅途|城市",
					"buyed": false,
					"price": 0,
					"originalPrice": 0,
					"discountPrice": null,
					"purchaseCount": 0,
					"lastProgramName": null,
					"videos": null,
					"finished": false,
					"underShelf": false,
					"liveInfo": null,
					"createTime": 1499759426596,
					"lastProgramId": 2063215268,
					"feeScope": 0,
					"picUrl": "https://p1.music.126.net/M80FOIzMjT-uE9hxM_BKrg==/18799449813684660.jpg",
					"programCount": 182,
					"subCount": 1850,
					"picId": 18799449813684660,
					"categoryId": 12,
					"lastProgramCreateTime": 1568844000000,
					"radioFeeType": 0,
					"desc": "这是一个像喝了一瓶黑方之后，时刻Have Fun的旅游电台。分享最Local的玩法，带你实现最自由的旅行。\n联系我们：havefunradio@sina.com",
					"name": "黑方HaveFun电台",
					"id": 350042221,
					"subed": false
				},
				"duration": 1009608,
				"buyed": false,
				"programDesc": null,
				"h5Links": null,
				"canReward": false,
				"auditStatus": 0,
				"videoInfo": null,
				"score": 0,
				"liveInfo": null,
				"alg": "featured",
				"commentThreadId": "A_DJ_1_2063215268",
				"smallLanguageAuditStatus": 0,
				"serialNum": 182,
				"coverUrl": "https://p1.music.126.net/62wCmjZcImi151_ZvtmD8A==/109951164369950648.jpg",
				"createTime": 1568844000000,
				"reward": false,
				"listenerCount": 2430,
				"subscribedCount": 0,
				"channels": [
					"乐在旅行"
				],
				"feeScope": 0,
				"pubStatus": 1,
				"bdAuditStatus": 2,
				"trackCount": 0,
				"mainTrackId": 1391434224,
				"programFeeType": 0,
				"titbits": null,
				"titbitImages": null,
				"isPublish": true,
				"description": "海看久了想见人，人见多了想看海，孤独万岁！\n\n这是一个像喝了一瓶黑方之后，时刻Have Fun的旅游电台。分享最Local的玩法，带你实现最自由的旅行。\n\n【黑方旅游电台由力度传媒独家出品】\n公众号：黑方旅游电台\n联系我们：havefunradio@sina.com",
				"name": "「日本」海看久了想见人，人见多了想看海",
				"id": 2063215268,
				"reason": "分享最Local的玩法",
				"subscribed": false,
				"shareCount": 1,
				"likedCount": 11,
				"commentCount": 6
			},
			{
				"mainSong": {
					"name": "野 狼 迪 斯 科",
					"id": 1389732663,
					"position": 0,
					"alias": [],
					"status": 0,
					"fee": 0,
					"copyrightId": 0,
					"disc": "",
					"no": 0,
					"artists": [
						{
							"name": "郑杰伦JZ",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						}
					],
					"album": {
						"name": null,
						"id": 0,
						"type": null,
						"size": 0,
						"picId": 0,
						"blurPicUrl": null,
						"companyId": 0,
						"pic": 0,
						"picUrl": "http://p1.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg",
						"publishTime": 0,
						"description": "",
						"tags": "",
						"company": null,
						"briefDesc": "",
						"artist": {
							"name": "",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						},
						"songs": [],
						"alias": [],
						"status": 0,
						"copyrightId": 0,
						"commentThreadId": "R_AL_3_0",
						"artists": [
							{
								"name": "",
								"id": 0,
								"picId": 0,
								"img1v1Id": 0,
								"briefDesc": "",
								"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"albumSize": 0,
								"alias": [],
								"trans": "",
								"musicSize": 0
							}
						]
					},
					"starred": false,
					"popularity": 25,
					"score": 25,
					"starredNum": 0,
					"duration": 35343,
					"playedNum": 0,
					"dayPlays": 0,
					"hearTime": 0,
					"ringtone": null,
					"crbt": null,
					"audition": null,
					"copyFrom": "",
					"commentThreadId": "R_SO_4_1389732663",
					"rtUrl": null,
					"ftype": 0,
					"rtUrls": [],
					"hMusic": {
						"name": null,
						"id": 3941203663,
						"size": 1414791,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 320000,
						"playTime": 35343,
						"volumeDelta": 0
					},
					"mMusic": null,
					"lMusic": {
						"name": null,
						"id": 3941203663,
						"size": 1414791,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 320000,
						"playTime": 35343,
						"volumeDelta": 0
					},
					"bMusic": {
						"name": null,
						"id": 3941203663,
						"size": 1414791,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 320000,
						"playTime": 35343,
						"volumeDelta": 0
					},
					"rtype": 0,
					"rurl": null,
					"mvid": 0,
					"mp3Url": null
				},
				"songs": null,
				"dj": {
					"defaultAvatar": false,
					"province": 110000,
					"authStatus": 1,
					"followed": false,
					"avatarUrl": "http://p1.music.126.net/2gpJnYg6ZoGJqNvySlDZOQ==/109951163140073998.jpg",
					"accountStatus": 0,
					"gender": 1,
					"city": 110101,
					"birthday": 713462400000,
					"userId": 285262571,
					"userType": 4,
					"nickname": "郑杰伦JZ",
					"signature": "微博：郑杰伦JZ",
					"description": "",
					"detailDescription": "",
					"avatarImgId": 109951163140074000,
					"backgroundImgId": 109951162868128400,
					"backgroundUrl": "http://p1.music.126.net/2zSNIqTcpHL2jIvU6hG0EA==/109951162868128395.jpg",
					"authority": 0,
					"mutual": false,
					"expertTags": null,
					"experts": {
						"1": "音乐原创视频达人"
					},
					"djStatus": 10,
					"vipType": 11,
					"remarkName": null,
					"avatarImgIdStr": "109951163140073998",
					"backgroundImgIdStr": "109951162868128395",
					"avatarImgId_str": "109951163140073998",
					"brand": "欢 迎 来 到 郑 杰 伦 的 舞 厅"
				},
				"blurCoverUrl": "http://music.163.com/api/dj/img/blur/109951164294987862",
				"radio": {
					"dj": null,
					"category": "创作|翻唱",
					"buyed": false,
					"price": 0,
					"originalPrice": 0,
					"discountPrice": null,
					"purchaseCount": 0,
					"lastProgramName": null,
					"videos": null,
					"finished": false,
					"underShelf": false,
					"liveInfo": null,
					"createTime": 1565850323864,
					"lastProgramId": 2063236809,
					"feeScope": 0,
					"picUrl": "https://p1.music.126.net/Nycf2H4CnBFBMzilf0Dm5A==/109951164294987862.jpg",
					"programCount": 6,
					"subCount": 719,
					"picId": 109951164294987860,
					"categoryId": 2001,
					"lastProgramCreateTime": 1568961669888,
					"radioFeeType": 0,
					"desc": "与众不同的挖掘机",
					"name": "欢 迎 来 到 郑 杰 伦 的 舞 厅",
					"id": 793668623,
					"subed": false
				},
				"duration": 35343,
				"buyed": false,
				"programDesc": null,
				"h5Links": null,
				"canReward": false,
				"auditStatus": 0,
				"videoInfo": null,
				"score": 0,
				"liveInfo": null,
				"alg": "featured",
				"commentThreadId": "A_DJ_1_2063075870",
				"smallLanguageAuditStatus": 0,
				"serialNum": 4,
				"coverUrl": "https://p1.music.126.net/Nycf2H4CnBFBMzilf0Dm5A==/109951164294987862.jpg",
				"createTime": 1567953067534,
				"reward": false,
				"listenerCount": 91260,
				"subscribedCount": 0,
				"channels": [],
				"feeScope": 0,
				"pubStatus": 1,
				"bdAuditStatus": 2,
				"trackCount": 0,
				"mainTrackId": 1389732663,
				"programFeeType": 0,
				"titbits": null,
				"titbitImages": null,
				"isPublish": true,
				"description": "欢 迎 光 临",
				"name": "野 狼 迪 斯 科",
				"id": 2063075870,
				"reason": "与众不同的挖掘机",
				"subscribed": false,
				"shareCount": 20,
				"likedCount": 468,
				"commentCount": 269
			},
			{
				"mainSong": {
					"name": "芒狼disco(芒种x野狼disco)",
					"id": 1391190312,
					"position": 0,
					"alias": [],
					"status": 0,
					"fee": 0,
					"copyrightId": 0,
					"disc": "",
					"no": 0,
					"artists": [
						{
							"name": "郭皓月Howard",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						}
					],
					"album": {
						"name": null,
						"id": 0,
						"type": null,
						"size": 0,
						"picId": 0,
						"blurPicUrl": null,
						"companyId": 0,
						"pic": 0,
						"picUrl": "http://p1.music.126.net/UeTuwE7pvjBpypWLudqukA==/3132508627578625.jpg",
						"publishTime": 0,
						"description": "",
						"tags": "",
						"company": null,
						"briefDesc": "",
						"artist": {
							"name": "",
							"id": 0,
							"picId": 0,
							"img1v1Id": 0,
							"briefDesc": "",
							"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
							"albumSize": 0,
							"alias": [],
							"trans": "",
							"musicSize": 0
						},
						"songs": [],
						"alias": [],
						"status": 0,
						"copyrightId": 0,
						"commentThreadId": "R_AL_3_0",
						"artists": [
							{
								"name": "",
								"id": 0,
								"picId": 0,
								"img1v1Id": 0,
								"briefDesc": "",
								"picUrl": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"img1v1Url": "http://p1.music.126.net/6y-UleORITEDbvrOLV0Q8A==/5639395138885805.jpg",
								"albumSize": 0,
								"alias": [],
								"trans": "",
								"musicSize": 0
							}
						]
					},
					"starred": false,
					"popularity": 20,
					"score": 20,
					"starredNum": 0,
					"duration": 175255,
					"playedNum": 0,
					"dayPlays": 0,
					"hearTime": 0,
					"ringtone": null,
					"crbt": null,
					"audition": null,
					"copyFrom": "",
					"commentThreadId": "R_SO_4_1391190312",
					"rtUrl": null,
					"ftype": 0,
					"rtUrls": [],
					"hMusic": {
						"name": null,
						"id": 3965988312,
						"size": 7014317,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 320000,
						"playTime": 175255,
						"volumeDelta": 0
					},
					"mMusic": null,
					"lMusic": {
						"name": null,
						"id": 3965988312,
						"size": 7014317,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 320000,
						"playTime": 175255,
						"volumeDelta": 0
					},
					"bMusic": {
						"name": null,
						"id": 3965988312,
						"size": 7014317,
						"extension": "mp3",
						"sr": 44100,
						"dfsId": 0,
						"bitrate": 320000,
						"playTime": 175255,
						"volumeDelta": 0
					},
					"rtype": 0,
					"rurl": null,
					"mvid": 0,
					"mp3Url": null
				},
				"songs": null,
				"dj": {
					"defaultAvatar": false,
					"province": 1000000,
					"authStatus": 1,
					"followed": false,
					"avatarUrl": "http://p1.music.126.net/hNPzjJNi969LVdRhTDItEw==/109951164333300973.jpg",
					"accountStatus": 0,
					"gender": 1,
					"city": 1004400,
					"birthday": 650264400000,
					"userId": 16368516,
					"userType": 4,
					"nickname": "郭皓月Howard",
					"signature": "微博/臉書/美拍/Youtube/网易云：郭皓月HowardGuoQQ群：660694937 加群可下载我的所有歌哟！ 商务/合作邀约：guohaoyue1990@gmail.com",
					"description": "",
					"detailDescription": "",
					"avatarImgId": 109951164333300980,
					"backgroundImgId": 109951164333316000,
					"backgroundUrl": "http://p1.music.126.net/J9N8r_v-sQqH522wxF-NIw==/109951164333316002.jpg",
					"authority": 0,
					"mutual": false,
					"expertTags": null,
					"experts": {
						"1": "音乐原创视频达人"
					},
					"djStatus": 10,
					"vipType": 11,
					"remarkName": null,
					"avatarImgIdStr": "109951164333300973",
					"backgroundImgIdStr": "109951164333316002",
					"avatarImgId_str": "109951164333300973",
					"brand": "郭皓月Howard"
				},
				"blurCoverUrl": "http://music.163.com/api/dj/img/blur/109951164367714029",
				"radio": {
					"dj": null,
					"category": "创作|翻唱",
					"buyed": false,
					"price": 0,
					"originalPrice": 0,
					"discountPrice": null,
					"purchaseCount": 0,
					"lastProgramName": null,
					"videos": null,
					"finished": false,
					"underShelf": false,
					"liveInfo": null,
					"createTime": 1542949861709,
					"lastProgramId": 2063199484,
					"feeScope": 0,
					"picUrl": "https://p1.music.126.net/5FIxtexamiOvTt1Kd4IOUQ==/109951163683327841.jpg",
					"programCount": 30,
					"subCount": 902,
					"picId": 109951163683327840,
					"categoryId": 2001,
					"lastProgramCreateTime": 1568593570998,
					"radioFeeType": 0,
					"desc": "给我一首歌的时间！",
					"name": "郭皓月Howard",
					"id": 792164386,
					"subed": false
				},
				"duration": 175255,
				"buyed": false,
				"programDesc": null,
				"h5Links": null,
				"canReward": false,
				"auditStatus": 0,
				"videoInfo": null,
				"score": 0,
				"liveInfo": null,
				"alg": "featured",
				"commentThreadId": "A_DJ_1_2063199484",
				"smallLanguageAuditStatus": 0,
				"serialNum": 30,
				"coverUrl": "https://p1.music.126.net/NTqntr-U9FS_h5NjgpJl-Q==/109951164367714029.jpg",
				"createTime": 1568593570998,
				"reward": false,
				"listenerCount": 5135,
				"subscribedCount": 0,
				"channels": [],
				"feeScope": 0,
				"pubStatus": 1,
				"bdAuditStatus": 2,
				"trackCount": 1,
				"mainTrackId": 1391190312,
				"programFeeType": 0,
				"titbits": null,
				"titbitImages": null,
				"isPublish": true,
				"description": "芒狼disco(芒种x野狼disco)",
				"name": "芒狼disco(芒种x野狼disco)",
				"id": 2063199484,
				"reason": "给他一首歌的时间，让你爱上",
				"subscribed": false,
				"shareCount": 0,
				"likedCount": 25,
				"commentCount": 7
			}];
		return (
			<div className = "djradio-item">
				<div className = "djradio-item-header">
					<NavLink to = "" className = "djradio-item-header-1">{ "balabala ~ 电台" }</NavLink>
					<NavLink to = "" >更多></NavLink>
				</div>
				<ul className = "djradio-item-ul">
					{
						data.map( (item,index)=> {
							return (
								<li className = "djradio-item-li" >
									<img src = {`${item.coverUrl}?120y120`}  alt = { item.mainSong.album.picUrl } width ="120px" height = "120px"/>
									<div>
										<p className = "djradio-item-li-p1">{ item.mainSong.name }  </p>
										<p className = "djradio-item-li-p2">{ item.reason }</p>
										
									</div>
								</li>
							);

						} )
					}
				</ul>
			</div>
		);
	}


}
export default DjradioItem;