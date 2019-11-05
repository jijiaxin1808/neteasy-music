import React, { useState } from "react";
import "./index.less";

export default function Desc(props) {
  
  const [hide, setHide] = useState(true)

  return (
    <div className="album-desc">
      <h3>专辑介绍</h3>
      <div className={hide ? "f-brk" : "f-brk hide"}>
        <p>
        劇場版の公開を記念して、各ヒロインが歌うギャルゲーカバーソングを収録したアルバム発売! 「勇気の神様」/澤村・スペンサー・英梨々、「Leaf ticket」/加藤恵、「You (Vocal Version)」/霞ヶ丘詩羽、「Heart To Heart」/波島出海、「グリーングリーン」/氷堂美智留、「檄! 帝国華撃団」...
        </p>
      </div>
      <div className={hide ? "hide" : ""}>
        <p className="f-brk">
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