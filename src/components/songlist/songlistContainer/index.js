import React from "react";
import { connect } from "dva";
import SongListInner from "../songlistUI";


class SongListContainer extends React.Component {

	render() {

		const { categories, sub } = this.props;

		return (
			<div>
				<SongListInner
					categories={categories}
					sub={sub}
				/>
			</div>
		);
	}
	componentDidMount() {

		const { getTagList } = this.props;

		getTagList();
	}
}

const mapDispatch = (dispatch) => ({
	getTagList() {
		dispatch({
			type: "SongList/getTags",
		});
	},
});

export default connect(({ categories, sub }) => ({
	categories,
	sub,
}), mapDispatch)(SongListContainer);

