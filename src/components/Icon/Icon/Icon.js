/*添加到播放队列的Icon */
import React from "react";
import "./index.less";

function Icon1() {

  return (
    <div style={{float: "left"}}>
      <a className="u-btn2 u-btn-addplay" title="播放">
        <i>
          <em className="ply"></em>
          播放
        </i>
      </a>
      <a className="u-btn2 u-btn-add" title="添加到播放队列">添加到播放队列</a>
    </div>
  );
}

export default Icon1;