import React from "react";
import "./index.less";
import TopListItem from "./topListItem";

class SongListRank extends React.Component {
	render() {
		const { data,Info } = this.props;
		return (
			<div className = "SongListRank">
				<div >
					<div className= "topListInfo">
						<span className="topListInfo-1">歌曲列表<p> { `${ Info.trackCount}首歌` } </p></span>  
						<span className = "topListInfo-2">播放： <p> { Info.playCount }  </p>次 </span>
					</div>
					<div  className = "topList-rightBar-list" >
						<ul>
							<li style = {{ width: "77px" }} className = "topList-rightBar-list-li">
							</li >
							<li style = {{ width: "327px" }} className = "topList-rightBar-list-li">
                        标题
							</li>
							<li style = {{ width: "91px" }} className = "topList-rightBar-list-li">
                        时长
							</li>
							<li style = {{ width: "172px" }} className = "topList-rightBar-list-li">
                        歌手
							</li>
						</ul>
					</div>
				</div>
				<div className = "songListRank-items">
            					{
						data.map(( item,index )=>{

							if(index<3) {
								if ( (index+1)%2===0 ) {
									return <TopListItem key={item} data = { item }  index = { index+1 } haveImg = { true } isWhite={ true } />;
								}
								else return <TopListItem key={item} data = { item }  index = { index+1 } haveImg = { true } isWhite={ false } />;
							}
							else {
								if ( (index+1)%2===0 ) {
									return <TopListItem key={item} data = { item }  index = { index+1 } haveImg = { false } isWhite={ true } />;
								}
								else return <TopListItem key={item}data = { item }  index = { index+1 } haveImg = { false } isWhite={ false } />;
							}
						})
					}
				</div>
			</div>
		);
	}
}
export default SongListRank;