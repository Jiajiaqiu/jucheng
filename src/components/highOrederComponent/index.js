import React from "react";
import icon from "../../common/iconfont/iconfont.css"
export default (flag) => (Wrapper) => {
    return class extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                title: "我的订单"
            }
            this.state.title=this.props.title
        }
        render() {

            let { title } = this.state;
            return (
                <div>
                    <Wrapper title={title}>
                        {
                            flag ? <p className={icon.iconfont}>&#xe620;</p> : ''
                        }
                    </Wrapper>
                </div>
            )
        }
    }

}