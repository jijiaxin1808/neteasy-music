import React from "react";
import { Link } from "react-router-dom";
import "./index.less";

export default function MvList(props) {

  const { list } = props;
  
  return (
    <ul className="mv-list">
      {
        list && list.mvs.map(item => (

          <li className="mv-item u-cover-mv">
            <Link to={`/mv?${item.id}`} className="mv-name">
              <img src={`${item.imgurl}?param=137y103`} alt={item.name}/>
              <div className="mask"/>
              <i className="icon-play"/>
            </Link>
            <p className="dec">
              <Link to="/" className="mv-name"><i>{item.name}</i></Link>
            </p>
          </li>
        ))
      }
    </ul>
  ) 
}