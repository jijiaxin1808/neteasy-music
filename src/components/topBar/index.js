import { Link } from 'react-router-dom';
import { Data } from '../../assets/TopData';
import React from 'react';
import './index.less'

class TopBar extends React.Component {
    render() {
        return (
            <div>
                {
                    Data.map(( item )=> {
                        return (
                        <div className="topBarItem"  >
                            <Link to={item.linkTo} >
                                {item.name}
                            </Link>
                        </div>
                    )
                    })
                }
                <div className="topBarSearch">
                    <span className="searchIcon">

                    </span>
                    <input />
                </div>
                <div className="topBarCreater">
                    <Link to="/creater">
                        {'创作者中心'}
                    </Link>
                </div>
                <div className="topBarLogin">
                    <Link to="/creater">
                        {"登录"}
                    </Link>
                </div>
            </div>
        )
    }
}
export default TopBar;