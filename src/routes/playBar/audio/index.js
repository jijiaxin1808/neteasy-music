import React from "react";

const Audio = React.forwardRef((props, ref) => {
	return (
		<audio
			ref={ref}
			{...props}
		>
            Your browser does not support the <code>audio</code> element.
		</audio>
	);
});

export default Audio;