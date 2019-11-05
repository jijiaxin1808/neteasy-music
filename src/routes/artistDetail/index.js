import React, {useState, useEffect} from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import SongList from "../../components/songlist2";
import DownLoad from "../../components/detail/downLoad";
import Icon1 from "../../components/Icon/Icon/Icon";
import Icon from "../../components/Icon/Icon2/Icon2";
import Icon2 from "../../components/Icon/Icon3/Icon3";
import "./index.less";

function ArtistDetail() {
  
  return (
    <div className="wrap">
    <div className="g-mn">
      <div className="g-mn-ct">
        <div className="g-wrap">
          <div className="artist-cover">
            <div className="hd">
              <h3>G.E.M.邓紫棋</h3>
              <h2>G.E.M.</h2>
            </div>
            <img src="http://p1.music.126.net/o2qzE0Is5Qh1pfSKQiVGkA==/18646617697368402.jpg?param=640y300" alt="img"/>
            <Link className="p-page" title="个人主页">个人主页</Link>
            <a className="collect" title="收藏">收藏</a>
          </div>
          <div className="oper">
            <Icon1 />
            <Icon className="uBtnCollect" Info="收藏热门50"/>
            <Icon2 />
          </div>
        </div>
      </div>
    </div>
    <div className="slider">
      <div className="slider-wrap">
        <div className="hot-artists">

        </div>
        <DownLoad />
      </div>
    </div>
  </div>
  );
}

export default connect(({ ArtistDetail }) => ({

}))(ArtistDetail);