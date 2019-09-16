import React from "react";
import { Link } from "dva/router";
import "./index.less";
 
class TopListBar extends React.Component {
	render() {
		const { title,topListData,isoffical } = this.props;
 		return (
			<div className = "topList-bar">
				<p className = "topList-bar-title" >{ title }</p>
				<ul>
					{
						topListData.map(( item,index )=> {
							if( item.ToplistType  || isoffical ){
								return (
									<li className = "Listbar-item" key = { index }>
										<Link to = { `/toplist?id=${ item.id } ` }>
											<img src = { item.coverImgUrl } alt = { item.coverImgUrl }  className = "Listbar-item-left"/>
											<div className = "Listbar-item-right">
												<p >{ item.name }</p>
												<p className = "Listbar-item-title">{ item.updateFrequency }</p>
											</div>
										</Link> 

									</li>
								);
							}
							else return null;
						})
					}
				</ul>

			</div>
		);


	}

}
export default TopListBar;