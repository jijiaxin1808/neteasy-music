import React from 'react';
import {NavLink} from 'dva/router';
import './index.less';

class Button extends React.Component {

    render(props) {
        const { type,content= "",url } = this.props
        return (
            <div className = { type ==="blue"? "Button_blue" :"Button_white" } >
                <NavLink to={ url}>
                    { content }
                </NavLink>


            </div>
        )
    }
}
export default Button;