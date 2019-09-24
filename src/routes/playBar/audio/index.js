import React from "react";

const Audio = React.forwardRef((props, ref) => {
	return (
		<audio
			src="http://m8.music.126.net/20190924152545/af98e2e21f30924b647306caa1f609bc/ymusic/e328/5de6/31f0/e67727476f27eb13dbceea029f1db445.mp3"
			ref={ref}
		>
            Your browser does not support the <code>audio</code> element.
		</audio>
	);
});

export default Audio;