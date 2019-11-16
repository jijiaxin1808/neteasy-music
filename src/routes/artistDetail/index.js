import React, {useEffect} from "react";
import { connect } from "dva";
import { Link } from "react-router-dom";
import SongList from "../../components/songlist2";
import AlbumList from "../../components/albumList/albumList";
import MVList from "../../components/mvlist"; 
import Pagination from "../../components/pagination";
import DownLoad from "../../components/detail/downLoad";
import Icon1 from "../../components/Icon/Icon/Icon";
import Icon from "../../components/Icon/Icon2/Icon2";
import Icon2 from "../../components/Icon/Icon3/Icon3";
import { Tabs } from 'antd';
import "./index.less";

const { TabPane } = Tabs;

function ArtistDetail(props) {
  
  const { mv, songs, album, desc, getSongList, getAlbum, getDesc, getMv } = props;
  
  const id = props.location.search.substring(1);

  useEffect(() => {
    getSongList(id);
    getAlbum(id, 12, 0);
    getDesc(id);
    getMv(id);
  }, [id]);

  return (
    <div className="wrap">
    <div className="g-mn">
      <div className="g-mn-ct">
        <div className="g-wrap">
          <div className="artist-cover">
            <div className="hd">
              <h3>{album.artist && album.artist.name}</h3>
              <h2>{album.artist && album.artist.alias && album.artist.alias[0]}</h2>
            </div>
            {
              album.artist && <img src={`${album.artist.picUrl}?param=640y300`} alt="img"/>
            }
            <Link className="p-page" title="个人主页">个人主页</Link>
            <a className="collect" title="收藏">收藏</a>
          </div>
          <div className="artist-tabs-container">
            <Tabs type="card">
              <TabPane tab="热门作品" key="1">
                <div className="oper">
                  <Icon1 />
                  <Icon className="uBtnCollect" Info="收藏热门50"/>
                  <div style={{float: "right"}}>
                    <Icon2 />
                  </div>
                </div>
                <div>
                  <div className="artist-hot-songs">
                    <SongList title={false} list={songs} options={{album: true, artist: false}}/>
                  </div>
                </div>
              </TabPane>
              <TabPane tab="所有专辑" key="2">
                <div>
                  <AlbumList size="mid" hotAlbum={album.hotAlbums} itemR={"9px"}/>
                  <Pagination />
                </div>
              </TabPane>
              <TabPane tab="相关MV" key="3">
                <div>
                  <MVList list={mv}/>
                  <Pagination />
                </div>
              </TabPane>
              <TabPane tab="艺人介绍" key="4">
                <div>
                  <div className="n-artdesc">
                    <h2>
                      <i>&nbsp;</i>
                      {album.artist && album.artist.name}简介
                    </h2>
                    <p>
                      {desc.briefDesc}
                    </p>
                    {
                      desc.introduction && desc.introduction.map(item => {
                        return (
                          <div>
                            <h2>{item.ti}</h2>
                            <p>{item.txt}</p>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </TabPane>
            </Tabs>
          </div>
            
        </div>
      </div>
    </div>
    <div className="slider">
      <div className="slider-wrap">
        <div className="hot-artists">

        </div>
        <DownLoad />
      </div>
    </div>
  </div>
  );
}

const mapDispath = (dispatch) => ({

  getSongList(id) {
    dispatch({
      type: "ArtistDetail/getHotSongs",
      payload: {
        id,
      }
    });
  },
  getAlbum(id, limit, offset) {
    dispatch({
      type: "ArtistDetail/getAlbum",
      payload: {
        id,
        limit,
        offset,
      }
    });
  },
  getMv(id) {
    dispatch({
      type: "ArtistDetail/getMv",
      payload: {
        id,
      }
    });
  },
  getDesc(id) {
    dispatch({
      type: "ArtistDetail/getDesc",
      payload: {
        id,
      }
    });
  },
});

export default connect(({ ArtistDetail }) => ({
  songs: ArtistDetail.songs,
  album: ArtistDetail.album,
  desc: ArtistDetail.desc,
  mv: ArtistDetail.mv,
}), mapDispath)(ArtistDetail);