import React from "react";

const Audio = React.forwardRef((props, ref) => {
	return (
		<audio
			src="https://music.163.com/song/media/outer/url?id=1387152054.mp3"
			ref={ref}
			{...props}
		>
            Your browser does not support the <code>audio</code> element.
		</audio>
	);
});

export default Audio;