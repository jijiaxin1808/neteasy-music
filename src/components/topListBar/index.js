import React from "react";
import { Link } from "dva/router";
import "./index.less";
 
class TopListBar extends React.Component {
	render() {
		const { title,topListData,isoffical } = this.props;
		const func = ()=> {
			if(window.location.hash.split("/toplist?id=")[1])  {
				return Number(window.location.hash.split("?id=")[1]);
			}
			return 0;
		};
		const data = func();
		console.log(data,"aaa0");
 		return (
			<div className = "topList-bar">
				<p className = "topList-bar-title" >{ title }</p>
				<ul>
					{
						topListData.map(( item,index )=> {
							if( isoffical ){
								if ( item.ToplistType ) {
									return (
										<li className = {	data === item.id?"topList-bar-clicked":"Listbar-item"   } key = { index }>
											<Link to = { `/discover/toplist?id=${ item.id }` }>
												<img src = { item.coverImgUrl } alt = { item.coverImgUrl }  className = "Listbar-item-left"/>
												<div className = "Listbar-item-right">
													<p >{ item.name }</p>
													<p className = "Listbar-item-title">{ item.updateFrequency }</p>
												</div>
											</Link> 

										</li>
									);
								}
							}
							else {
								if ( !item.ToplistType ) {
									return (
										<li className = {	data === item.id?"topList-bar-clicked":"Listbar-item"   } key = { index }>
											<Link to = { `/discover/toplist?id=${ item.id }` }>
												<img src = { item.coverImgUrl } alt = { item.coverImgUrl }  className = "Listbar-item-left"/>
												<div className = "Listbar-item-right">
													<p >{ item.name }</p>
													<p className = "Listbar-item-title">{ item.updateFrequency }</p>
												</div>
											</Link> 

										</li>
									);
								}
							};
						})
					}
				</ul>

			</div>
		);


	}

}
export default TopListBar;