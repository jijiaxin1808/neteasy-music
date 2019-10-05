import React from "react";
import "./index.less";
import Comment from "../../components/comment";
import { Link } from "react-router-dom";

// const ProgramComment = ( props )=> {
// 	return (
// 		<div className = "program-comment">

// 		</div>
// 	);
// };










class Program extends React.Component {
	render() {
		return (
			<div className = "program">
				<div className = "program-conent">
					<Comment type = "dj" id = { 2063454692 } />
				</div>
				<div className = "program-sidebar">
					<p className = "program-sidebar-more"> 
						<Link to = "/"> 
                            更多节目
						</Link>    
						<Link to = "/"> 
                            全部>
						</Link>    
                    
					</p>   


				</div>
			</div>
		);
	}
}
export default Program;


