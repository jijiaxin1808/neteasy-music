import React, { useEffect } from "react";
import { connect } from "dva";
import Info from "./Info";
import Desc from "./desc";
import LayoutOne from "../../components/detail/layout/layout1";
import SongList from "../../components/songlist2";

function AlbumDetail(props) {

  useEffect(() => {
    getAlbum(81920082);
    
  }, []);
  const { details, getAlbum } = props;
  let arrAll = JSON.stringify(details) !== "{}";
  
  return (
    <LayoutOne>
      {
        {
          sliderData: [
            {
              tag: "喜欢这张专辑的人",
              more: false,
              render: () => {}
            },
            {
              tag: "Ta的其他热门专辑",
              more: true,
              render: () => {}
            }
          ],
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
              arrAll && 
              <React.Fragment>
                <Desc desc={props.details.album.description}/>
                <SongList flag="专辑" list={props.details.songs} listData={listData}/>
              </React.Fragment>
            );
          },
        }
      }
    </LayoutOne>
  );
}

const styles = {
  mask: {
    width: "209px",
    height: "177px",
    background: `transparent url(${require("../../assets/coverall.png")}) no-repeat 0 -986px`,
    position: "absolute",
    top: "0",
    left: "0",
  },
}

const listData = [
	{
		width: "74px",
		title: ""
	},
	{
		width: "auto",
		title: "歌曲标题"
	},
	{
		width: "91px",
		title: "时长"
	},
	{
		width: "20%",
		title: "歌手"
	},
];

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

export default connect(({AlbumDetail}) => ({
  details: AlbumDetail.details,
}), mapDispatch)(AlbumDetail);