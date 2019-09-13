import React from 'react';
import { Link } from 'dva/router';
import Button from '../../../components/Button';
import Input from '../../../components/Input';

const Data = [{
    imgUrl:"url('../../assets/logo.png') -150px -670px no-repeat",
    name:"微信登录"
},
    {
    imgUrl:"",
    name:"qq登录"
},
    {
    imgUrl:"",
    name:"微博登录"
},
    {
    imgUrl:"",
    name:"网易邮箱登录"
}
]

class DefaultLogin extends React.Component {
    render() {
        return (
            <div className="loginMainContain">
            <div className="loginLeftContain">
                <div className="loginLeftContainImg ">
                </div >
                <Button   type = "blue" url = "/" content = "手机号登录"  />
                <Button type = "white" url = "/" content = "注册" />
            </div>
            <div className="loginRightContain">
                {
                    Data.map((item,index)=> {
                        return (
                            <div className="LoginForm" key = { index }>
                                <div className = "LoginFormSpan"></div>
                                <Link to="/" > 
                                    {item.name}
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>  
        )
    }
}

export default DefaultLogin;