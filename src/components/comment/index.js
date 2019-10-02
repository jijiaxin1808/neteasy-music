import React from "react";
import "./index.less";
import { NavLink } from "react-router-dom";
import getTime from "../../assets/time";
import CommentInput from "./comment-input";

class Comment extends React.Component {
	render() {
		const { data1,className } = this.props;
		const func = ()=> {
			if( data1 ) {
				return (
					<div className = {className}>
						<CommentInput />
						<div className = "comment-header">最新评论</div>
						{	
							data1.map(( item )=>{
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
													getTime(item.time)
												}
												<span>
													<i className = { item.liked?"comment-item-like":"comment-item-unlike" } ></i>
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


export default Comment;