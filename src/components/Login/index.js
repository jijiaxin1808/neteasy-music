import React from 'react';
import { connect } from 'dva';
import LoginName from './LoginName';
import  { Link } from 'react-router-dom';

const Data = [{
    imgUrl:"",
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
        console.log(this.props)
        // const { Login } = this.props;
        // {console.log(Login)}
        return ( 
            <div>
                <div className="topBarCreater">
                    <Link to="/creater">
                        {'创作者中心'}
                    </Link>
                </div>
                <div className="login">
                    <LoginName Name={Login.name}  />
                    <div className="loginMainContain">
                        <div className="loginLeftContain">
                        </div>
                        <div className="loginRightContain">
                            {
                                Data.map((item,index)=> {
                                    return (
                                        <div className="" key = { index }>
                                            <span style={{background:`${item.imgUrl}`}} ></span>
                                            <div>
                                                {item.name}}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>   
                </div>         
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
})

export default connect(({login})=>({login}),mapDispatchToProps)(Login)
