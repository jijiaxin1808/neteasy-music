import React, { useEffect } from "react";
import { connect } from "dva";
// 用于判断用户是否登录, 如果登录, 把用户信息存入Login的
function AuthRoute(props) {

  const {  } = props;
  useEffect(() => {
    const { getLoginStatus } = props;
    getLoginStatus();
  }, []);

  return null;
}

const mapDispatch = (dispatch) => ({
  getLoginStatus() {

    dispatch({
      type: "userAuth/getLoginStatus",
    });
  },
});

export default connect(({login}) => login, mapDispatch)(AuthRoute);