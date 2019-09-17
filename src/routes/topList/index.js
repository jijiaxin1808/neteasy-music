import React from "react";
import "./index.less";
import TopListBar from "../../components/topListBar";
import TopListItem from "../../components/topListItem";


class TopList extends React.Component {

	render() {
		const data =[
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每天更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568592867901,
				"subscribedCount": 2306530,
				"cloudTrackCount": 0,
				"createTime": 1404115136883,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568592868027,
				"coverImgId": 18696095720518496,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_19723756",
				"privacy": 0,
				"trackUpdateTime": 1568625299994,
				"playCount": 2342500608,
				"ordered": true,
				"tags": [],
				"description": "云音乐中每天热度上升最快的100首单曲，每日更新。",
				"status": 0,
				"name": "云音乐飙升榜",
				"id": 19723756,
				"coverImgId_str": "18696095720518497",
				"ToplistType": "S"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每天更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568592926601,
				"subscribedCount": 1702497,
				"cloudTrackCount": 0,
				"createTime": 1378721398225,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568592926697,
				"coverImgId": 18713687906568050,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_3779629",
				"privacy": 0,
				"trackUpdateTime": 1568618126912,
				"playCount": 1353012480,
				"ordered": true,
				"tags": [],
				"description": "云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。",
				"status": 0,
				"name": "云音乐新歌榜",
				"id": 3779629,
				"coverImgId_str": "18713687906568048",
				"ToplistType": "N"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568260105277,
				"subscribedCount": 500083,
				"cloudTrackCount": 0,
				"createTime": 1374732325894,
				"highQuality": false,
				"userId": 201586,
				"updateTime": 1568260105326,
				"coverImgId": 18740076185638788,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_2884035",
				"privacy": 0,
				"trackUpdateTime": 1568558907775,
				"playCount": 328231072,
				"ordered": true,
				"tags": [],
				"description": "云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。申请网易音乐人：http://music.163.com/nmusician/",
				"status": 0,
				"name": "网易原创歌曲榜",
				"id": 2884035,
				"coverImgId_str": "18740076185638788",
				"ToplistType": "O"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568249384009,
				"subscribedCount": 6653995,
				"cloudTrackCount": 0,
				"createTime": 1378721406014,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568249386766,
				"coverImgId": 18708190348409092,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg",
				"trackCount": 200,
				"commentThreadId": "A_PL_0_3778678",
				"privacy": 0,
				"trackUpdateTime": 1568558989744,
				"playCount": 4710463488,
				"ordered": true,
				"tags": [],
				"description": "云音乐热歌榜：云音乐用户一周内收听所有线上歌曲 官方TOP排行榜，每周四更新。",
				"status": 0,
				"name": "云音乐热歌榜",
				"id": 3778678,
				"coverImgId_str": "18708190348409091",
				"ToplistType": "H"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周五更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568337659156,
				"subscribedCount": 380415,
				"cloudTrackCount": 0,
				"createTime": 1510290389440,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568337659242,
				"coverImgId": 109951164353220910,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/y8zyTt4HwXbJqB31aQKz1A==/109951164353220919.jpg",
				"trackCount": 50,
				"commentThreadId": "A_PL_0_991319590",
				"privacy": 0,
				"trackUpdateTime": 1568538629739,
				"playCount": 145989024,
				"ordered": true,
				"tags": [
					"华语",
					"说唱"
				],
				"description": "云音乐原创说唱音乐人作品官方榜单，每周五更新。以云音乐用户一周播放热度为主，收录3个月内发行的原创说唱作品，按照综合数据排名取前50名。申请网易音乐人：http://music.163.com/nmusician",
				"status": 0,
				"name": "云音乐说唱榜",
				"id": 991319590,
				"coverImgId_str": "109951164353220919"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568255487824,
				"subscribedCount": 267611,
				"cloudTrackCount": 0,
				"createTime": 1430968920537,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568255488080,
				"coverImgId": 18681802069355170,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/BzSxoj6O1LQPlFceDn-LKw==/18681802069355169.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_71384707",
				"privacy": 0,
				"trackUpdateTime": 1568278391285,
				"playCount": 34746580,
				"ordered": true,
				"tags": [
					"古典"
				],
				"description": "云音乐用户一周内收听所有古典音乐官方TOP排行榜，每周四更新。",
				"status": 0,
				"name": "云音乐古典音乐榜",
				"id": 71384707,
				"coverImgId_str": "18681802069355169"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周五更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568343745423,
				"subscribedCount": 720047,
				"cloudTrackCount": 0,
				"createTime": 1510825632233,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568343745499,
				"coverImgId": 18822539557941308,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/5tgOCD4jiPKBGt7znJl-2g==/18822539557941307.jpg",
				"trackCount": 50,
				"commentThreadId": "A_PL_0_1978921795",
				"privacy": 0,
				"trackUpdateTime": 1568354606283,
				"playCount": 130000368,
				"ordered": true,
				"tags": [
					"电子"
				],
				"description": "云音乐用户一周内收听电子音乐官方TOP排行榜，每周五更新",
				"status": 0,
				"name": "云音乐电音榜",
				"id": 1978921795,
				"coverImgId_str": "18822539557941307"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周三更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568193203971,
				"subscribedCount": 1607166,
				"cloudTrackCount": 0,
				"createTime": 1527831892491,
				"highQuality": false,
				"userId": 1473357007,
				"updateTime": 1568193204041,
				"coverImgId": 109951164174523460,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/oUxnXXvM33OUHxxukYnUjQ==/109951164174523461.jpg",
				"trackCount": 99,
				"commentThreadId": "A_PL_0_2250011882",
				"privacy": 0,
				"trackUpdateTime": 1568366023698,
				"playCount": 324995424,
				"ordered": true,
				"tags": [
					"榜单"
				],
				"description": "抖音排行榜，每周三更新。",
				"status": 0,
				"name": "抖音排行榜",
				"id": 2250011882,
				"coverImgId_str": "109951164174523461"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周一更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1561995353888,
				"subscribedCount": 72771,
				"cloudTrackCount": 0,
				"createTime": 1547092729345,
				"highQuality": false,
				"userId": 106733386,
				"updateTime": 1561995354595,
				"coverImgId": 109951163785427940,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/XbjRDARP1xv5a-40ZDOy6A==/109951163785427934.jpg",
				"trackCount": 40,
				"commentThreadId": "A_PL_0_2617766278",
				"privacy": 0,
				"trackUpdateTime": 1568083633848,
				"playCount": 42429448,
				"ordered": true,
				"tags": [
					"华语",
					"流行"
				],
				"description": "LOOK直播 - 「LOOK新声代2」活动官方榜单，旨在推介超人气单曲和小众优质原创～",
				"status": 0,
				"name": "新声榜",
				"id": 2617766278,
				"coverImgId_str": "109951163785427934"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568255613086,
				"subscribedCount": 166819,
				"cloudTrackCount": 0,
				"createTime": 1430968935040,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568255613249,
				"coverImgId": 18752170813539664,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/vttjtRjL75Q4DEnjRsO8-A==/18752170813539664.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_71385702",
				"privacy": 0,
				"trackUpdateTime": 1568603369610,
				"playCount": 45411304,
				"ordered": true,
				"tags": [],
				"description": "云音乐用户一周内收听所有ACG音乐官方TOP排行榜，每周四更新。",
				"status": 0,
				"name": "云音乐ACG音乐榜",
				"id": 71385702,
				"coverImgId_str": "18752170813539664"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568271626168,
				"subscribedCount": 85565,
				"cloudTrackCount": 0,
				"createTime": 1496201691281,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568271626250,
				"coverImgId": 18737877162497500,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/vs-cMh49e6qPEorHuhU07A==/18737877162497499.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_745956260",
				"privacy": 0,
				"trackUpdateTime": 1568350933942,
				"playCount": 29277608,
				"ordered": true,
				"tags": [
					"韩语",
					"榜单"
				],
				"description": "云音乐用户一周内收听所有韩语歌曲官方TOP排行榜，每周四更新。",
				"status": 0,
				"name": "云音乐韩语榜",
				"id": 745956260,
				"coverImgId_str": "18737877162497499"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周五更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568368044036,
				"subscribedCount": 211861,
				"cloudTrackCount": 0,
				"createTime": 1395988377813,
				"highQuality": false,
				"userId": 48102,
				"updateTime": 1568368044096,
				"coverImgId": 109951163424197390,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/8-GBrukQ3BHhs4CmK6qE4w==/109951163424197392.jpg",
				"trackCount": 20,
				"commentThreadId": "A_PL_0_10520166",
				"privacy": 0,
				"trackUpdateTime": 1568538109481,
				"playCount": 64465680,
				"ordered": true,
				"tags": [
					"电子",
					"榜单"
				],
				"description": "▲▲▲本榜排名按作品发行时间顺序▲▲▲网易云音乐联合网易放刺、Loopy、加菲众、DJ WENGWENG（灯笼Club）、3ASiC（同步计划）、DJ Senders（沉睡电台）、Eiasn电音厂牌、电悦台（EDM Station） \n打造云音乐“国电榜” ! 每周五为大家带来网易电子音乐人优质新作！",
				"status": 0,
				"name": "云音乐国电榜",
				"id": 10520166,
				"coverImgId_str": "109951163424197392"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周三更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568202972648,
				"subscribedCount": 20048,
				"cloudTrackCount": 0,
				"createTime": 1513838619821,
				"highQuality": false,
				"userId": 270539485,
				"updateTime": 1568202974510,
				"coverImgId": 109951163089272200,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/0_6_Efe9m0D0NtghOxinUg==/109951163089272193.jpg",
				"trackCount": 20,
				"commentThreadId": "A_PL_0_2023401535",
				"privacy": 0,
				"trackUpdateTime": 1568628793116,
				"playCount": 4877015,
				"ordered": true,
				"tags": [
					"欧美",
					"流行",
					"英伦"
				],
				"description": "英国权威音乐杂志《Q》中文版&网易云音乐联合呈现榜单TOP20，英国《Q》杂志权威推荐。每周三同步更新。",
				"status": 0,
				"name": "英国Q杂志中文版周榜",
				"id": 2023401535,
				"coverImgId_str": "109951163089272193"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周五更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568343704219,
				"subscribedCount": 69991,
				"cloudTrackCount": 0,
				"createTime": 1512703064327,
				"highQuality": false,
				"userId": 6790397,
				"updateTime": 1568343704299,
				"coverImgId": 109951163078922990,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/CUqQp33MZf_m0BwH4u0V6A==/109951163078922993.jpg",
				"trackCount": 50,
				"commentThreadId": "A_PL_0_2006508653",
				"privacy": 0,
				"trackUpdateTime": 1568365943757,
				"playCount": 16024984,
				"ordered": true,
				"tags": [
					"游戏"
				],
				"description": "无音乐，不游戏。人气电竞主播联手推荐，最热最潮电竞歌曲榜单，电竞迷们的必备收藏！",
				"status": 0,
				"name": "电竞音乐榜",
				"id": 2006508653,
				"coverImgId_str": "109951163078922993"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "刚刚更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568593793020,
				"subscribedCount": 240652,
				"cloudTrackCount": 0,
				"createTime": 1361239766844,
				"highQuality": false,
				"userId": 48333,
				"updateTime": 1568593793167,
				"coverImgId": 18930291695438268,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/VQOMRRix9_omZbg4t-pVpw==/18930291695438269.jpg",
				"trackCount": 98,
				"commentThreadId": "A_PL_0_180106",
				"privacy": 0,
				"trackUpdateTime": 1568627827334,
				"playCount": 96703784,
				"ordered": true,
				"tags": [
					"榜单",
					"欧美"
				],
				"description": "UK排行榜",
				"status": 0,
				"name": "UK排行榜周榜",
				"id": 180106,
				"coverImgId_str": "18930291695438269"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周三更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568202539963,
				"subscribedCount": 1048423,
				"cloudTrackCount": 0,
				"createTime": 1358823076818,
				"highQuality": false,
				"userId": 48171,
				"updateTime": 1568202540932,
				"coverImgId": 18641120139148116,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/EBRqPmY8k8qyVHyF8AyjdQ==/18641120139148117.jpg",
				"trackCount": 101,
				"commentThreadId": "A_PL_0_60198",
				"privacy": 0,
				"trackUpdateTime": 1568623914156,
				"playCount": 360771520,
				"ordered": true,
				"tags": [
					"流行",
					"欧美",
					"榜单"
				],
				"description": "美国Billboard排行榜",
				"status": 0,
				"name": "美国Billboard周榜",
				"id": 60198,
				"coverImgId_str": "18641120139148117"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1567646986103,
				"subscribedCount": 225716,
				"cloudTrackCount": 0,
				"createTime": 1378886589466,
				"highQuality": false,
				"userId": 1589393,
				"updateTime": 1567646989066,
				"coverImgId": 18613632348448740,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/A61n94BjWAb-ql4xpwpYcg==/18613632348448741.jpg",
				"trackCount": 60,
				"commentThreadId": "A_PL_0_3812895",
				"privacy": 0,
				"trackUpdateTime": 1568448111411,
				"playCount": 71088560,
				"ordered": true,
				"tags": [
					"欧美",
					"电子",
					"榜单"
				],
				"description": "Beatport全球电子舞曲排行榜TOP100（本榜每周四更新）",
				"status": 0,
				"name": "Beatport全球电子舞曲榜",
				"id": 3812895,
				"coverImgId_str": "18613632348448741"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周五更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1567739914499,
				"subscribedCount": 186784,
				"cloudTrackCount": 0,
				"createTime": 1405653093230,
				"highQuality": false,
				"userId": 30728956,
				"updateTime": 1568366980312,
				"coverImgId": 19174383276805160,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/H4Y7jxd_zwygcAmPMfwJnQ==/19174383276805159.jpg",
				"trackCount": 20,
				"commentThreadId": "A_PL_0_21845217",
				"privacy": 0,
				"trackUpdateTime": 1568367009253,
				"playCount": 45303964,
				"ordered": true,
				"tags": [
					"华语",
					"KTV",
					"榜单"
				],
				"description": "KTV唛榜是目前国内首个以全国超过200家KTV点歌平台真实数据的当红歌曲榜单。所涉及的KTV店铺覆盖全国近100多个城市，囊括一、二、三线各级城市及地区。在综合全国各地KTV点唱数据的前提下进行汇总与统计。为了保证信息的及时性，唛榜每周五更新。提供给K迷们最新和最准确的数据。",
				"status": 0,
				"name": "KTV唛榜",
				"id": 21845217,
				"coverImgId_str": "19174383276805159"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "刚刚更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568594572764,
				"subscribedCount": 274351,
				"cloudTrackCount": 0,
				"createTime": 1398047444743,
				"highQuality": false,
				"userId": 48308,
				"updateTime": 1568594624904,
				"coverImgId": 109951163601178880,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p1.music.126.net/WTpbsVfxeB6qDs_3_rnQtg==/109951163601178881.jpg",
				"trackCount": 95,
				"commentThreadId": "A_PL_0_11641012",
				"privacy": 0,
				"trackUpdateTime": 1568626473016,
				"playCount": 85587360,
				"ordered": true,
				"tags": [
					"榜单"
				],
				"description": "iTunes榜Top100",
				"status": 0,
				"name": "iTunes榜",
				"id": 11641012,
				"coverImgId_str": "109951163601178881"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周三更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568187261786,
				"subscribedCount": 109336,
				"cloudTrackCount": 0,
				"createTime": 1357635084874,
				"highQuality": false,
				"userId": 48160,
				"updateTime": 1568187261871,
				"coverImgId": 19029247741938160,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/Rgqbqsf4b3gNOzZKxOMxuw==/19029247741938160.jpg",
				"trackCount": 32,
				"commentThreadId": "A_PL_0_60131",
				"privacy": 0,
				"trackUpdateTime": 1568279621767,
				"playCount": 37792228,
				"ordered": true,
				"tags": [
					"榜单",
					"日语"
				],
				"description": "ORICONSTYLE CD单曲周榜，每周三更新，欢迎关注。",
				"status": 0,
				"name": "日本Oricon周榜",
				"id": 60131,
				"coverImgId_str": "19029247741938160"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "刚刚更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568626199926,
				"subscribedCount": 96140,
				"cloudTrackCount": 0,
				"createTime": 1359703138872,
				"highQuality": false,
				"userId": 48337,
				"updateTime": 1568626199986,
				"coverImgId": 19187577416338508,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/54vZEZ-fCudWZm6GH7I55w==/19187577416338508.jpg",
				"trackCount": 20,
				"commentThreadId": "A_PL_0_120001",
				"privacy": 0,
				"trackUpdateTime": 1568626476779,
				"playCount": 24982300,
				"ordered": true,
				"tags": [],
				"description": "Hit FM Top 20 Countdown 第36期",
				"status": 0,
				"name": "Hit FM Top榜",
				"id": 120001,
				"coverImgId_str": "19187577416338508"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "刚刚更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568624792301,
				"subscribedCount": 28286,
				"cloudTrackCount": 0,
				"createTime": 1359690215675,
				"highQuality": false,
				"userId": 48174,
				"updateTime": 1568624792361,
				"coverImgId": 18646617697286900,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/wqi4TF4ILiTUUL5T7zhwsQ==/18646617697286899.jpg",
				"trackCount": 6,
				"commentThreadId": "A_PL_0_112463",
				"privacy": 0,
				"trackUpdateTime": 1568624792368,
				"playCount": 10471472,
				"ordered": true,
				"tags": [
					"流行"
				],
				"description": "資料來源統計： ※唱片行銷售量佔20%(含玫瑰大眾、g-music、五大、佳佳、博客來等各大唱片行) ※數位音樂下載佔30%(含 iTunes、KK box、myMusic、Omusic、各鈴聲下載榜) ※Hit Fm聯播網AIR PLAY電台播出率佔50%",
				"status": 0,
				"name": "台湾Hito排行榜",
				"id": 112463,
				"coverImgId_str": "18646617697286899"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568263671708,
				"subscribedCount": 72867,
				"cloudTrackCount": 0,
				"createTime": 1558493373769,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568263671997,
				"coverImgId": 109951164091703580,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/c0iThrYPpnFVgFvU6JCVXQ==/109951164091703579.jpg",
				"trackCount": 200,
				"commentThreadId": "A_PL_0_2809513713",
				"privacy": 0,
				"trackUpdateTime": 1568310503450,
				"playCount": 9029298,
				"ordered": true,
				"tags": [],
				"description": "云音乐用户一周内收听所有欧美歌曲官方TOP排行榜，每周四更新。\nWestern Hit Chart (updated every Thursday)",
				"status": 0,
				"name": "云音乐欧美热歌榜",
				"id": 2809513713,
				"coverImgId_str": "109951164091703579"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每天更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568598930854,
				"subscribedCount": 46525,
				"cloudTrackCount": 0,
				"createTime": 1558493214795,
				"highQuality": false,
				"userId": 1,
				"updateTime": 1568598930966,
				"coverImgId": 109951164091690480,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/Zb8AL5xdl9-_7WIyAhRLbw==/109951164091690485.jpg",
				"trackCount": 100,
				"commentThreadId": "A_PL_0_2809577409",
				"privacy": 0,
				"trackUpdateTime": 1568625002504,
				"playCount": 14537115,
				"ordered": true,
				"tags": [],
				"description": "云音乐用户一周内收听所有欧美新歌（一月内最新发行）官方TOP排行榜，每天更新。\nWestern New Release Chart (new songs released in last 30 days, updated daily)\n",
				"status": 0,
				"name": "云音乐欧美新歌榜",
				"id": 2809577409,
				"coverImgId_str": "109951164091690485"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周四更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568260805025,
				"subscribedCount": 33666,
				"cloudTrackCount": 0,
				"createTime": 1560758132139,
				"highQuality": false,
				"userId": 1447243891,
				"updateTime": 1568260805104,
				"coverImgId": 109951164278203340,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/HXhLTHf2LG0osVCPDKaZxQ==/109951164278203348.jpg",
				"trackCount": 10,
				"commentThreadId": "A_PL_0_2847251561",
				"privacy": 0,
				"trackUpdateTime": 1568275476264,
				"playCount": 11536883,
				"ordered": true,
				"tags": [],
				"description": "我要的音乐放肆听！网易云音乐重磅推出《中国新说唱2019》歌曲官方榜单。云音乐用户一周内收听《中国新说唱2019》所有歌曲官方TOP排行榜，每周四更新。",
				"status": 0,
				"name": "说唱TOP榜",
				"id": 2847251561,
				"coverImgId_str": "109951164278203348"
			},
			{
				"subscribers": [],
				"subscribed": null,
				"creator": null,
				"artists": null,
				"tracks": null,
				"updateFrequency": "每周五更新",
				"backgroundCoverId": 0,
				"backgroundCoverUrl": null,
				"adType": 0,
				"trackNumberUpdateTime": 1568367435757,
				"subscribedCount": 48799,
				"cloudTrackCount": 0,
				"createTime": 1409825013948,
				"highQuality": false,
				"userId": 5190793,
				"updateTime": 1568367435815,
				"coverImgId": 109951162873641550,
				"newImported": false,
				"anonimous": false,
				"specialType": 10,
				"totalDuration": 0,
				"coverImgUrl": "http://p2.music.126.net/6O0ZEnO-I_RADBylVypprg==/109951162873641556.jpg",
				"trackCount": 20,
				"commentThreadId": "A_PL_0_27135204",
				"privacy": 0,
				"trackUpdateTime": 1568367435841,
				"playCount": 17090780,
				"ordered": true,
				"tags": [
					"榜单"
				],
				"description": "法国NRJ电台（national Radio de Jeunes）成立于1981年，总部位于法国巴黎。是法国最受欢迎的音乐电台和听众最多的广播电台之一。NRJ音乐奖素有法国的“格莱美”之称。此榜单针对NRJ电台法国本土热门歌曲排行。【每周五更新】",
				"status": 0,
				"name": "法国 NRJ Vos Hits 周榜",
				"id": 27135204,
				"coverImgId_str": "109951162873641556"
			}
		];
		const data1 =  [
			{
				"name": "寂寞寂寞就好",
				"id": 1390853266,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13058503,
						"name": "尤长靖",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81637019,
					"name": "寂寞寂寞就好",
					"picUrl": "http://p1.music.126.net/F_TTMR927naM6J-GzPP3RA==/109951164363518103.jpg",
					"tns": [],
					"pic_str": "109951164363518103",
					"pic": 109951164363518100
				},
				"dt": 232171,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9289005,
					"vd": -14684
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5573421,
					"vd": -12047
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3715629,
					"vd": -10297
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416157,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568476800000
			},
			{
				"name": "这一生关于你的风景",
				"id": 1383927243,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12429072,
						"name": "隔壁老樊",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80918751,
					"name": "这一生关于你的风景",
					"picUrl": "http://p1.music.126.net/72pkxsrTN_zUscdzMk5mMA==/109951164289743850.jpg",
					"tns": [],
					"pic_str": "109951164289743850",
					"pic": 109951164289743860
				},
				"dt": 276234,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11051565,
					"vd": -32597
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6630957,
					"vd": -29972
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4420653,
					"vd": -28230
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "病态",
				"id": 1374056687,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 5781,
						"name": "薛之谦",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 8,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80003734,
					"name": "尘",
					"picUrl": "http://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
					"tns": [],
					"pic_str": "109951164172892390",
					"pic": 109951164172892380
				},
				"dt": 279665,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11188811,
					"vd": -61676
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6713304,
					"vd": -59110
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4475551,
					"vd": -57501
				},
				"a": null,
				"cd": "01",
				"no": 5,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 22036,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1566662400000
			},
			{
				"name": "迷人的危险",
				"id": 1383876635,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13608761,
						"name": "尚士达",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80915281,
					"name": "迷人的危险",
					"picUrl": "http://p1.music.126.net/aryxbULAHjqP5MPgUdg9gA==/109951164292787462.jpg",
					"tns": [],
					"pic_str": "109951164292787462",
					"pic": 109951164292787460
				},
				"dt": 242000,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9682605,
					"vd": -50442
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5809581,
					"vd": -47881
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3873069,
					"vd": -46347
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "不得不爱",
				"id": 1384527426,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 31668975,
						"name": "Lambert",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80982754,
					"name": "不得不爱",
					"picUrl": "http://p1.music.126.net/94ofbrM9sC9cQzKf2rO2GQ==/109951164297796644.jpg",
					"tns": [],
					"pic_str": "109951164297796644",
					"pic": 109951164297796640
				},
				"dt": 177000,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7081965,
					"vd": -58655
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4249197,
					"vd": -56132
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2832813,
					"vd": -54517
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416410,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "第三人称",
				"id": 502043537,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12085562,
						"name": "买辣椒也用券",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": null,
				"fee": 8,
				"v": 23,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 36067044,
					"name": "第三人称",
					"picUrl": "http://p1.music.126.net/FOQrBDCIu6ENx_YHAGLv0w==/109951164345003993.jpg",
					"tns": [],
					"pic_str": "109951164345003993",
					"pic": 109951164345004000
				},
				"dt": 269064,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10773987,
					"vd": -2
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6464409,
					"vd": -2
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4309621,
					"vd": -2
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416372,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1503763200000
			},
			{
				"name": "离人的月亮",
				"id": 1390417840,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 10558,
						"name": "周笔畅",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81586202,
					"name": "离人的月亮",
					"picUrl": "http://p1.music.126.net/7-o9_CUcF0owkDlrCouB-w==/109951164358108498.jpg",
					"tns": [],
					"pic_str": "109951164358108498",
					"pic": 109951164358108500
				},
				"dt": 263013,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10522605,
					"vd": -55770
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6313581,
					"vd": -53201
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4209069,
					"vd": -51512
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416441,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "野狼disco (Live)",
				"id": 1384570303,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12084497,
						"name": "宝石gem",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80986146,
					"name": "中国新说唱2019 第十期",
					"picUrl": "http://p1.music.126.net/6_bZAvi7pi7V9U0JnvS8uQ==/109951164298338067.jpg",
					"tns": [],
					"pic_str": "109951164298338067",
					"pic": 109951164298338060
				},
				"dt": 202570,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8105325,
					"vd": -51797
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4863213,
					"vd": -49276
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3242157,
					"vd": -47832
				},
				"a": null,
				"cd": "01",
				"no": 12,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "我不好",
				"id": 1389152878,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1047015,
						"name": "张艺兴",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81416218,
					"name": "我不好",
					"picUrl": "http://p1.music.126.net/AVsYc9BzvWMRiZrrpumDJQ==/109951164347849976.jpg",
					"tns": [],
					"pic_str": "109951164347849976",
					"pic": 109951164347849980
				},
				"dt": 231826,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9275603,
					"vd": -53081
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5565379,
					"vd": -50455
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3710267,
					"vd": -48698
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416433,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "关山酒",
				"id": 1387592437,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 30285885,
						"name": "等什么君",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81257463,
					"name": "关山酒",
					"picUrl": "http://p1.music.126.net/TzhBcIpEldkML6hvYKtzsQ==/109951164333017222.jpg",
					"tns": [],
					"pic_str": "109951164333017222",
					"pic": 109951164333017220
				},
				"dt": 234877,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9397485,
					"vd": -32417
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5638509,
					"vd": -29827
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3759021,
					"vd": -28135
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567180800000
			},
			{
				"name": "笑场",
				"id": 1374061038,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 5781,
						"name": "薛之谦",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 8,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80003734,
					"name": "尘",
					"picUrl": "http://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
					"tns": [],
					"pic_str": "109951164172892390",
					"pic": 109951164172892380
				},
				"dt": 272481,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10901464,
					"vd": -36285
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6540896,
					"vd": -33683
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4360612,
					"vd": -32004
				},
				"a": null,
				"cd": "01",
				"no": 4,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10889561,
				"mst": 9,
				"cp": 22036,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "敬长安",
				"id": 1390025989,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12429072,
						"name": "隔壁老樊",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81531991,
					"name": "敬长安",
					"picUrl": "http://p1.music.126.net/APin75ElYUaoZ-wbgCm4xQ==/109951164354773420.jpg",
					"tns": [],
					"pic_str": "109951164354773420",
					"pic": 109951164354773420
				},
				"dt": 236303,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9454125,
					"vd": -59474
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5672493,
					"vd": -56884
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3781677,
					"vd": -55232
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "亲爱的你 去了何方",
				"id": 1390532238,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12079044,
						"name": "陈硕子",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81495582,
					"name": "亲爱的你去了何方",
					"picUrl": "http://p1.music.126.net/PzZzIkVAwze08t5zIzcnOw==/109951164359344246.jpg",
					"tns": [],
					"pic_str": "109951164359344246",
					"pic": 109951164359344240
				},
				"dt": 222815,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8915113,
					"vd": -53862
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5349085,
					"vd": -51238
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3566071,
					"vd": -49497
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "她不是",
				"id": 1387183835,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12227290,
						"name": "BigYear大年",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81213388,
					"name": "她不是",
					"picUrl": "http://p1.music.126.net/IBCK7L0gV23otD8iSiVxkA==/109951164328724359.jpg",
					"tns": [],
					"pic_str": "109951164328724359",
					"pic": 109951164328724350
				},
				"dt": 255310,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10214966,
					"vd": -34663
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6128997,
					"vd": -32048
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4086013,
					"vd": -30386
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 530019,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "木偶人",
				"id": 1374051000,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 5781,
						"name": "薛之谦",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80003734,
					"name": "尘",
					"picUrl": "http://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
					"tns": [],
					"pic_str": "109951164172892390",
					"pic": 109951164172892380
				},
				"dt": 286627,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11467799,
					"vd": -33123
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6880697,
					"vd": -30512
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4587146,
					"vd": -28813
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10875070,
				"mst": 9,
				"cp": 22036,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "浪够了再回来",
				"id": 1380464602,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32856247,
						"name": "阿妹啊",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80629637,
					"name": "浪够了再回来",
					"picUrl": "http://p1.music.126.net/cgjmGd7VEgZ0raE5DuB2Aw==/109951164243403198.jpg",
					"tns": [],
					"pic_str": "109951164243403198",
					"pic": 109951164243403200
				},
				"dt": 96783,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 3872436,
					"vd": -48336
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 2323479,
					"vd": -45716
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 1549000,
					"vd": -44025
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1382818,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "这么久没见",
				"id": 1374061036,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 5781,
						"name": "薛之谦",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 8,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80003734,
					"name": "尘",
					"picUrl": "http://p1.music.126.net/JL_id1CFwNJpzgrXwemh4Q==/109951164172892390.jpg",
					"tns": [],
					"pic_str": "109951164172892390",
					"pic": 109951164172892380
				},
				"dt": 295427,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11819929,
					"vd": -28964
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 7091975,
					"vd": -26382
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4727998,
					"vd": -24779
				},
				"a": null,
				"cd": "01",
				"no": 3,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10882549,
				"mst": 9,
				"cp": 22036,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Hey Kong (Live)",
				"id": 1384570306,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12788674,
						"name": "刘聪KEY.L",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80986146,
					"name": "中国新说唱2019 第十期",
					"picUrl": "http://p1.music.126.net/6_bZAvi7pi7V9U0JnvS8uQ==/109951164298338067.jpg",
					"tns": [],
					"pic_str": "109951164298338067",
					"pic": 109951164298338060
				},
				"dt": 243124,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9727725,
					"vd": -55947
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5836653,
					"vd": -53365
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3891117,
					"vd": -51799
				},
				"a": null,
				"cd": "01",
				"no": 11,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Don't Call Me Angel (Charlie's Angels)",
				"id": 1390625483,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 48161,
						"name": "Ariana Grande",
						"tns": [],
						"alias": []
					},
					{
						"id": 66361,
						"name": "Miley Cyrus",
						"tns": [],
						"alias": []
					},
					{
						"id": 66212,
						"name": "Lana Del Rey",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"电影《霹雳娇娃》主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 15,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81608506,
					"name": "Don't Call Me Angel (Charlie's Angels)",
					"picUrl": "http://p1.music.126.net/-sxjOASAokAoTY93vvSt-A==/109951164360623819.jpg",
					"tns": [],
					"pic_str": "109951164360623819",
					"pic": 109951164360623820
				},
				"dt": 190145,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7606901,
					"vd": -63543
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4564158,
					"vd": -61061
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3042786,
					"vd": -59480
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10892095,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "时迁",
				"id": 1384971398,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32747902,
						"name": "耳朵玥",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81015950,
					"name": "时迁",
					"picUrl": "http://p1.music.126.net/8ixKLfhmvkBNNt6Rk_zPbQ==/109951164303431437.jpg",
					"tns": [],
					"pic_str": "109951164303431437",
					"pic": 109951164303431440
				},
				"dt": 231428,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9259245,
					"vd": -33862
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5555565,
					"vd": -31245
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3703725,
					"vd": -29509
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "2099",
				"id": 1389394945,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 53092,
						"name": "Charli XCX",
						"tns": [],
						"alias": []
					},
					{
						"id": 45129,
						"name": "Troye Sivan",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81456328,
					"name": "2099",
					"picUrl": "http://p1.music.126.net/lhertRPG5M2isnbcG5Jv5A==/109951164355382809.jpg",
					"tns": [],
					"pic_str": "109951164355382809",
					"pic": 109951164355382820
				},
				"dt": 0,
				"h": null,
				"m": null,
				"l": null,
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 1056768,
				"mv": 0,
				"mst": 9,
				"cp": 7002,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568044800000
			},
			{
				"name": "赤伶（民谣版）",
				"id": 1377748865,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32674400,
						"name": "你的二智bb",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"原唱：HITA"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 11,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81406182,
					"name": "赤伶（民谣版）",
					"picUrl": "http://p1.music.126.net/R9d4-eULOknTXf4fZz41Dg==/109951164346847770.jpg",
					"tns": [],
					"pic_str": "109951164346847770",
					"pic": 109951164346847780
				},
				"dt": 265588,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10626285,
					"vd": -13769
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6375789,
					"vd": -11159
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4250541,
					"vd": -9469
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1562947200000
			},
			{
				"name": "无名之辈",
				"id": 1387152054,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1087592,
						"name": "唐汉霄",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81210345,
					"name": "无名之辈",
					"picUrl": "http://p1.music.126.net/ZcKTakDRYZ76MzrPgficHA==/109951164328605526.jpg",
					"tns": [],
					"pic_str": "109951164328605526",
					"pic": 109951164328605520
				},
				"dt": 212298,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8494125,
					"vd": -59527
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5096493,
					"vd": -57144
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3397677,
					"vd": -55643
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10891716,
				"mst": 9,
				"cp": 1416425,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Mother",
				"id": 1389848218,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 90331,
						"name": "Charlie Puth",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81507418,
					"name": "Mother",
					"picUrl": "http://p1.music.126.net/YZHpMcaeXQvgFVJ7ol0DeA==/109951164353295625.jpg",
					"tns": [],
					"pic_str": "109951164353295625",
					"pic": 109951164353295630
				},
				"dt": 162899,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6517072,
					"vd": -69164
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3910261,
					"vd": -66573
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2606855,
					"vd": -64903
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10892077,
				"mst": 9,
				"cp": 7002,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568217600000
			},
			{
				"name": "把孤独当作晚餐 (原版)",
				"id": 1381053140,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1025271,
						"name": "刘旭阳",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 2,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80626192,
					"name": "把孤独当作晚餐",
					"picUrl": "http://p1.music.126.net/6CodKp_WPoVGiGPQ0QBRsg==/109951164241833869.jpg",
					"tns": [],
					"pic_str": "109951164241833869",
					"pic": 109951164241833870
				},
				"dt": 266181,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10649644,
					"vd": -67256
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6389804,
					"vd": -64692
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4259884,
					"vd": -63057
				},
				"a": null,
				"cd": "01",
				"no": 2,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10881090,
				"mst": 9,
				"cp": 1382818,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "馬と鹿",
				"id": 1390397310,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 159300,
						"name": "米津玄師",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"电视剧《比赛完毕》主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81580388,
					"name": "馬と鹿",
					"picUrl": "http://p1.music.126.net/5rJzp8NlvVQw-x_j7Lj_mw==/109951164357916489.jpg",
					"tns": [],
					"pic_str": "109951164357916489",
					"pic": 109951164357916500
				},
				"dt": 265978,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10640240,
					"vd": -57597
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6384161,
					"vd": -55083
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4256122,
					"vd": -53456
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10887660,
				"mst": 9,
				"cp": 7001,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568131200000
			},
			{
				"name": "Woken Day",
				"id": 1387629743,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12200652,
						"name": "活死人",
						"tns": [],
						"alias": []
					},
					{
						"id": 865007,
						"name": "法老",
						"tns": [],
						"alias": []
					},
					{
						"id": 13899303,
						"name": "杨和苏KeyNG",
						"tns": [],
						"alias": []
					},
					{
						"id": 1199064,
						"name": "福克斯",
						"tns": [],
						"alias": []
					},
					{
						"id": 12094558,
						"name": "Buzzy",
						"tns": [],
						"alias": []
					},
					{
						"id": 1185047,
						"name": "龙崎",
						"tns": [],
						"alias": []
					},
					{
						"id": 12092433,
						"name": "JarStick",
						"tns": [],
						"alias": []
					},
					{
						"id": 12851112,
						"name": "PISSY",
						"tns": [],
						"alias": []
					},
					{
						"id": 12065015,
						"name": "隆历奇",
						"tns": [],
						"alias": []
					},
					{
						"id": 12287129,
						"name": "小精灵",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 11,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81262294,
					"name": "Woken Day",
					"picUrl": "http://p1.music.126.net/4sawWpycQNp5PFizbp65Bg==/109951164333497402.jpg",
					"tns": [],
					"pic_str": "109951164333497402",
					"pic": 109951164333497400
				},
				"dt": 268800,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10754133,
					"vd": -59972
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6452497,
					"vd": -57459
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4301679,
					"vd": -55907
				},
				"a": null,
				"cd": "01",
				"no": 10,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "愿你有故乡",
				"id": 1390298115,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1050282,
						"name": "房东的猫",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81569725,
					"name": "愿你有故乡",
					"picUrl": "http://p1.music.126.net/JsQzKHZJKnoEkKxnV6b-Lg==/109951164356949447.jpg",
					"tns": [],
					"pic_str": "109951164356949447",
					"pic": 109951164356949440
				},
				"dt": 0,
				"h": null,
				"m": null,
				"l": null,
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 64,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "引路的风筝",
				"id": 1388126434,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 10562,
						"name": "张韶涵",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81297030,
					"name": "引路的风筝",
					"picUrl": "http://p1.music.126.net/aOnzZrq8lZ8x-zDyGSvGfQ==/109951164339415705.jpg",
					"tns": [],
					"pic_str": "109951164339415705",
					"pic": 109951164339415710
				},
				"dt": 277146,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11088045,
					"vd": -54732
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6652845,
					"vd": -52169
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4435245,
					"vd": -50621
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10889560,
				"mst": 9,
				"cp": 1416428,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "山楂树之恋",
				"id": 1388161826,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12059017,
						"name": "雷智皓",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"正式版"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 7,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81300367,
					"name": "山楂树之恋",
					"picUrl": "http://p1.music.126.net/NNaPZohLg-GTaVIGeTe9Zg==/109951164339781353.jpg",
					"tns": [],
					"pic_str": "109951164339781353",
					"pic": 109951164339781360
				},
				"dt": 193846,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7755885,
					"vd": -29182
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4653549,
					"vd": -26582
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3102381,
					"vd": -24905
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 64,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "亦是此间少年",
				"id": 1385646451,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 30284835,
						"name": "枯木逢春",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81068891,
					"name": "亦是此间少年",
					"picUrl": "http://p1.music.126.net/Wy_PGZK8DKeidNJIoJpsFA==/109951164311783494.jpg",
					"tns": [],
					"pic_str": "109951164311783494",
					"pic": 109951164311783490
				},
				"dt": 258000,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10322591,
					"vd": -50823
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6193572,
					"vd": -48203
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4129062,
					"vd": -46462
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "爱你 3000 (feat. 黄旭 & 肖恩恩)",
				"id": 1389394944,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 4723,
						"name": "潘玮柏",
						"tns": [],
						"alias": []
					},
					{
						"id": 12065096,
						"name": "黄旭",
						"tns": [],
						"alias": []
					},
					{
						"id": 12071015,
						"name": "SeanT肖恩恩",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81456326,
					"name": "爱你 3000 (feat. 黄旭 & 肖恩恩)",
					"picUrl": "http://p1.music.126.net/4tZqz9yYK1WVTej1ZNGW8g==/109951164348892622.jpg",
					"tns": [],
					"pic_str": "109951164348892622",
					"pic": 109951164348892620
				},
				"dt": 255555,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10223325,
					"vd": -11167
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6134013,
					"vd": -8646
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4089356,
					"vd": -7028
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10890806,
				"mst": 9,
				"cp": 7002,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568044800000
			},
			{
				"name": "表态 (Live)",
				"id": 1386079914,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 166010,
						"name": "梁博",
						"tns": [],
						"alias": []
					},
					{
						"id": 12357157,
						"name": "新秀",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81106864,
					"name": "中国新说唱2019 第十一期",
					"picUrl": "http://p1.music.126.net/Ph6JJLpUXUXweJn6CcvgAQ==/109951164316259744.jpg",
					"tns": [],
					"pic_str": "109951164316259744",
					"pic": 109951164316259740
				},
				"dt": 297585,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11905965,
					"vd": -50649
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 7143597,
					"vd": -48102
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4762413,
					"vd": -46518
				},
				"a": null,
				"cd": "01",
				"no": 10,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "只是不够爱",
				"id": 1390026519,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 8926,
						"name": "莫文蔚",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"《飞虎之雷霆极战》主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81532876,
					"name": "只是不够爱",
					"picUrl": "http://p1.music.126.net/vF_WMGnuPsrIzBfBz_B5Gw==/109951164354758849.jpg",
					"tns": [],
					"pic_str": "109951164354758849",
					"pic": 109951164354758850
				},
				"dt": 0,
				"h": null,
				"m": null,
				"l": null,
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 7001,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568131200000
			},
			{
				"name": "大戒",
				"id": 1390276536,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 8103,
						"name": "花粥",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81565340,
					"name": "大戒",
					"picUrl": "http://p1.music.126.net/6Squg740CqmCwZ-vRRARfQ==/109951164356793069.jpg",
					"tns": [],
					"pic_str": "109951164356793069",
					"pic": 109951164356793070
				},
				"dt": 0,
				"h": null,
				"m": null,
				"l": null,
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "祝你如愿以偿",
				"id": 1384407825,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 9508,
						"name": "唐宁",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80925122,
					"name": "祝你如愿以偿",
					"picUrl": "http://p1.music.126.net/KX5uniSepZxWL_b4eSV3Dg==/109951164296327017.jpg",
					"tns": [],
					"pic_str": "109951164296327017",
					"pic": 109951164296327020
				},
				"dt": 170554,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6825317,
					"vd": -36992
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4095208,
					"vd": -34353
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2730153,
					"vd": -32578
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Adios",
				"id": 1384999802,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 31155429,
						"name": "EVERGLOW",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81016236,
					"name": "HUSH",
					"picUrl": "http://p1.music.126.net/3LsiLatn7zqQUeZNrG5aaw==/109951164303924777.jpg",
					"tns": [],
					"pic_str": "109951164303924777",
					"pic": 109951164303924780
				},
				"dt": 189146,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7568240,
					"vd": -80258
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4540961,
					"vd": -77777
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3027322,
					"vd": -76481
				},
				"a": null,
				"cd": "01",
				"no": 2,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10884751,
				"mst": 9,
				"cp": 1374822,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Black & Blue",
				"id": 1390412708,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1039114,
						"name": "Lost Frequencies",
						"tns": [],
						"alias": []
					},
					{
						"id": 12033046,
						"name": "Mokita",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81585129,
					"name": "Black & Blue",
					"picUrl": "http://p1.music.126.net/V22Xrio_KB3Y5AZSUTygxw==/109951164358008547.jpg",
					"tns": [],
					"pic_str": "109951164358008547",
					"pic": 109951164358008540
				},
				"dt": 162914,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6519162,
					"vd": -22126
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3911515,
					"vd": -19603
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2607691,
					"vd": -18030
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10891714,
				"mst": 9,
				"cp": 665010,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568304000000
			},
			{
				"name": "Lover",
				"id": 1382778514,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 44266,
						"name": "Taylor Swift",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 4,
				"v": 17,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80752440,
					"name": "Lover",
					"picUrl": "http://p1.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg",
					"tns": [],
					"pic_str": "109951164260234943",
					"pic": 109951164260234940
				},
				"dt": 221306,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8854509,
					"vd": -33922
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5312723,
					"vd": -31331
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3541830,
					"vd": -29681
				},
				"a": null,
				"cd": "01",
				"no": 3,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10886105,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "剃须刀",
				"id": 1387623887,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12002248,
						"name": "沈以诚",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"Razor"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81262740,
					"name": "剃须刀",
					"picUrl": "http://p1.music.126.net/ox69vaqDv-kQNfQX4VhxZw==/109951164333471355.jpg",
					"tns": [],
					"pic_str": "109951164333471355",
					"pic": 109951164333471360
				},
				"dt": 210000,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8403113,
					"vd": -54021
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5041885,
					"vd": -51409
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3361271,
					"vd": -49639
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "黄土高坡Trap",
				"id": 1386582919,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12788674,
						"name": "刘聪KEY.L",
						"tns": [],
						"alias": []
					},
					{
						"id": 1124093,
						"name": "西奥Sio",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81143738,
					"name": "黄土高坡Trap",
					"picUrl": "http://p1.music.126.net/zxlFF5SXMX9YEy8UD37Pkw==/109951164321783020.jpg",
					"tns": [],
					"pic_str": "109951164321783020",
					"pic": 109951164321783020
				},
				"dt": 209142,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8368365,
					"vd": -42888
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5021037,
					"vd": -40342
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3347373,
					"vd": -38909
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "从没有爱过 (男声独唱版)",
				"id": 1385109879,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12460308,
						"name": "于大海（于黑蛋）",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81026443,
					"name": "从没有爱过",
					"picUrl": "http://p1.music.126.net/1xTsxEiIDuOBShXwY214GA==/109951164305179248.jpg",
					"tns": [],
					"pic_str": "109951164305179248",
					"pic": 109951164305179250
				},
				"dt": 185136,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7408370,
					"vd": -41895
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4445040,
					"vd": -39292
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2963374,
					"vd": -37632
				},
				"a": null,
				"cd": "01",
				"no": 2,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1398818,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Wait for you (Live)",
				"id": 1386079926,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13899303,
						"name": "杨和苏KeyNG",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81106864,
					"name": "中国新说唱2019 第十一期",
					"picUrl": "http://p1.music.126.net/Ph6JJLpUXUXweJn6CcvgAQ==/109951164316259744.jpg",
					"tns": [],
					"pic_str": "109951164316259744",
					"pic": 109951164316259740
				},
				"dt": 171212,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6850605,
					"vd": -50224
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4110381,
					"vd": -47647
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2740269,
					"vd": -46033
				},
				"a": null,
				"cd": "01",
				"no": 13,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "火车开过破晓",
				"id": 1387110808,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1050282,
						"name": "房东的猫",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81208577,
					"name": "火车开过破晓",
					"picUrl": "http://p1.music.126.net/nXXN-e-bOqpKxbpAn51spg==/109951164327871775.jpg",
					"tns": [],
					"pic_str": "109951164327871775",
					"pic": 109951164327871780
				},
				"dt": 219000,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8762925,
					"vd": -33577
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5257773,
					"vd": -30938
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3505197,
					"vd": -29160
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416372,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "心跳 (Live)",
				"id": 1386079916,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 816248,
						"name": "于文文",
						"tns": [],
						"alias": []
					},
					{
						"id": 13899303,
						"name": "杨和苏KeyNG",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81106864,
					"name": "中国新说唱2019 第十一期",
					"picUrl": "http://p1.music.126.net/Ph6JJLpUXUXweJn6CcvgAQ==/109951164316259744.jpg",
					"tns": [],
					"pic_str": "109951164316259744",
					"pic": 109951164316259740
				},
				"dt": 327600,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 13106925,
					"vd": -48980
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 7864173,
					"vd": -46403
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 5242797,
					"vd": -44767
				},
				"a": null,
				"cd": "01",
				"no": 11,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "红色",
				"id": 1384562517,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 6211,
						"name": "幼稚园杀手",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 12,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80932299,
					"name": "红色",
					"picUrl": "http://p1.music.126.net/C14iCBb0gWujgZnCc9SwpA==/109951164298313032.jpg",
					"tns": [],
					"pic_str": "109951164298313032",
					"pic": 109951164298313020
				},
				"dt": 219324,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8775097,
					"vd": -79686
				},
				"m": null,
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3510065,
					"vd": -75655
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 64,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Graveyard",
				"id": 1390621518,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 964321,
						"name": "Halsey",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81608860,
					"name": "Graveyard",
					"picUrl": "http://p1.music.126.net/0FTqLITQlP0z7_AYPXqQyw==/109951164360609090.jpg",
					"tns": [],
					"pic_str": "109951164360609090",
					"pic": 109951164360609090
				},
				"dt": 181838,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7274623,
					"vd": -65850
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4364791,
					"vd": -63260
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2909875,
					"vd": -61570
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10891677,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568304000000
			},
			{
				"name": "处暑",
				"id": 1385858356,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12174521,
						"name": "音阙诗听",
						"tns": [],
						"alias": []
					},
					{
						"id": 12048239,
						"name": "王梓钰",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81085823,
					"name": "处暑",
					"picUrl": "http://p1.music.126.net/Zo2FKOT-7LemNjQnd4A6gQ==/109951164313505823.jpg",
					"tns": [],
					"pic_str": "109951164313505823",
					"pic": 109951164313505820
				},
				"dt": 231652,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9268289,
					"vd": -50012
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5560991,
					"vd": -47354
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3707342,
					"vd": -45601
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416070,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "是红",
				"id": 1367867672,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 8103,
						"name": "花粥",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 13,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81559999,
					"name": "Life·Live",
					"picUrl": "http://p1.music.126.net/os2A1IgfENcCQszoO9Lsjw==/109951164356370853.jpg",
					"tns": [],
					"pic_str": "109951164356370853",
					"pic": 109951164356370850
				},
				"dt": 182522,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7303880,
					"vd": -48007
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4382346,
					"vd": -45401
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2921578,
					"vd": -43707
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10870317,
				"mst": 9,
				"cp": 1416245,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568131200000
			},
			{
				"name": "夜奔",
				"id": 1387636986,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32041318,
						"name": "恋恋故人难",
						"tns": [],
						"alias": []
					},
					{
						"id": 10142,
						"name": "玄觞",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81263057,
					"name": "夜奔",
					"picUrl": "http://p1.music.126.net/3vV3EuCclm6-9GK70lc7yQ==/109951164333584288.jpg",
					"tns": [],
					"pic_str": "109951164333584288",
					"pic": 109951164333584290
				},
				"dt": 244666,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9789693,
					"vd": -39548
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5873833,
					"vd": -36968
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3915903,
					"vd": -35373
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10890529,
				"mst": 9,
				"cp": 1416195,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "花都开好了",
				"id": 1386876006,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 30406251,
						"name": "火箭少女101赖美云",
						"tns": [],
						"alias": []
					},
					{
						"id": 15022168,
						"name": "火箭少女101紫宁",
						"tns": [],
						"alias": []
					},
					{
						"id": 29785925,
						"name": "火箭少女101李紫婷",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81175279,
					"name": "花都开好了",
					"picUrl": "http://p1.music.126.net/HvsHWtyYrcpqCF_fmBA80w==/109951164325766490.jpg",
					"tns": [],
					"pic_str": "109951164325766490",
					"pic": 109951164325766500
				},
				"dt": 212625,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8507565,
					"vd": -56016
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5104557,
					"vd": -53422
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3403053,
					"vd": -51759
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416157,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Somebody To Love",
				"id": 1390241857,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 98105,
						"name": "OneRepublic",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81561597,
					"name": "Somebody To Love",
					"picUrl": "http://p1.music.126.net/sEb4odQFCzqVvG9SzidtYA==/109951164356500330.jpg",
					"tns": [],
					"pic_str": "109951164356500330",
					"pic": 109951164356500340
				},
				"dt": 181446,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7258950,
					"vd": -56247
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4355387,
					"vd": -53681
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2903606,
					"vd": -52148
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10892101,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568131200000
			},
			{
				"name": "侠 (Live)",
				"id": 1384569209,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1199064,
						"name": "福克斯",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80986146,
					"name": "中国新说唱2019 第十期",
					"picUrl": "http://p1.music.126.net/6_bZAvi7pi7V9U0JnvS8uQ==/109951164298338067.jpg",
					"tns": [],
					"pic_str": "109951164298338067",
					"pic": 109951164298338060
				},
				"dt": 174187,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6969645,
					"vd": -69119
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4181805,
					"vd": -66594
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2787885,
					"vd": -65080
				},
				"a": null,
				"cd": "01",
				"no": 13,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "离岸",
				"id": 1385569251,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32042995,
						"name": "糯米Nomi",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81062513,
					"name": "离岸",
					"picUrl": "http://p1.music.126.net/Hg_fmiXUsddMrmJXx5bjuw==/109951164310327324.jpg",
					"tns": [],
					"pic_str": "109951164310327324",
					"pic": 109951164310327330
				},
				"dt": 216163,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8648664,
					"vd": -33368
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5189216,
					"vd": -30814
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3459492,
					"vd": -29322
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1398818,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Pick Up The Phone",
				"id": 1385367710,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13057497,
						"name": "黄明昊 (Justin)",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"来电"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81049067,
					"name": "Pick Up The Phone",
					"picUrl": "http://p1.music.126.net/EyPRRyRgzMtnglRJUEDEpw==/109951164308259554.jpg",
					"tns": [],
					"pic_str": "109951164308259554",
					"pic": 109951164308259550
				},
				"dt": 203640,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8148158,
					"vd": -68049
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4888912,
					"vd": -65504
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3259289,
					"vd": -63984
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1374822,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "她不说",
				"id": 1388383622,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12157298,
						"name": "刘炫廷",
						"tns": [],
						"alias": []
					},
					{
						"id": 792664,
						"name": "王大痣",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81332082,
					"name": "她不说",
					"picUrl": "http://p1.music.126.net/Jzp-f6buHpEFbPNvnR2Rvw==/109951164341842611.jpg",
					"tns": [],
					"pic_str": "109951164341842611",
					"pic": 109951164341842610
				},
				"dt": 178591,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7146101,
					"vd": -53423
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4287678,
					"vd": -50909
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2858466,
					"vd": -49409
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 405025,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568304000000
			},
			{
				"name": "You Need To Calm Down (Clean Bandit Remix)",
				"id": 1385336748,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 44266,
						"name": "Taylor Swift",
						"tns": [],
						"alias": []
					},
					{
						"id": 754010,
						"name": "Clean Bandit",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 2,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81046316,
					"name": "You Need To Calm Down (Clean Bandit Remix)",
					"picUrl": "http://p1.music.126.net/bi-B9Jgwusvxk6tNGPSLfQ==/109951164307894422.jpg",
					"tns": [],
					"pic_str": "109951164307894422",
					"pic": 109951164307894420
				},
				"dt": 152816,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6113742,
					"vd": -63315
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3668262,
					"vd": -60799
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2445523,
					"vd": -59419
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1566230400000
			},
			{
				"name": "逃",
				"id": 1389664239,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 31495403,
						"name": "蘇山海",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81486857,
					"name": "逃",
					"picUrl": "http://p1.music.126.net/fk5mR1mFFRH7zpgqGyTbsQ==/109951164351591454.jpg",
					"tns": [],
					"pic_str": "109951164351591454",
					"pic": 109951164351591460
				},
				"dt": 206666,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8269485,
					"vd": -42774
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4961709,
					"vd": -40145
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3307821,
					"vd": -38374
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "秃爵",
				"id": 1390644161,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32913327,
						"name": "某幻君",
						"tns": [],
						"alias": []
					},
					{
						"id": 12623251,
						"name": "老番茄",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 7,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81594763,
					"name": "秃爵",
					"picUrl": "http://p1.music.126.net/HX1vspcQ4enS00MePYArGw==/109951164360852542.jpg",
					"tns": [],
					"pic_str": "109951164360852542",
					"pic": 109951164360852540
				},
				"dt": 165666,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6628876,
					"vd": -68515
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3977343,
					"vd": -66059
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2651577,
					"vd": -64468
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "盗梦",
				"id": 1386056380,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1094010,
						"name": "摩登兄弟刘宇宁",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81103473,
					"name": "盗梦",
					"picUrl": "http://p1.music.126.net/HxbBkYd-5YvQ91p0xXw7iA==/109951164315880465.jpg",
					"tns": [],
					"pic_str": "109951164315880465",
					"pic": 109951164315880460
				},
				"dt": 212616,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8507565,
					"vd": -35312
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5104557,
					"vd": -32708
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3403053,
					"vd": -31062
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1416382,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "I Warned Myself",
				"id": 1384941393,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 90331,
						"name": "Charlie Puth",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81014959,
					"name": "I Warned Myself",
					"picUrl": "http://p1.music.126.net/nfa_FWrOVEtluoTgR82W-A==/109951164303082534.jpg",
					"tns": [],
					"pic_str": "109951164303082534",
					"pic": 109951164303082530
				},
				"dt": 159817,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6393774,
					"vd": -43441
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3836282,
					"vd": -40834
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2557536,
					"vd": -39107
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10885072,
				"mst": 9,
				"cp": 7002,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1566316800000
			},
			{
				"name": "亲爱的你 去了何方（demo)",
				"id": 1388137830,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12079044,
						"name": "陈硕子",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 8,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81261555,
					"name": "亲爱的你 去了何方",
					"picUrl": "http://p1.music.126.net/_J4areBlMg1QIvukB1h1oA==/109951164339573922.jpg",
					"tns": [],
					"pic_str": "109951164339573922",
					"pic": 109951164339573920
				},
				"dt": 16013,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 641611,
					"vd": -76305
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 384984,
					"vd": -73684
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 256671,
					"vd": -71919
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567353600000
			},
			{
				"name": "街头霸王 (Live)",
				"id": 1386080671,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12357157,
						"name": "新秀",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81106864,
					"name": "中国新说唱2019 第十一期",
					"picUrl": "http://p1.music.126.net/Ph6JJLpUXUXweJn6CcvgAQ==/109951164316259744.jpg",
					"tns": [],
					"pic_str": "109951164316259744",
					"pic": 109951164316259740
				},
				"dt": 150520,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6023085,
					"vd": -46521
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3613869,
					"vd": -43948
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2409261,
					"vd": -42316
				},
				"a": null,
				"cd": "01",
				"no": 9,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "独苗 (Live)",
				"id": 1384569088,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12357157,
						"name": "新秀",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80986146,
					"name": "中国新说唱2019 第十期",
					"picUrl": "http://p1.music.126.net/6_bZAvi7pi7V9U0JnvS8uQ==/109951164298338067.jpg",
					"tns": [],
					"pic_str": "109951164298338067",
					"pic": 109951164298338060
				},
				"dt": 125965,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 5041005,
					"vd": -73601
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3024621,
					"vd": -71076
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2016429,
					"vd": -69492
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Devil",
				"id": 1389040913,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1053145,
						"name": "CLC",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81403574,
					"name": "Devil",
					"picUrl": "http://p1.music.126.net/92q69OPqWF7i-qA1Tt7UlA==/109951164346774744.jpg",
					"tns": [],
					"pic_str": "109951164346774744",
					"pic": 109951164346774750
				},
				"dt": 176280,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7053165,
					"vd": -73000
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4231917,
					"vd": -70475
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2821293,
					"vd": -68933
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10891032,
				"mst": 9,
				"cp": 1415873,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "皮囊",
				"id": 1387317502,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12268138,
						"name": "Todd Li",
						"tns": [],
						"alias": []
					},
					{
						"id": 31341548,
						"name": "Lacklustrr",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81181157,
					"name": "皮囊",
					"picUrl": "http://p1.music.126.net/FMKYiqtDhDkZ3Y5fs0DPEw==/109951164330193971.jpg",
					"tns": [],
					"pic_str": "109951164330193971",
					"pic": 109951164330193970
				},
				"dt": 275294,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11014313,
					"vd": -21771
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6608605,
					"vd": -19184
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4405751,
					"vd": -17518
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "千里行走",
				"id": 1385144622,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1198010,
						"name": "暗杠",
						"tns": [],
						"alias": []
					},
					{
						"id": 28868804,
						"name": "寅子",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81028559,
					"name": "千里行走",
					"picUrl": "http://p1.music.126.net/K_xxF_4b_BuvsIRR55gqIQ==/109951164305611287.jpg",
					"tns": [],
					"pic_str": "109951164305611287",
					"pic": 109951164305611280
				},
				"dt": 215789,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8634036,
					"vd": -33453
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5180439,
					"vd": -30837
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3453640,
					"vd": -29109
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 64,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Return",
				"id": 1389031366,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12047933,
						"name": "千丹菲",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 1,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81402502,
					"name": "우아한가 OST Part.3",
					"picUrl": "http://p1.music.126.net/4GD1EPtLurkpt0P6cQzlnQ==/109951164346674233.jpg",
					"tns": [
						"优雅的家 OST Part.3"
					],
					"pic_str": "109951164346674233",
					"pic": 109951164346674240
				},
				"dt": 213373,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8537325,
					"vd": -78024
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5122413,
					"vd": -75430
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3414957,
					"vd": -73848
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10890355,
				"mst": 9,
				"cp": 740017,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "少侠",
				"id": 1389002257,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12127564,
						"name": "艾福杰尼",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"《大话西游》手游周年庆主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81400433,
					"name": "少侠",
					"picUrl": "http://p1.music.126.net/rscPeF-eld2kuVak2veOnA==/109951164356481985.jpg",
					"tns": [],
					"pic_str": "109951164356481985",
					"pic": 109951164356481980
				},
				"dt": 210322,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8415405,
					"vd": -48336
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5049261,
					"vd": -45703
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3366189,
					"vd": -44064
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10891485,
				"mst": 9,
				"cp": 500016,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Cruel Summer",
				"id": 1382576173,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 44266,
						"name": "Taylor Swift",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 4,
				"v": 9,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80752440,
					"name": "Lover",
					"picUrl": "http://p1.music.126.net/6CB6Jsmb7k7qiJqfMY5Row==/109951164260234943.jpg",
					"tns": [],
					"pic_str": "109951164260234943",
					"pic": 109951164260234940
				},
				"dt": 178426,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7139831,
					"vd": -62885
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4283916,
					"vd": -60301
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2855959,
					"vd": -58693
				},
				"a": null,
				"cd": "01",
				"no": 2,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "趁年华",
				"id": 1390451997,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 10142,
						"name": "玄觞",
						"tns": [],
						"alias": []
					},
					{
						"id": 12434635,
						"name": "H6",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81516182,
					"name": "趁年华",
					"picUrl": "http://p1.music.126.net/YTJiLK7ceYSmXR2HrPRN5Q==/109951164358427580.jpg",
					"tns": [],
					"pic_str": "109951164358427580",
					"pic": 109951164358427580
				},
				"dt": 250032,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10003897,
					"vd": -43337
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6002355,
					"vd": -40719
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4001585,
					"vd": -39051
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Breathe",
				"id": 1390123253,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 15022053,
						"name": "88rising",
						"tns": [],
						"alias": []
					},
					{
						"id": 12203295,
						"name": "Joji",
						"tns": [],
						"alias": []
					},
					{
						"id": 12108793,
						"name": "Don Krez",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81544378,
					"name": "Breathe",
					"picUrl": "http://p1.music.126.net/0aYgr_PrrTAhRHOfJt0SuA==/109951164355317711.jpg",
					"tns": [],
					"pic_str": "109951164355317711",
					"pic": 109951164355317710
				},
				"dt": 125468,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 5021823,
					"vd": -55622
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3013111,
					"vd": -52994
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2008755,
					"vd": -51236
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 722012,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568217600000
			},
			{
				"name": "捕梦",
				"id": 1390431703,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12308369,
						"name": "黄诗扶",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"“花仙曲·捕梦”主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81587772,
					"name": "捕梦",
					"picUrl": "http://p1.music.126.net/MrCgRrbjE0fLh-QV2QwB5A==/109951164358228074.jpg",
					"tns": [],
					"pic_str": "109951164358228074",
					"pic": 109951164358228080
				},
				"dt": 194583,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7785578,
					"vd": -23113
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4671364,
					"vd": -20486
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3114257,
					"vd": -18760
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568304000000
			},
			{
				"name": "三生缘",
				"id": 1382790135,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 7424,
						"name": "程响",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 80831941,
					"name": "三生缘",
					"picUrl": "http://p1.music.126.net/AdJQYROUDUhOgdspkaT8yQ==/109951164298369885.jpg",
					"tns": [],
					"pic_str": "109951164298369885",
					"pic": 109951164298369890
				},
				"dt": 207377,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8297578,
					"vd": -34386
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4978564,
					"vd": -31787
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3319057,
					"vd": -30132
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416133,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1565107200000
			},
			{
				"name": "Circles",
				"id": 1387574419,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1057092,
						"name": "Post Malone",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81254419,
					"name": "Circles",
					"picUrl": "http://p1.music.126.net/42XFi2UPHDLCkKGHWmiGEQ==/109951164332836092.jpg",
					"tns": [],
					"pic_str": "109951164332836092",
					"pic": 109951164332836100
				},
				"dt": 214935,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8598509,
					"vd": -84116
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5159123,
					"vd": -81544
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3439430,
					"vd": -79838
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10888591,
				"mst": 9,
				"cp": 7003,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567094400000
			},
			{
				"name": "唱情歌",
				"id": 1382428964,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 1079074,
						"name": "余佳运",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"Flipped"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 9,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81259284,
					"name": "余佳运 SINCE 1994",
					"picUrl": "http://p1.music.126.net/lQquBDnd1jVXU1W4lRVDQg==/109951164333148921.jpg",
					"tns": [],
					"pic_str": "109951164333148921",
					"pic": 109951164333148930
				},
				"dt": 274554,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10985056,
					"vd": -33632
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6591051,
					"vd": -31043
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4394048,
					"vd": -29455
				},
				"a": null,
				"cd": "01",
				"no": 8,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10882617,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Eudemon",
				"id": 1388351993,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12003038,
						"name": "凯瑟喵",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"树林与鹿的对话"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81328341,
					"name": "Eudemon",
					"picUrl": "http://p1.music.126.net/J3AsA6QDXjJgqEzGyLTGpQ==/109951164341600947.jpg",
					"tns": [],
					"pic_str": "109951164341600947",
					"pic": 109951164341600940
				},
				"dt": 242248,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9692517,
					"vd": -32163
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5815528,
					"vd": -29531
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3877033,
					"vd": -27806
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8256,
				"mv": 0,
				"mst": 9,
				"cp": 1416190,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "今天你也拥有",
				"id": 1387636311,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12174521,
						"name": "音阙诗听",
						"tns": [],
						"alias": []
					},
					{
						"id": 12115067,
						"name": "夏宁鸽",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81262357,
					"name": "今天你也拥有",
					"picUrl": "http://p1.music.126.net/-rPm4XNqrTRu5DXMYRLKNQ==/109951164333555020.jpg",
					"tns": [],
					"pic_str": "109951164333555020",
					"pic": 109951164333555020
				},
				"dt": 180000,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7202525,
					"vd": -46637
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4321533,
					"vd": -44017
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2881036,
					"vd": -42274
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416070,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "でしょましょ",
				"id": 1390397311,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 159300,
						"name": "米津玄師",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81580388,
					"name": "馬と鹿",
					"picUrl": "http://p1.music.126.net/5rJzp8NlvVQw-x_j7Lj_mw==/109951164357916489.jpg",
					"tns": [],
					"pic_str": "109951164357916489",
					"pic": 109951164357916500
				},
				"dt": 172564,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6903685,
					"vd": -40411
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4142228,
					"vd": -37831
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2761500,
					"vd": -36155
				},
				"a": null,
				"cd": "01",
				"no": 3,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 7001,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568131200000
			},
			{
				"name": "命不由天 (Live)",
				"id": 1387611797,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13899303,
						"name": "杨和苏KeyNG",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81260331,
					"name": "中国新说唱2019 第十二期",
					"picUrl": "http://p1.music.126.net/H4ryR1IdYYdy4MTuJltUNw==/109951164333318771.jpg",
					"tns": [],
					"pic_str": "109951164333318771",
					"pic": 109951164333318770
				},
				"dt": 234198,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9370605,
					"vd": -71333
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5622381,
					"vd": -68814
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3748269,
					"vd": -67453
				},
				"a": null,
				"cd": "01",
				"no": 6,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "友情以上",
				"id": 1390643014,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12145025,
						"name": "彭昱畅",
						"tns": [],
						"alias": []
					},
					{
						"id": 30111335,
						"name": "章若楠",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"电影《友情以上》同名推广曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 7,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81610611,
					"name": "友情以上",
					"picUrl": "http://p1.music.126.net/-WmM7Gcv_QyFqRs03OEHhg==/109951164364079262.jpg",
					"tns": [],
					"pic_str": "109951164364079262",
					"pic": 109951164364079260
				},
				"dt": 218139,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8728076,
					"vd": -14106
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5236863,
					"vd": -11523
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3491257,
					"vd": -9836
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10892114,
				"mst": 9,
				"cp": 405013,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Fashion God",
				"id": 1388799904,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12914544,
						"name": "马伯骞",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 7,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81591457,
					"name": "UNTITLED",
					"picUrl": "http://p1.music.126.net/Svw8IuKjYOkW3EisQf8fWA==/109951164358591139.jpg",
					"tns": [],
					"pic_str": "109951164358591139",
					"pic": 109951164358591140
				},
				"dt": 212038,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8484615,
					"vd": -39355
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5090786,
					"vd": -36799
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3393872,
					"vd": -35304
				},
				"a": null,
				"cd": "01",
				"no": 2,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 1415934,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567699200000
			},
			{
				"name": "盗橘令",
				"id": 1389654852,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 188565,
						"name": "银临",
						"tns": [],
						"alias": []
					},
					{
						"id": 961358,
						"name": "不才",
						"tns": [],
						"alias": []
					},
					{
						"id": 981005,
						"name": "云の泣",
						"tns": [],
						"alias": []
					},
					{
						"id": 188558,
						"name": "Aki阿杰",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81418891,
					"name": "盗橘令",
					"picUrl": "http://p1.music.126.net/7r0_uqUB3Wti3bXe3f-khg==/109951164350885374.jpg",
					"tns": [],
					"pic_str": "109951164350885374",
					"pic": 109951164350885380
				},
				"dt": 275173,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 11009089,
					"vd": -64947
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6605471,
					"vd": -62391
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4403662,
					"vd": -60618
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "噪音",
				"id": 1390897155,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 31668975,
						"name": "Lambert",
						"tns": [],
						"alias": []
					},
					{
						"id": 12270985,
						"name": "十七草",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81640701,
					"name": "噪音",
					"picUrl": "http://p1.music.126.net/3A9bmAHhY82YEg3AzuuMDQ==/109951164363979764.jpg",
					"tns": [],
					"pic_str": "109951164363979764",
					"pic": 109951164363979760
				},
				"dt": 174303,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6974738,
					"vd": -46778
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4184860,
					"vd": -44215
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2789921,
					"vd": -42766
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416410,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "关于我",
				"id": 1388770818,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 32725601,
						"name": "苏晗",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81372548,
					"name": "关于我",
					"picUrl": "http://p1.music.126.net/jZ0S89PtXq5tL4ZZdF8y-g==/109951164344694993.jpg",
					"tns": [],
					"pic_str": "109951164344694993",
					"pic": 109951164344694990
				},
				"dt": 0,
				"h": null,
				"m": null,
				"l": null,
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1398818,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "鲸落（whale fall）",
				"id": 1390469916,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12798217,
						"name": "刘思鉴",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 0,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81545965,
					"name": "治郁鲸",
					"picUrl": "http://p1.music.126.net/MMQ-4yhc_4jAsK6sm26p-A==/109951164358504964.jpg",
					"tns": [],
					"pic_str": "109951164358504964",
					"pic": 109951164358504960
				},
				"dt": 153600,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6145965,
					"vd": -22367
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3687597,
					"vd": -19746
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2458413,
					"vd": -18084
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "开荒",
				"id": 1385367316,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 8103,
						"name": "花粥",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81049723,
					"name": "开荒",
					"picUrl": "http://p1.music.126.net/pNmOEo2QF8Un2MBRll5RLw==/109951164308185851.jpg",
					"tns": [],
					"pic_str": "109951164308185851",
					"pic": 109951164308185860
				},
				"dt": 228949,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9160664,
					"vd": 15296
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5496416,
					"vd": 17934
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3664292,
					"vd": 19722
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "世界（world）",
				"id": 1387470762,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12119569,
						"name": "李迦南Doc",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 5,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81242457,
					"name": "世界",
					"picUrl": "http://p1.music.126.net/FRLlHZ13zAMH7hmMOAS4OA==/109951164331673425.jpg",
					"tns": [],
					"pic_str": "109951164331673425",
					"pic": 109951164331673420
				},
				"dt": 306750,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 12272370,
					"vd": -43265
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 7363440,
					"vd": -40823
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4908974,
					"vd": -39534
				},
				"a": null,
				"cd": "01",
				"no": 0,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "We Are Young (Live)",
				"id": 1387615548,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 7763,
						"name": "G.E.M.邓紫棋",
						"tns": [],
						"alias": []
					},
					{
						"id": 12060060,
						"name": "OB03",
						"tns": [],
						"alias": []
					},
					{
						"id": 12157298,
						"name": "刘炫廷",
						"tns": [],
						"alias": []
					},
					{
						"id": 12193174,
						"name": "Capper",
						"tns": [],
						"alias": []
					},
					{
						"id": 1199064,
						"name": "福克斯",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81260331,
					"name": "中国新说唱2019 第十二期",
					"picUrl": "http://p1.music.126.net/H4ryR1IdYYdy4MTuJltUNw==/109951164333318771.jpg",
					"tns": [],
					"pic_str": "109951164333318771",
					"pic": 109951164333318770
				},
				"dt": 232917,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 9318765,
					"vd": -75384
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5591277,
					"vd": -72857
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3727533,
					"vd": -71387
				},
				"a": null,
				"cd": "01",
				"no": 5,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1416289,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "π",
				"id": 1386891590,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13497629,
						"name": "孟子坤",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81176403,
					"name": "π",
					"picUrl": "http://p1.music.126.net/caeyQ12LUxrY3f_fjfxDPA==/109951164325920950.jpg",
					"tns": [],
					"pic_str": "109951164325920950",
					"pic": 109951164325920940
				},
				"dt": 170673,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6829485,
					"vd": -44301
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4097709,
					"vd": -41710
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2731821,
					"vd": -40005
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 660010,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567095720000
			},
			{
				"name": "欺",
				"id": 1389806911,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12565467,
						"name": "$HI",
						"tns": [],
						"alias": []
					},
					{
						"id": 1199064,
						"name": "福克斯",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 7,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81413308,
					"name": "欺",
					"picUrl": "http://p1.music.126.net/BGOnX-LFYzBnzhy2aXOMfw==/109951164352855363.jpg",
					"tns": [],
					"pic_str": "109951164352855363",
					"pic": 109951164352855360
				},
				"dt": 0,
				"h": null,
				"m": null,
				"l": null,
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 0,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "那些都不是我",
				"id": 1388664695,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 2524,
						"name": "大张伟",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81356607,
					"name": "那些都不是我",
					"picUrl": "http://p1.music.126.net/lNhSA85hnIQYKqMU7ocSLw==/109951164343979989.jpg",
					"tns": [],
					"pic_str": "109951164343979989",
					"pic": 109951164343979980
				},
				"dt": 219846,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8797040,
					"vd": -73806
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 5278241,
					"vd": -71285
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3518842,
					"vd": -69786
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 22036,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567353600000
			},
			{
				"name": "从没有爱过",
				"id": 1385110642,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12460308,
						"name": "于大海（于黑蛋）",
						"tns": [],
						"alias": []
					},
					{
						"id": 13838020,
						"name": "姚雪",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 6,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81026443,
					"name": "从没有爱过",
					"picUrl": "http://p1.music.126.net/1xTsxEiIDuOBShXwY214GA==/109951164305179248.jpg",
					"tns": [],
					"pic_str": "109951164305179248",
					"pic": 109951164305179250
				},
				"dt": 185136,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 7408370,
					"vd": -45133
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4445040,
					"vd": -42555
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2963374,
					"vd": -40873
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 1398818,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "REAL×EYEZ  -Tv size-",
				"id": 1387775103,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 840892,
						"name": "J",
						"tns": [],
						"alias": []
					},
					{
						"id": 15557,
						"name": "西川貴教",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"特摄《假面骑士ZERO-ONE》主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81276480,
					"name": "REAL×EYEZ",
					"picUrl": "http://p1.music.126.net/Aw_jGN-_e2B8vAAhEj1QjQ==/109951164335041770.jpg",
					"tns": [],
					"pic_str": "109951164335041770",
					"pic": 109951164335041780
				},
				"dt": 68983,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 2761709,
					"vd": -4164
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 1657043,
					"vd": -1724
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 1104710,
					"vd": -128
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8320,
				"mv": 0,
				"mst": 9,
				"cp": 457010,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "不晚",
				"id": 1386055857,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 9548,
						"name": "田馥甄",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"电影《深夜食堂》主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81104012,
					"name": "不晚",
					"picUrl": "http://p1.music.126.net/StUrdwNyetQm0wbAy9gb2w==/109951164315975014.jpg",
					"tns": [],
					"pic_str": "109951164315975014",
					"pic": 109951164315975000
				},
				"dt": 255159,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10208685,
					"vd": -24194
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6125229,
					"vd": -21577
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4083501,
					"vd": -19917
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 10886222,
				"mst": 9,
				"cp": 1416401,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "山月",
				"id": 1385560525,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12084229,
						"name": "焦迈奇",
						"tns": [],
						"alias": []
					}
				],
				"alia": [
					"电视剧《山月不知心底事》同名主题曲"
				],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 9,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81176278,
					"name": "山月不知心底事 电视剧原声带",
					"picUrl": "http://p1.music.126.net/JqMIWtgbiaJvqf2h6az9cA==/109951164325865599.jpg",
					"tns": [],
					"pic_str": "109951164325865599",
					"pic": 109951164325865600
				},
				"dt": 270859,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 10836680,
					"vd": -14072
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 6502026,
					"vd": -11444
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 4334698,
					"vd": -9692
				},
				"a": null,
				"cd": "01",
				"no": 4,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 8192,
				"mv": 10892053,
				"mst": 9,
				"cp": 1415854,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Father of All...",
				"id": 1389394936,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 93187,
						"name": "Green Day",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81456312,
					"name": "Father of All...",
					"picUrl": "http://p1.music.126.net/MUZg6pvAf5StLKpQwut_Zg==/109951164348896004.jpg",
					"tns": [],
					"pic_str": "109951164348896004",
					"pic": 109951164348896000
				},
				"dt": 151405,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6057317,
					"vd": -72620
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3634408,
					"vd": -70230
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2422953,
					"vd": -69162
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 0,
				"mst": 9,
				"cp": 7002,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568044800000
			},
			{
				"name": "角落",
				"id": 1385858544,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 13296269,
						"name": "哼哼是李韩宇",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 3,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81084979,
					"name": "角落",
					"picUrl": "http://p1.music.126.net/1cgHPpY61BjZBOzHsFQ2mQ==/109951164313528915.jpg",
					"tns": [],
					"pic_str": "109951164313528915",
					"pic": 109951164313528910
				},
				"dt": 204445,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8180550,
					"vd": 16037
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4908347,
					"vd": 18627
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3272246,
					"vd": 20278
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 0,
				"s_id": 0,
				"mark": 0,
				"mv": 0,
				"mst": 9,
				"cp": 445010,
				"rtype": 0,
				"rurl": null,
				"publishTime": 0
			},
			{
				"name": "Mr. Navigator",
				"id": 1390412740,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 27621,
						"name": "Armin van Buuren",
						"tns": [],
						"alias": []
					},
					{
						"id": 663001,
						"name": "Tempo Giusto",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81584572,
					"name": "Mr. Navigator",
					"picUrl": "http://p1.music.126.net/7hb-gtQWB0-4AA12Gy3YRQ==/109951164358004698.jpg",
					"tns": [],
					"pic_str": "109951164358004698",
					"pic": 109951164358004700
				},
				"dt": 152238,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 6091799,
					"vd": -52743
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 3655097,
					"vd": -50257
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 2436746,
					"vd": -48970
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10892151,
				"mst": 9,
				"cp": 665010,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1568304000000
			},
			{
				"name": "Liar",
				"id": 1388811867,
				"pst": 0,
				"t": 0,
				"ar": [
					{
						"id": 12136039,
						"name": "Camila Cabello",
						"tns": [],
						"alias": []
					}
				],
				"alia": [],
				"pop": 100,
				"st": 0,
				"rt": "",
				"fee": 8,
				"v": 4,
				"crbt": null,
				"cf": "",
				"al": {
					"id": 81378023,
					"name": "Liar",
					"picUrl": "http://p1.music.126.net/ZTd6lJa_ZvdCqG5vePbK0A==/109951164345137390.jpg",
					"tns": [],
					"pic_str": "109951164345137390",
					"pic": 109951164345137390
				},
				"dt": 207098,
				"h": {
					"br": 320000,
					"fid": 0,
					"size": 8283995,
					"vd": -53973
				},
				"m": {
					"br": 192000,
					"fid": 0,
					"size": 4970414,
					"vd": -51443
				},
				"l": {
					"br": 128000,
					"fid": 0,
					"size": 3313624,
					"vd": -49865
				},
				"a": null,
				"cd": "01",
				"no": 1,
				"rtUrl": null,
				"ftype": 0,
				"rtUrls": [],
				"djId": 0,
				"copyright": 1,
				"s_id": 0,
				"mark": 8192,
				"mv": 10891016,
				"mst": 9,
				"cp": 7001,
				"rtype": 0,
				"rurl": null,
				"publishTime": 1567526400000
			}];
						
					
		// const {  } = this.props;
		return (
			<div className = "topList">
				<div className = "topList-leftBar">
					<TopListBar title = "云音乐特色榜" topListData = { data }  isoffical = { false } />
					<TopListBar title = "全球媒体榜" topListData = { data }  isoffical = { true } />
				</div>
				<div className = "topList-rightBar">
					{/* <div className = "></div> */}
					<div className = "topList-rightBar-list">
						<div   >
							<ul>
								<li style = {{ width: "77px" }} className = "topList-rightBar-list-li">

								</li >
								<li style = {{ width: "327px" }} className = "topList-rightBar-list-li">
									标题
								</li>
								<li style = {{ width: "91px" }} className = "topList-rightBar-list-li">
									时长
								</li>
								<li style = {{ width: "173px" }} className = "topList-rightBar-list-li">
									歌手
								</li>
							</ul>
						</div>
					</div>
					{
						data1.map(( item,index )=>{

							if(index<3) {
								if ( (index+1)%2===0 ) {
									return <TopListItem data = { item }  index = { index+1 } haveImg = { true } isWhite={ true } />
								}
								else return <TopListItem data = { item }  index = { index+1 } haveImg = { true } isWhite={ false } />
							}
							else {
								if ( (index+1)%2===0 ) {
									return <TopListItem data = { item }  index = { index+1 } haveImg = { false } isWhite={ true } />
								}
								else return <TopListItem data = { item }  index = { index+1 } haveImg = { false } isWhite={ false } />

							}



						})

					}





				</div>

			</div>


		);


	}


}
export default TopList;