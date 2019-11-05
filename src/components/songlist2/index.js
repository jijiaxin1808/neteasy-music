/*详情页的歌曲/专辑 */
import React, {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import "./index.less";

function SongList(props) {

  //需要判断是歌曲还是专辑的列表
  const [flag, setFlag] = useState("");
  useEffect(() => {
    setFlag(props.flag);
  }, []);

  const { listData, list } = props;
  return (
    <div className="song-tb">
			<div className="title">
        <h3>
          <span>
            {
              flag === "专辑" ? "包含歌曲列表" : "歌曲列表"
            }
          </span>
        </h3>
        <span className="song-count">36首歌</span>
        {
          flag === "歌单" &&
          <div className="play-count">
            播放:&nbsp;&nbsp;
            <strong>74838次</strong>
          </div>
        }
        <div className="link-out">
          <i className="music-icon"></i>
          <a href="/">生成外链播放</a>
        </div>
      </div>
      <div className="song-list">
        <table className="m-table">
          <thead>
            <tr>
              {
                listData.map(item => {
                  return (
                    <th style={{width: item.width}}>
                      <div className="wp">{item.title}</div>
                    </th>
                  );
                })
              }
            </tr>
          </thead>
          <tbody>
              {
                list.map((item, index) => (
                  <tr className = {index%2 === 0 ? "even" : ""}>
                    <td>
                      <div className="hd">
                        <span className="num">{index+1}</span>
                        <span className="ply">&nbsp;</span>
                      </div>
                    </td>
                    <td>
                      <div className="">
                        <div className="tt">
                          <div className="tt-c">
                            <div className="txt">
                              <Link className="song-title" to="/">{item.name}</Link>
                              {item.alia.length!==0 && <span> - ({item.alia[0]})</span>}
                            </div>
                            {item.mv!==0 && <span className="mv"></span>}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="s-f3">
                        <span>04:07</span>
                        <div className="oper"></div>
                      </div>
                    </td>
                    <td>
                      <div className="text">
                        <Link to="/">{item.ar[0].name}</Link>
                      </div>
                    </td>
                    {
                      flag === "歌单" &&
                      <td>
                        <div className="text">
                          <Link to="/">{item.al.name}</Link>
                        </div>
                      </td>
                    }
                  </tr>
                ))
              }
          </tbody>
        </table>
      </div>						
		</div>
  );
}

export default SongList;