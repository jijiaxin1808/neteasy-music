import React from "react";
import { Link } from "react-router-dom";
import * as timeUtils from "../../../utils/time";
import Icon from "../../../components/Icon/Icon2/Icon2";
import Icon1 from "../../../components/Icon/Icon/Icon";
import Desc from "../desc";
import "./index.less";

function Info(props) {

	const { details } = props;

	return (
		<div className="songlist-cont-c">
			<div className="hd">
				<i className="u-icn">
					<span className="f-r-white-icon"/>
				</i>
				<h2>{details.playlist.name}</h2>
			</div>
			<div className="user">
				<a className="face f-l">
					<img className="f-l" src={`${details.playlist.creator.avatarUrl}?param=35y35`}/>
				</a>
				<a className="name f-l">{details.playlist.creator.nickname}</a>
				<span className="time">{`${timeUtils.dateFormat(details.playlist.createTime)}创建`}</span>
			</div>
			<div className="oper">
				<Icon1 />                                                         
				<Icon className="uBtnCollect" Info={`(${details.playlist.trackCount})`}/>
				<Icon className="uBtnShare" Info={`(${details.playlist.shareCount})`}/>
				<Icon className="uBtnDownload" Info="下载"/>
				<Icon className="uBtnComment" Info={`(${details.playlist.commentCount})`}/>
			</div>
			<div className="tags">		
				{
					details.playlist && details.playlist.tags.length !== 0 &&
					<>
						标签：
						{
							details.playlist.tags.map(item => {
								return (
									<Link className="tag" to={`/discover/playlist?${item}`}>
										<i>{item}</i>
									</Link>
								)
							})
						}
					</>
				}
			</div>
			{
				details.playlist.description &&
				<Desc desc={details.playlist.description}/>
			}
		</div>
	);
}

export default Info;