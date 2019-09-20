import React,{ Fragment } from "react";
import classnames from "classnames";
import "./index.less";
import { is } from "immutable";

class ToTop extends React.Component {
	constructor() {
		super();
		this.state={
			isshow : false
		};
	}

	render() {
		const func = ()=> {
			window.scrollTo(0,0);	
		};
		document.body.onscroll = ()=>{
			console.log(document.documentElement.scrollTop);
			if( document.documentElement.scrollTop>400) {
				this.setState({isshow:true})
			}
			else {
				this.setState({isshow:false})
			}
		}
		let scrollTop = document.documentElement.scrollTop;
		return (
			<Fragment>
				<div 
					onClick = { ()=>{func();} } 
					className = {classnames({
						totop: this.state.isshow ,
						totophide: !this.state.isshow
					})} 
					data = { scrollTop }  >
					回到顶部
				</div>
			</Fragment>

		);

	}


}
export default ToTop;