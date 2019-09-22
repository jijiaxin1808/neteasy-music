import React, { Fragment } from "react";
import "./index.less";
import { NavLink } from "react-router-dom";



class TopListItem extends React.Component {
	render() {
		const { data,index,haveImg,isWhite } = this.props;
		return (
			<Fragment>
				{
					(() => {
						if( haveImg ) {
							return (
								<ul className = { isWhite?"topList-item-ul-white img":"topList-item-ul img" }>
									<li style = {{ width: "77px" }} className = "topList-item-li space-around ">
										<p> { index }</p> <span className = "u-icn-75"></span>
									</li >
									<li style = {{ width: "327px" }} className = "topList-item-li img-l">


										<img src = { data.al.picUrl } alt = { data.name } className = "topList-item-li-img " />

										<span className = "m-table .ply "></span>
										<NavLink to = "/" >{ data.name }</NavLink>
									</li>
									<li style = {{ width: "91px" }} className ="topList-item-li">
										{ "时长" }
									</li>
									<li style = {{ width: "172px" }} className = "topList-item-li ">
										<p>{ data.al.name }</p>
									</li>
								</ul>
							);
						}
						else return (
							<ul className = { isWhite?"topList-item-ul-white":"topList-item-ul" }>
								<li style = {{ width: "77px" }} className = "topList-item-li space-around">
									<p> { index }</p> <span className = "u-icn-75"></span>
								</li >
								<li style = {{ width: "327px" }} className = "topList-item-li">



									<span className = "m-table .ply "></span>
									<NavLink to = "/" >{ data.name }</NavLink>
								</li>
								<li style = {{ width: "91px" }} className ="topList-item-li">
									{ "时长" }
								</li>
								<li style = {{ width: "172px" }} className = "topList-item-li">
									<p>{ data.al.name }</p>
								</li>
							</ul>
						);
					})()


				}


			</Fragment>

		);


	}


}


export default TopListItem;