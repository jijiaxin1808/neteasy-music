import React from "react";
import "./index.less";
import { Link } from "dva/router";
import getTime from "../../assets/time";

class Comment extends React.Component {
	render() {
		const data = [
			{
				"user": {
					"locationInfo": null,
					"liveInfo": null,
					"authStatus": 0,
					"avatarUrl": "https://p4.music.126.net/bqDGNOLYxRouPJEKuTxbeA==/3250156386530222.jpg",
					"experts": null,
					"userType": 0,
					"vipRights": null,
					"userId": 314007678,
					"nickname": "长工331",
					
					"vipType": 0,
					"expertTags": null,
					"remarkName": null
				},
				"beReplied": [
					{
						"user": {
							"locationInfo": null,
							"liveInfo": null,
							"authStatus": 0,
							"avatarUrl": "https://p3.music.126.net/uqqqxL_JV30DTjUJ4S6fRw==/109951164335732541.jpg",
							"experts": null,
							"userType": 0,
							"vipRights": null,
							"userId": 450425196,
							"nickname": "良月二十-",
							"vipType": 0,
							
							"expertTags": null,
							"remarkName": null
						},
						"beRepliedCommentId": 1630899927,
						"content": "你对我说了无数次晚安\n你会为了我的一句话欣喜若狂\n你会在一个美好的清晨与我散散步\n你会告诉我你的未来规划\n你会跑十公里来到我身边\n你会买我喜欢的东西给我吃\n你会...可是 你现在什么都不会为我了",
						"status": 0,
						"expressionUrl": null
					}
				],
				"pendantData": null,
				"showFloorComment": null,
				"status": 0,
				"commentId": 1630984543,
				"content": "yes\n",
				"time": 1568721207946,
				"likedCount": 0,
				"expressionUrl": null,
				"commentLocationType": 0,
				"parentCommentId": 1630899927,
				"decoration": {},
				"repliedMark": null,
				"liked": false
			}
		];
		const func = ()=>{
			data.map(( item,index )=>{
				<div className = "comment">
					<img src = { item.user.avatarUrl } />
					<div>
						<p>
							<Link to = "/" >{ item.user.nickname }</Link>:
							{ item.content }
						</p>
					</div>
					<div>
						{
							getTime(item.time)
						}
						<span></span>
						

					</div>


				</div>;


			});


		};


		return (
			<div></div>
		);


	}



}


export default Comment;