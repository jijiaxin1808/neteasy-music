// 点赞的Icon
import React from "react";
import "./index.less";

export default function Icon(props) {

  const { Info } = props;

	return (
		<a className="u-btn3-icn">
      <i>
        <em className="icn icn-praise"></em>
        {Info}
      </i>
		</a>
	);
}