import React from 'react';
import { connect } from 'dva';
import LoginHeader from './Header';
import './index.less'
import DefaultLoginHeader from './Main';
import LoginEmail from './Main/loginEmail/index';
import LoginPhone from './../Login/Main/loginPhone';
import Register from './../Login/Main/register';

const Data = [{
    imgUrl:"url('../../../assets/logo.png') -150px -670px no-repeat",
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

class Login extends React.Component {
    render() {
        const { login,mouseMove,mouseDown,mouseUp } = this.props;
        const X = login.loginTop;
        const Y = login.loginLeft;
        console.log(X,Y)
        return ( <div>
                <div className="login" >
                    <LoginHeader  
                        onMouseMove={ (e)=> {mouseMove(e,login.isMouseDown)}}
                        onMouseDown = { (e)=> {mouseDown(e)} }
                        onMouseUp = { (e)=> {mouseUp(e)} }
                        style={{top:`${X}`,left:`${Y}`}} />
                    <DefaultLoginHeader />
                    <LoginEmail />
                    <LoginPhone />
                    
                     <Register />
                </div>         
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    mouseMove(e,isMouseDown) {
        console.log(isMouseDown);
        if( isMouseDown ) {
        console.log("move了")
            const X = e.clientX-250+"px";
            const Y = e.clientY-250+"px";
            dispatch({
                type:"login/mouseMove",
                payload:{
                    loginTop: Y,
                    loginLeft: X
                }
            })
        }
        else {

        }
    },
    mouseDown(e) {
        dispatch({
            type:"login/mouseDown"
        })
    },
    mouseUp(e) {
        dispatch({
            type:"login/mouseUp",
        })
    }





})

export default connect(({login})=>({login}),mapDispatchToProps)(Login)
