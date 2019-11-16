import React from "react";
import { connect } from "dva";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import "./index.less";
import { Link } from "react-router-dom";
import Comment from "../../components/comment";
import Icon from "../../components/Icon/Icon2/Icon2";
import Icon2 from "../../components/Icon/Icon4";

const count = (nums)=> {
	if(nums>100000) {
		return Number(nums/10000)+1+"万次";
	}
	else return nums+"次";
}

function Mv() {

	return (
		<div className = "mv">

			<div className = "mv-contet" >
				<div className="mv-container">
					<div className="mv-title" title={"万晓利新专辑发布会全场"}>
						<h2 className="f-thide">
							<i className="u-icn2 u-icn2-mv tag"></i>
							万晓利新专辑发布会全场
						</h2>
						<span className="name">
							<Link to={"/"} title={"万晓利"}>万晓利</Link>
						</span>
					</div>
					<Video
						loop
						controls = {['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
						poster = {"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1573388363544&di=80d611978998e8de983af539fbadc379&imgtype=0&src=http%3A%2F%2Fr.mobibao.net%2Fupload%2Ff8de130600%2Fimages%2F51946AA48DF17E5B33891F5663588825.jpg"}
						onCanPlayThrough = {() => {

						}}>
					>
						<source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" type="video/webm" />
						<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />
					</Video>
					<div className="mv-oper">
						<Icon2 Info={"(874)"}/>
						<Icon className={"uBtnCollect"} Info={"(2056)"}/>
						<Icon className={"uBtnShare"} Info={"(874)"}/>
					</div>
				</div>
				<Comment type = "mv" id = { 10894053 } />
			</div>
			<div className = "mv-sidebar">
				<div className = "mv-detail" >
					<p className = "mv-introduction">mv简介</p>
					<p className = "mv-detail-info" >{ `发布时间： ` }</p>
					<p className = "mv-detail-info" >{ "播放次数:"}  </p>
					<p className = "mv-desc">{  }</p>
					</div>
				<div className = "mv-recommend">
					{
						// recommenddata.map((item, index)=>{
						// 	return (
						// 		  <Fragment> 
						// 			  <Link to = { `video?id=${ item.vid }` } className = "mv-recommand-item">
						// 				  <Fragment>
						// 					 <img src = { `${ item.coverUrl }` } alt = { item.title } width = "96px" height = "54px" style = {{display:"inline-block"}}/>
						// 				 	<span className = "mv-name">{item.title}</span>
						// 				 	<span className = "mv-name">{`by ${ item.creator[0].userName }`}</span> 
						// 				 </Fragment> 
						// 			</Link>
						// 		</Fragment>
						// 	  );
						//  })
					}
				</div>
			</div>
		</div>
	);
}

const mapDispatch = (dispatch) => ({

});

export default connect(({}) => ({}), mapDispatch)(Mv);