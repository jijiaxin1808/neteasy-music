import React, { useState } from "react";
import "./index.less";

export default function Desc(props) {
  
  const [hide, setHide] = useState(true);
  const { desc } = props;

  return (
    <div className="songlist-desc">
      <div className={hide ? "f-brk" : "f-brk hide"}>
        <p>介绍:&nbsp;&nbsp;&nbsp;
        {desc && desc.substring(0, 130)}...
        </p>
      </div>
      <div className={hide ? "hide" : ""}>
        <p className="f-brk">
        介绍:&nbsp;&nbsp;&nbsp;
        {props.desc}
        </p>
      </div>
      <div className={hide ? "unfold-btn" : "unfold-btn hide"}>
        <a  onClick={() => {setHide(!hide)}}>
          展开
          <i className="icon-unfold">展开</i>
        </a>
      </div>
      <div className={hide ? "fold-btn hide" : "fold-btn"}>
        <a onClick={() => {setHide(!hide)}}>
          收起
          <i className="icon-fold">收起</i>
        </a>
      </div>
    </div>
  );
}