import React,{ Fragment } from "react";
import "./index.less";

class ComponentInput extends React.Component {
	render() {
		return (
			<Fragment>
				<div className = "comment-input-header">
					<p>评论</p>
					<span>{`共${111}条评论`}</span>
				</div>
				<div className = "comment-input-content">
					<img src = "http://p4.music.126.net/ma8NC_MpYqC-dK_L81FWXQ==/109951163250233892.jpg?param=50y50"  
						alt = "头像" width = "50px" height = "50px" className = "comment-input-Avatar"
					/>
					<textarea placeholder = "评论" className = "comment-input-textarea">
					</textarea>
					<div className = "comment-input-footer">
						<span>
							<i>表情</i>
							<i>@</i>
						</span>
						<div>
							<span>{`${140}`}</span>
							<span>评论</span>
						</div>
                        
					</div>
				</div>


			</Fragment>
		);
	}
}

export default ComponentInput;