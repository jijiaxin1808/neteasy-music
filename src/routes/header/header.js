import React from 'react';
import './header.less';
import Logo from '../../components/Logo';
import TopBar from '../../components/topBar';
import Login from '../../components/Login';

class Header extends React.Component {
    render() {
        return (
            <div className="header"> 
                <Logo />
                <TopBar /> 

            </div>
        )
    }



}
export default Header;