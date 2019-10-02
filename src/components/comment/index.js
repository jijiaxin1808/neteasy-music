import React from "react";
import "./index.less";
import { NavLink } from "react-router-dom";
import getTime from "../../assets/time";
import CommentInput from "./comment-input";
import { connect } from "dva";

class Comment extends React.Component {
	componentDidMount() {

		this.props.initComment(this.props.type,this.props.id);
		//props需要传入的参数为   type 和 id  type为字符串格式
	}
	render() {
		const { className,comment,handleLike,type,id } = this.props;


		const func = ()=> {
			if( comment.data ) {
				return (
					<div className = {className}>
						<CommentInput />
						<div className = "comment-header">最新评论</div>
						{	
							comment.data.map(( item )=>{
								return (
									<div className = "comment-item">
										<img src = { item.user.avatarUrl }  alt = { item.user.avatarUrl }/>
										<div  className = "comment-content">
											<div className = "comment-content-main">
												<NavLink to = "/" className = "comment-user-name" >{ item.user.nickname }:</NavLink>
												<p>{ item.content }</p>
												{
													()=>{
														if( item.beReplied ) {
															return (
																<div className = "comment-beReplied">
																	<span className="daar">
																		<i className="bd">◆</i>
																		<i className="bg">◆</i>
																	</span>
																	<div className = "comment-content-main">
																		<NavLink to = "/" className = "comment-user-name" >{ item.beReplied[0].user.nickname  }:</NavLink>
																		<p>{ item.beReplied[0].content }</p>
																	</div>
																</div>
															);														
														}
		
													}}
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