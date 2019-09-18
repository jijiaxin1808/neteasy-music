import React from "react";
import "./index.less";
import { Link } from "dva/router";



class TopListItem extends React.Component {
	render() {
		const { data,index,haveImg,isWhite } = this.props;
		return (
			<div>
				
				{
					(() => {
						if( haveImg ) {
							return (
								<ul className = { "topList-item-ul-white" } >
									<li style = {{ width: "77px" }} className = "topList-item-li space-around">
										<p> { index }</p> <span className = "u-icn-75"></span>
									</li >
									<li style = {{ width: "327px" }} className = "topList-item-li">


										<img src = { data.al.picUrl } alt = { data.name } className = "topList-item-li-img" />

										<span className = "m-table .ply "></span>
										<Link to = "/" >{ data.name }</Link>
									</li>
									<li style = {{ width: "91px" }} className ="topList-item-li">
										{ "时长" }
									</li>
									<li style = {{ width: "173px" }} className = "topList-item-li">
										<p>{ data.al.name }</p>
									</li>
								</ul>
							);
						}
						else return (
							<ul className = { isWhite?"topList-item-ul-noImage  topList-item-ul-white":"topList-item-ul-noImage"  }  >
								<li style = {{ width: "77px" }} className = "topList-item-li space-around">
									<p> { index }</p> <span className = "u-icn-75"></span>
								</li >
								<li style = {{ width: "327px" }} className = "topList-item-li">



									<span className = "m-table .ply "></span>
									<Link to = "/" >{ data.name }</Link>
								</li>
								<li style = {{ width: "91px" }} className ="topList-item-li">
									{ "时长" }
								</li>
								<li style = {{ width: "173px" }} className = "topList-item-li">
									<p>{ data.al.name }</p>
								</li>
							</ul>


						);
					})()


				}


			</div>

		);


	}


}


export default TopListItem;