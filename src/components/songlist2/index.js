import React from "react";
import "./index.less";

function SongList(props) {

  const { listData } = props;
  return (
    <div className="song-tb">
			<div className="title"></div>
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
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>						
		</div>
  );
}

export default SongList;