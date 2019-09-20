import React from "react";
import "./index.less";

const Footer = (props) => (

	<div className="footer-wrap">
		<div className="footer-inner">
			<div className="copy-right">
				<div className="footer-service-l">
					<a>服务条款</a>
					<div className="line"></div>
					<a>隐私政策</a>
					<div className="line"></div>
					<a>版权投诉指引</a>
					<div className="line"></div>
					<a>意见反馈</a>
					<div className="line"></div>
				</div>
				<p><span>网易公司版权所有©1997-2019</span>杭州乐读科技有限公司运营： <a>浙网文[2018]3506-263号</a></p>
				<p><span>违法和不良信息举报电话：0571-89853516</span> 举报邮箱：<a>ncm5990@163.com</a></p>
			</div>
			<div className="footer-service-r">
				<ul className="footer-service-r-list">
					<li className="unit"><a  className="logo logo-auth" href = "wwwww"  ></a>用户认证</li>
					<li className="unit"><a className="logo logo-musician"></a>独立音乐人</li>
					<li className="unit"><a className="logo logo-tip"></a>赞赏</li>
					<li className="unit"><a className="logo logo-reward"></a>视频奖励</li>
				</ul>
			</div>
		</div>
	</div>
);

export default Footer;
