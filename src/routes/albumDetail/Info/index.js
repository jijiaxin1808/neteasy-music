import React from "react";
import * as timeUtils from "../../../utils/time";
import Icon from "../../../components/Icon/Icon2/Icon2";
import Icon1 from "../../../components/Icon/Icon/Icon";
import "./index.less";

function Info(props) {

  const { album } = props;

  const InfoComp = album ? (
    <div className="album-cont-c">
			<div className="hd">
				<i className="u-icn"></i>
				<h2>
          {album.name}
          <br />
          <span>{album.alias[0]}</span>
        </h2>
			</div>
			<div className="songer">
        <div>
          歌手:&nbsp;&nbsp;
          <span title="V.A."><a>{album.artist.name}</a></span>
        </div>
        发行时间:&nbsp;&nbsp;
        {timeUtils.dateFormat(album.publishTime)}
        <br/>
        {
          album.company &&
          <>
            发行公司:&nbsp;&nbsp;
            {album.company}
          </>
        }
			</div>
			<div className="oper">
				<Icon1 />
				<Icon className="uBtnCollect" Info="收藏"/>
				<Icon className="uBtnShare" Info="收藏"/>
				<Icon className="uBtnDownload" Info="下载"/>
				<Icon className="uBtnComment" Info="收藏"/>
			</div>
		</div>
  ) : null;

  return InfoComp;
}

export default Info;