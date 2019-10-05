import React from "react";
import  DjradioItem from "./djradioItem";
import DjradioRecommend from "./djradiorecommend";
import "./index.less";
import { connect } from "dva";
import DjradioSort from "./djradiosort";

class Djradio extends React.Component {
	render() {
		const { djradio,handlePrev,handleNext } = this.props;
		return (
			<div className = "djradio">
				<DjradioSort    isShow  = { djradio.isShow } handlePrev = {handlePrev} handleNext = {handleNext}  />
				<div style = {{display:"flex"}}>
					<DjradioRecommend />
					<DjradioRecommend />
				</div>
				<DjradioItem />
				<DjradioItem />
				<DjradioItem />
				<DjradioItem />
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch)=> ({
	handlePrev() {
		dispatch({
			type:"djradio/handlePrev"
		});
	},
	handleNext() {
		dispatch({
			type:"djradio/handleNext"
		});
	}

});

export default connect(({djradio})=>({djradio}),mapDispatchToProps)(Djradio);