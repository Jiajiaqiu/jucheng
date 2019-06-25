import React,{Fragment} from "react"
import {NavLink,withRouter} from "react-router-dom"

import icon from"../common/iconfont/iconfont.css"
import aa from "./index.css";
class Layout extends React.Component{
    constructor(){
        super()
        this.state = {           
            hidden: false
        }   
    //   console.log(this,'dssdfs')
    }
    componentDidMount(){
        if (this.props.history.location.pathname === '/order' 
        || this.props.history.location.pathname === '/details'
        || this.props.history.location.pathname === '/MyClip'
        || this.props.history.location.pathname === '/MyCard'
        || this.props.history.location.pathname === '/MyAttention'
        || this.props.history.location.pathname === '/MyAddress'
        || this.props.history.location.pathname === '/MyMessage'
        || this.props.history.location.pathname === '/MyFaceBack'
        ) {
            this.setState(() => ({
                hidden: true
            }))

        } else {
            this.setState(() => ({
                hidden: false
            }))
        }
    }
    componentWillReceiveProps() {
        if (this.props.history.location.pathname === '/order' 
        || this.props.history.location.pathname === '/details' 
        || this.props.history.location.pathname === '/MyClip'
        || this.props.history.location.pathname === '/MyCard'
        || this.props.history.location.pathname === '/MyAttention'
        || this.props.history.location.pathname === '/MyAddress'
        || this.props.history.location.pathname === '/MyMessage'
        || this.props.history.location.pathname === '/MyFaceBack'
        ) {
            this.setState(()=>({
                hidden: true
            }))
            
        } else {
            this.setState(() => ({
                hidden: false
            }))  
        }
        
    }
    render(){
       
        return (
            <Fragment>
                {
                    this.props.children
                }
                <div id={aa.footer} style={{ 'display': this.state.hidden ? 'none' : 'block' }}>
                    <ul>
                        <li>
                            <NavLink to="/home" >
                                <em className={aa.iconfont}></em>
                                <span>首页</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/movies">
                                <em className={aa.icon}></em>
                                <span>影院</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order"  >
                                    <em className={aa.font}></em>
                                    <span>票夹</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/mine" >
                                <em className={aa.pic}></em>
                                <span>我的</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </Fragment>
        )
    }
   
}
export default withRouter(Layout)