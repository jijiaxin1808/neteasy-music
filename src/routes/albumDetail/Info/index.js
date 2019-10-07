import React from "react";
import * as timeUtils from "../../../utils/time";
import Icon from "../../../components/Icon/Icon2/Icon2";
import Icon1 from "../../../components/Icon/Icon/Icon";
import "./index.less";

function Info(props) {

  return (
    <div className="album-cont-c">
			<div className="hd">
				<i className="u-icn"></i>
				<h2>
          冴えない彼女の育てかた ギャルゲーカバーソングコレクション
          <br />
          <span>路人女主的养成方法 GalGame Cover Song Collection</span>
        </h2>
			</div>
			<div className="songer">
        <div>
          歌手:&nbsp;&nbsp;
          <span title="V.A."><a>V.A.</a></span>
        </div>
        发行时间:&nbsp;&nbsp;
        2019-09-25
        <br/>
        发行公司:&nbsp;&nbsp;
        Aniplex
			</div>
			<div className="oper">
				<Icon1 />
				<Icon className="uBtnCollect" Info="收藏"/>
				<Icon className="uBtnShare" Info="收藏"/>
				<Icon className="uBtnDownload" Info="下载"/>
				<Icon className="uBtnComment" Info="收藏"/>
			</div>
		</div>
  );
}

export default Info;