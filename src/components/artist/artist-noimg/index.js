import React from "react";
import "./index.less";
import { Link } from "dva/router";

class ArtistNoImg extends React.Component {
	// const { data } = this.props;
    
	render() {
		const data = [
			{
				"img1v1Id": 109951164232034480,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 9,
				"briefDesc": "",
				"musicSize": 46,
				"img1v1Url": "https://p2.music.126.net/Xl0WENt4F6wsgjjjQWuQsw==/109951164232034479.jpg",
				"picId": 109951164232057950,
				"trans": "",
				"picUrl": "https://p2.music.126.net/uTwOm8AEFFX_BYHvfvFcmQ==/109951164232057952.jpg",
				"name": "隔壁老樊",
				"id": 12429072,
				"accountId": 277313426,
				"picId_str": "109951164232057952",
				"img1v1Id_str": "109951164232034479"
			},
			{
				"img1v1Id": 109951163765021940,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 16,
				"briefDesc": "",
				"musicSize": 196,
				"img1v1Url": "https://p2.music.126.net/jq8QrogorsmwJv3Xn7_UOQ==/109951163765021940.jpg",
				"picId": 109951163765026270,
				"trans": "",
				"picUrl": "https://p2.music.126.net/W__FCWFiyq0JdPtuLJoZVQ==/109951163765026271.jpg",
				"name": "薛之谦",
				"id": 5781,
				"accountId": 97137413,
				"picId_str": "109951163765026271",
				"img1v1Id_str": "109951163765021940"
			},
			{
				"img1v1Id": 3263350518850877,
				"topicPerson": 0,
				"alias": [
					"JJ Lin"
				],
				"followed": false,
				"albumSize": 42,
				"briefDesc": "",
				"musicSize": 479,
				"img1v1Url": "https://p2.music.126.net/cnGpIQ6rQCKVrDyVVSpzeg==/3263350518850877.jpg",
				"picId": 3389794350704969,
				"trans": "",
				"picUrl": "https://p2.music.126.net/_cB2figc8IpT89DYhpARxA==/3389794350704969.jpg",
				"name": "林俊杰",
				"id": 3684
			},
			{
				"img1v1Id": 19165587183900212,
				"topicPerson": 0,
				"alias": [
					"Eason Chan"
				],
				"followed": false,
				"albumSize": 103,
				"briefDesc": "",
				"musicSize": 1626,
				"img1v1Url": "https://p2.music.126.net/_d1scu7z_1dmd0Zgv9mTLA==/19165587183900212.jpg",
				"picId": 18641120139241412,
				"trans": "",
				"picUrl": "https://p2.music.126.net/nILBk4DaE3yV__25uq-5GQ==/18641120139241412.jpg",
				"name": "陈奕迅",
				"id": 2116,
				"picId_str": "18641120139241412",
				"img1v1Id_str": "19165587183900212"
			},
			{
				"img1v1Id": 109951163536269820,
				"topicPerson": 0,
				"alias": [
					"Vae"
				],
				"followed": false,
				"albumSize": 31,
				"briefDesc": "",
				"musicSize": 176,
				"img1v1Url": "https://p2.music.126.net/ATZ8-mOxophKXrLC0iXMZw==/109951163536269820.jpg",
				"picId": 109951163536274580,
				"trans": "",
				"picUrl": "https://p2.music.126.net/_D9P0JKRDYm3jEay9EfhRw==/109951163536274581.jpg",
				"name": "许嵩",
				"id": 5771,
				"accountId": 31265745,
				"picId_str": "109951163536274581",
				"img1v1Id_str": "109951163536269820"
			},
			{
				"img1v1Id": 109951164299561090,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 20,
				"briefDesc": "",
				"musicSize": 87,
				"img1v1Url": "https://p2.music.126.net/TW2dCkVMk185rwvZc9dbYg==/109951164299561088.jpg",
				"picId": 109951164299556300,
				"trans": "",
				"picUrl": "https://p2.music.126.net/TXe6_7K8vU2t3ONubke0Lw==/109951164299556304.jpg",
				"name": "沈以诚",
				"id": 12002248,
				"accountId": 5700063,
				"picId_str": "109951164299556304",
				"img1v1Id_str": "109951164299561088"
			},
			{
				"img1v1Id": 109951163526038960,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 14,
				"briefDesc": "",
				"musicSize": 61,
				"img1v1Url": "https://p2.music.126.net/Nnc2iAzd_zCGDHs8rHVCzQ==/109951163526038958.jpg",
				"picId": 109951163526037980,
				"trans": "",
				"picUrl": "https://p2.music.126.net/G4cQjniXxn7hAxaT5CLXgQ==/109951163526037988.jpg",
				"name": "宝石gem",
				"id": 12084497,
				"accountId": 276385577,
				"picId_str": "109951163526037988",
				"img1v1Id_str": "109951163526038958"
			},
			{
				"img1v1Id": 109951164082495740,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 7,
				"briefDesc": "",
				"musicSize": 13,
				"img1v1Url": "https://p2.music.126.net/7unSVx4zd-iX5wViV74FhQ==/109951164082495743.jpg",
				"picId": 109951164082499570,
				"trans": "",
				"picUrl": "https://p2.music.126.net/eTxQR4lHlLGx5hX90uq3VA==/109951164082499569.jpg",
				"name": "颜人中",
				"id": 31376161,
				"accountId": 1750344369,
				"picId_str": "109951164082499569",
				"img1v1Id_str": "109951164082495743"
			},
			{
				"img1v1Id": 109951163424310880,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 19,
				"briefDesc": "",
				"musicSize": 49,
				"img1v1Url": "https://p2.music.126.net/4AFuQr4QxXlq-N3Uqun9AA==/109951163424310880.jpg",
				"picId": 109951163424310880,
				"trans": "",
				"picUrl": "https://p2.music.126.net/Vfo3G0fv4pf2YYUGpINxJg==/109951163424310879.jpg",
				"name": "徐秉龙",
				"id": 1197168,
				"accountId": 122690538,
				"picId_str": "109951163424310879",
				"img1v1Id_str": "109951163424310880"
			},
			{
				"img1v1Id": 109951163398568080,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 23,
				"briefDesc": "",
				"musicSize": 133,
				"img1v1Url": "https://p2.music.126.net/RQ8pNp66CqAsieGtSaj_5g==/109951163398568078.jpg",
				"picId": 109951163398561340,
				"trans": "",
				"picUrl": "https://p2.music.126.net/zYvSXBqlmL55t3CVo4VlDA==/109951163398561345.jpg",
				"name": "李荣浩",
				"id": 4292,
				"accountId": 6228671,
				"picId_str": "109951163398561345",
				"img1v1Id_str": "109951163398568078"
			},
			{
				"img1v1Id": 109951163062867500,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 17,
				"briefDesc": "",
				"musicSize": 137,
				"img1v1Url": "https://p2.music.126.net/ygk9_LT0yuzGUbIPZyLrKw==/109951163062867509.jpg",
				"picId": 109951163062867000,
				"trans": "",
				"picUrl": "https://p2.music.126.net/tDq0mY0vZowfQ0lqm_Ky_A==/109951163062867010.jpg",
				"name": "毛不易",
				"id": 12138269,
				"accountId": 1461695826,
				"picId_str": "109951163062867010",
				"img1v1Id_str": "109951163062867509"
			},
			{
				"img1v1Id": 109951163186203710,
				"topicPerson": 0,
				"alias": [
					"Yoga Lin"
				],
				"followed": false,
				"albumSize": 26,
				"briefDesc": "",
				"musicSize": 316,
				"img1v1Url": "https://p2.music.126.net/DeH1T1OKwTL2bIg3l8L21A==/109951163186203713.jpg",
				"picId": 109951163186202220,
				"trans": "",
				"picUrl": "https://p2.music.126.net/ZAP_c5J1QJEvFrR9Lq-adw==/109951163186202231.jpg",
				"name": "林宥嘉",
				"id": 3685,
				"accountId": 1390681736,
				"picId_str": "109951163186202231",
				"img1v1Id_str": "109951163186203713"
			},
			{
				"img1v1Id": 109951163511969170,
				"topicPerson": 0,
				"alias": [
					"Silence"
				],
				"followed": false,
				"albumSize": 51,
				"briefDesc": "",
				"musicSize": 310,
				"img1v1Url": "https://p2.music.126.net/e1V73y8t0G-mJMLJ8FK6dw==/109951163511969173.jpg",
				"picId": 109951163511967660,
				"trans": "",
				"picUrl": "https://p2.music.126.net/q-I4cF6k7MJ5K_fRxEvozg==/109951163511967669.jpg",
				"name": "汪苏泷",
				"id": 5538,
				"accountId": 18378979,
				"picId_str": "109951163511967669",
				"img1v1Id_str": "109951163511969173"
			},
			{
				"img1v1Id": 109951164111771680,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 10,
				"briefDesc": "",
				"musicSize": 84,
				"img1v1Url": "https://p2.music.126.net/-eVbZxkwYrG5OlXmhyhieg==/109951164111771686.jpg",
				"picId": 109951164111776050,
				"trans": "",
				"picUrl": "https://p2.music.126.net/7zbNkZGkaxcITQR_wliElg==/109951164111776054.jpg",
				"name": "焦迈奇",
				"id": 12084229,
				"accountId": 256233487,
				"picId_str": "109951164111776054",
				"img1v1Id_str": "109951164111771686"
			},
			{
				"img1v1Id": 109951163673667540,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 11,
				"briefDesc": "",
				"musicSize": 22,
				"img1v1Url": "https://p2.music.126.net/hnTY4xcGC2C-QCdmwB-3qw==/109951163673667529.jpg",
				"picId": 109951163673660260,
				"trans": "",
				"picUrl": "https://p2.music.126.net/OYFecqz59cnJTuGfE8jvvw==/109951163673660248.jpg",
				"name": "接个吻，开一枪",
				"id": 12085016,
				"accountId": 114305616,
				"picId_str": "109951163673660248",
				"img1v1Id_str": "109951163673667529"
			},
			{
				"img1v1Id": 109951164043093040,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 5,
				"briefDesc": "",
				"musicSize": 14,
				"img1v1Url": "https://p2.music.126.net/n2rO1PcTnM3pDxXPXqvdfw==/109951164043093036.jpg",
				"picId": 109951164043083860,
				"trans": "",
				"picUrl": "https://p2.music.126.net/ppS1HioeQzfkpXd-PU7DmQ==/109951164043083850.jpg",
				"name": "枯木逢春",
				"id": 30284835,
				"accountId": 72154439,
				"picId_str": "109951164043083850",
				"img1v1Id_str": "109951164043093036"
			},
			{
				"img1v1Id": 109951163998262580,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 7,
				"briefDesc": "",
				"musicSize": 13,
				"img1v1Url": "https://p2.music.126.net/i89BaRCl7lnmBS-c_BJLQQ==/109951163998262577.jpg",
				"picId": 109951163998251490,
				"trans": "",
				"picUrl": "https://p2.music.126.net/GDmn2uN6fA1hIbDEkFRE6Q==/109951163998251481.jpg",
				"name": "尚士达",
				"id": 13608761,
				"accountId": 535710448,
				"picId_str": "109951163998251481",
				"img1v1Id_str": "109951163998262577"
			},
			{
				"img1v1Id": 3238061747024716,
				"topicPerson": 0,
				"alias": [
					"Jacky Cheung"
				],
				"followed": false,
				"albumSize": 107,
				"briefDesc": "",
				"musicSize": 1982,
				"img1v1Url": "https://p2.music.126.net/1JG8Uwzb5XAJXaPUHR6RBw==/3238061747024716.jpg",
				"picId": 3286440257877602,
				"trans": "",
				"picUrl": "https://p2.music.126.net/Ear-Ycru9SHVKzEL39of9w==/3286440257877602.jpg",
				"name": "张学友",
				"id": 6460
			},
			{
				"img1v1Id": 109951164368160500,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 14,
				"briefDesc": "",
				"musicSize": 91,
				"img1v1Url": "https://p2.music.126.net/Jh2jYc1_uFH4VXT0ONQhyw==/109951164368160494.jpg",
				"picId": 109951164368167800,
				"trans": "",
				"picUrl": "https://p2.music.126.net/bo6I3eaKTC7lr-N2spt1Mg==/109951164368167803.jpg",
				"name": "福克斯",
				"id": 1199064,
				"accountId": 103975161,
				"picId_str": "109951164368167803",
				"img1v1Id_str": "109951164368160494"
			},
			{
				"img1v1Id": 109951163685564800,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 11,
				"briefDesc": "",
				"musicSize": 37,
				"img1v1Url": "https://p2.music.126.net/aUI2kjbL2_0AHPK-e6tFpg==/109951163685564794.jpg",
				"picId": 109951163685567660,
				"trans": "",
				"picUrl": "https://p2.music.126.net/bZZWMYRzpmsgoo4ojshjcw==/109951163685567666.jpg",
				"name": "解忧邵帅",
				"id": 29392693,
				"accountId": 510572587,
				"picId_str": "109951163685567666",
				"img1v1Id_str": "109951163685564794"
			},
			{
				"img1v1Id": 109951164158509630,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 31,
				"briefDesc": "",
				"musicSize": 159,
				"img1v1Url": "https://p2.music.126.net/eiazGAbIGMBF-Q9lInm5xw==/109951164158509628.jpg",
				"picId": 109951164158510110,
				"trans": "",
				"picUrl": "https://p2.music.126.net/tMH2KjUioNW57zbixCA5Pg==/109951164158510116.jpg",
				"name": "华晨宇",
				"id": 861777,
				"accountId": 43745724,
				"picId_str": "109951164158510116",
				"img1v1Id_str": "109951164158509628"
			},
			{
				"img1v1Id": 109951164328459780,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 7,
				"briefDesc": "",
				"musicSize": 16,
				"img1v1Url": "https://p2.music.126.net/gLF2ZfUKXlmTnjw9K4ol3Q==/109951164328459780.jpg",
				"picId": 109951164328463680,
				"trans": "",
				"picUrl": "https://p2.music.126.net/61iU1xxzAGQ9W4PjrZj4lw==/109951164328463675.jpg",
				"name": "小咪",
				"id": 30616479,
				"accountId": 1677610259,
				"picId_str": "109951164328463675",
				"img1v1Id_str": "109951164328459780"
			},
			{
				"img1v1Id": 109951163794166850,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 6,
				"briefDesc": "",
				"musicSize": 10,
				"img1v1Url": "https://p2.music.126.net/vq2iAIvbs-MhCWuwSHatMw==/109951163794166854.jpg",
				"picId": 109951163794705600,
				"trans": "",
				"picUrl": "https://p2.music.126.net/6_zRwqQWwKdrkClWcvUk1A==/109951163794705607.jpg",
				"name": "井胧",
				"id": 31253654,
				"accountId": 517725395,
				"picId_str": "109951163794705607",
				"img1v1Id_str": "109951163794166854"
			},
			{
				"img1v1Id": 109951163790740340,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 21,
				"briefDesc": "",
				"musicSize": 71,
				"img1v1Url": "https://p2.music.126.net/Kksmk8aiQByjqcsrDukVlQ==/109951163790740338.jpg",
				"picId": 109951163790766880,
				"trans": "",
				"picUrl": "https://p2.music.126.net/bkI5VvYQyzr-fUR7-5Sz-w==/109951163790766878.jpg",
				"name": "刘聪KEY.L",
				"id": 12788674,
				"accountId": 628544576,
				"picId_str": "109951163790766878",
				"img1v1Id_str": "109951163790740338"
			},
			{
				"img1v1Id": 109951164260418660,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 8,
				"briefDesc": "",
				"musicSize": 42,
				"img1v1Url": "https://p2.music.126.net/dME_SfQJ3_eTFmC-CKrmDQ==/109951164260418653.jpg",
				"picId": 109951164260417680,
				"trans": "",
				"picUrl": "https://p2.music.126.net/1sT73LElKnctICS9Bv7Duw==/109951164260417674.jpg",
				"name": "杨和苏KeyNG",
				"id": 13899303,
				"accountId": 1466104991,
				"picId_str": "109951164260417674",
				"img1v1Id_str": "109951164260418653"
			},
			{
				"img1v1Id": 109951163664620180,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 16,
				"briefDesc": "",
				"musicSize": 64,
				"img1v1Url": "https://p2.music.126.net/pY8ulHjcRPWUGgbMBpehkQ==/109951163664620183.jpg",
				"picId": 109951163664620180,
				"trans": "",
				"picUrl": "https://p2.music.126.net/qLLALOy08DZJO9raDsWeEg==/109951163664620182.jpg",
				"name": "Ice Paper",
				"id": 12121264,
				"accountId": 320485224,
				"picId_str": "109951163664620182",
				"img1v1Id_str": "109951163664620183"
			},
			{
				"img1v1Id": 109951163444653380,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 5,
				"briefDesc": "",
				"musicSize": 32,
				"img1v1Url": "https://p2.music.126.net/R8TtIktb_Be6UWUSfb3GxQ==/109951163444653368.jpg",
				"picId": 109951163444654340,
				"trans": "",
				"picUrl": "https://p2.music.126.net/WGQqI_gfLL3mnLra-8PYhA==/109951163444654329.jpg",
				"name": "郭顶",
				"id": 2843,
				"accountId": 349660440,
				"picId_str": "109951163444654329",
				"img1v1Id_str": "109951163444653368"
			},
			{
				"img1v1Id": 264982302310377,
				"topicPerson": 0,
				"alias": [
					"Leehom Wang"
				],
				"followed": false,
				"albumSize": 44,
				"briefDesc": "",
				"musicSize": 733,
				"img1v1Url": "https://p2.music.126.net/3sYHMtCKpWIxt9G12yjUTw==/264982302310377.jpg",
				"picId": 202310139527235,
				"trans": "",
				"picUrl": "https://p2.music.126.net/XOx-Fl3hsNJXWNptumhOQg==/202310139527235.jpg",
				"name": "王力宏",
				"id": 5346,
				"accountId": 52641121
			},
			{
				"img1v1Id": 109951163766132580,
				"topicPerson": 0,
				"alias": [
					"Will Pan",
					"Wilber Pan"
				],
				"followed": false,
				"albumSize": 24,
				"briefDesc": "",
				"musicSize": 254,
				"img1v1Url": "https://p2.music.126.net/asVuDL1yCxr1J3zfY2EaxA==/109951163766132580.jpg",
				"picId": 109951163766134130,
				"trans": "",
				"picUrl": "https://p2.music.126.net/VbC0CDRFn-4fesL6eJFWjQ==/109951163766134127.jpg",
				"name": "潘玮柏",
				"id": 4723,
				"accountId": 538911628,
				"picId_str": "109951163766134127",
				"img1v1Id_str": "109951163766132580"
			},
			{
				"img1v1Id": 109951164077910300,
				"topicPerson": 0,
				"alias": [],
				"followed": false,
				"albumSize": 4,
				"briefDesc": "",
				"musicSize": 5,
				"img1v1Url": "https://p2.music.126.net/cQVzMgdaHZDPSaxjxT-aTg==/109951164077910301.jpg",
				"picId": 109951164077916540,
				"trans": "",
				"picUrl": "https://p2.music.126.net/y96i1iwutCHLDmOSg7wKoA==/109951164077916536.jpg",
				"name": "en",
				"id": 32220939,
				"accountId": 1412947677,
				"picId_str": "109951164077916536",
				"img1v1Id_str": "109951164077910301"
			}
		];
		return (
			<div className = "artist-noimg">
				<ul>
					{
						data.map(( item,index )=> {
							return (
								<li className = "artist-noimg-li">
									<Link to = {`/artist?id=${ item.id }`}>
										{ item.name }<span className = "u-icn-5555"></span>
									</Link>
								</li>
							);
						})

					}
				</ul>
			</div>
		);


	}

}
export default ArtistNoImg;