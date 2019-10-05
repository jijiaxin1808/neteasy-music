/*详情页的那些LOGO */
import React from "react";
import "./index.less";

function Icon(props) {

	const { className, Info } = props;
	return (
		<a className="u-btni">
			<i className={classNames[className]}>{Info}</i>
		</a>
	);
}

const classNames = {
	"uBtnCollect": "u-btn-collect",
	"uBtnShare": "u-btn-share",
	"uBtnDownload": "u-btn-download",
	"uBtnComment": "u-btn-comment",
};

export default Icon;