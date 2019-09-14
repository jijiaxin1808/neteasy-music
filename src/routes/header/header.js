import React from 'react';
import './header.less';
import Logo from './Logo';
import TopBar from './topBar';
import Login from '../Login'

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