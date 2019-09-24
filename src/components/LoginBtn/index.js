import React from 'react';
import { routerRedux } from 'dva/router';

const Data = [ { 
    name:"手机号登录",
    img:`url("../../assets/topbar.png") no-reapt`,
    link:()=>{
        dispatch(routerRedux.push('/logout'));
    }
},
    { 
    name:"微信登录",
    img:`url("../../assets/topbar.png") no-reapt`,
    link:()=>{
        dispatch(routerRedux.push('/logout'));
    }
},
    { 
    name:"qq登录",
    img:`url("../../assets/topbar.png") no-reapt`,
    link:()=>{
        dispatch(routerRedux.push('/logout'));
    }
},
    {    
    name:"网易邮箱登录",
    img:`url("../../assets/topbar.png") no-reapt`,
    link:()=>{
        dispatch(routerRedux.push('/logout'));
    }
},
    { 
    name:"新浪微博登录",
    imgUrl:`url("../../assets/topbar.png") no-reapt`,
    link:()=>{
        dispatch(routerRedux.push('/logout'));
    }
}
]

class Login extends React.Component {
    render () {
        return (
            <div className="login" >
                {
                    Data.map( ( item,index )=> {
                        return (
                            <div className="loginItem" index={index} onClick={item.link()}>
                                <img src={item.imgUrl}   />
                                <div>
                                    {item.name}
                                </div>
                            </div>    
                        )
                    })
                }
            </div>
        )
    }
}
export default Login;