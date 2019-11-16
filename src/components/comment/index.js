import React from "react";
import "./index.less";
import { Link } from "react-router-dom";
import getTime from "../../assets/time";
import CommentInput from "./comment-input";
import { connect } from "dva";

class Comment extends React.Component {
	componentDidMount() {

		this.props.initComment(this.props.type,this.props.id);
		//props需要传入的参数为   type 和 id  type为字符串格式
	}
	render() {
		const { comment,handleLike,type,id } = this.props;
		const beReplied = (item)=> {
			if( item.beReplied.length ) {

				return (
					<div className = "comment-beReplied">
						<span className="daar">
							<i className="bd">◆</i>
							<i className="bg">◆</i>
						</span>
						<div className = "comment-content-main">
							<Link to = "/" className = "comment-user-name" >{ item.beReplied[0].user.nickname  }:</Link>
							<p>{ item.beReplied[0].content }</p>
						</div>
					</div>
				);														
			}
			else 
				return null;
		};

		const func = ()=> {
			if( comment.data ) {
				return (
					<div className = {"comment"}>
						<CommentInput commentCount = { comment.data.length}  />
						<div className = "comment-header">最新评论</div>
						{	
							comment.data.map(( item, index )=>{
								return (
									<div className = "comment-item"  key = { index }>
										<img src = { item.user.avatarUrl }  alt = { item.user.avatarUrl }/>
										<div  className = "comment-content">
											<div className = "comment-content-main">
												<Link to = "/" className = "comment-user-name" >{ item.user.nickname }:</Link>
												<p>{ item.content }</p>
												{
													beReplied(item)
												}
											</div>
											<div className = "comment-content-footer">
												{
													getTime(1569996398761)
												}
												<span>
													<i className = { item.liked?"comment-item-like":"comment-item-unlike" }
														onClick = {()=> {handleLike(type,id,item.commentId,item.liked?0:1);}  } ></i>
													<span style = {{ marginRight:"5px",display:"inline-block" }} >回复</span>
												</span>
											</div>
										</div>
									</div>
								);
							} )	}
					</div>
				);
			}
			else return (
				<div>加载中</div>
			);
		};

		return (
			<div>
				{
					func()
				}
			</div>

		);


	}



}
const mapDispatchToProps = (dispatch)=> ({
	initComment( type, id  ) {
		dispatch({
			type:"comment/getcomment",
			payload: {
				type:type,
				id:id
			}
		});
	},//传入  评论所属类型和对应id
	handleLike( type, id, cid, t ) {
		dispatch({
			type: "comment/commentlike",
			payload: {
				type: type,
				id: id,
				cid: cid,
				t: t
			}
		});


	},//传入 type 目标id 和 目标评论的cid 和点赞/取消带点赞
});



export default  connect(({comment})=>({comment}),mapDispatchToProps)(Comment);