import React from "react";

function PicList(props) {

	const picList = props.picList;
	return (
		<ul className="pic-list">
			{
				picList.map((item, index) => {
					return (
						<li key={`item${index}`}>
							<a>
								<img src={`${item.avatarUrl}?param=40y40`}/>
							</a>
						</li>
					);
				})
			}
		</ul>
	);
}

export default PicList;