import React, { useEffect } from "react";
import { connect } from "dva";
import "./index.less";
import Info from "./Info";
import LayoutOne from "../../components/detail/layout/layout1";

function AlbumDetail(props) {

  useEffect(() => {
    getAlbum(81920082);
  }, []);
  const { getAlbum } = props;
  return (
    <LayoutOne>
      {
        {
          sliderData: {
            tags: []
          },
          renderImg: () => {
						return (
							<React.Fragment>
								<img style={styles.img} src="http://p2.music.126.net/cjxYSPwmkpAf5rQ9X1dPQg==/109951164385840647.jpg?param=177y177" alt="img"/>
								<div style={styles.mask}></div>
							</React.Fragment>
            );
          },
          renderInfo: () => {
            return (
              <Info />
            );
          },
          renderShowList: () => {
            return (
              <React.Fragment>
                
              </React.Fragment>
            );
          },
          renderPicList: () => {},
          renderRecList: () => {},
        }
      }
    </LayoutOne>
  );
}

const styles = {
  img: {

  },
  mask: {
    width: "209px",
    height: "177px",
    background: `transparent url(${require("../../assets/coverall.png")}) no-repeat 0 -986px`,
    position: "absolute",
    top: "0",
    left: "0",
  },
}

const mapDispatch = (dispatch) => ({
  getAlbum(id) {
    dispatch({
      type: "AlbumDetail/getAlbum",
      payload: {
        id
      }
    });
  }
});

export default connect(({}) => ({}), mapDispatch)(AlbumDetail);