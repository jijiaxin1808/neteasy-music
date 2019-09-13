import React from 'react';
import './header.less';
import Logo from '../../components/Logo';
import TopBar from '../../components/topBar';
import Login from '../../components/Login/index';

class Header extends React.Component {
    render() {
        return (
            <div className="header"> 
                <div>
                    <Logo />
                    <TopBar /> 
                    <Login />
                </div>
            </div>
        )
    }



}
export default Header;