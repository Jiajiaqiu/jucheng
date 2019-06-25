import React from "react"
import icon from "../../common/iconfont/iconfont.css"
import { NavLink } from "react-router-dom"
import styled from "./index.css"
import HighOrederComponent from "../highOrederComponent";
class Header extends React.Component{
    render(){
        return (
            <div className={styled.header}>
                <NavLink to='/mine'>
                    <span className={icon.iconfont}>&#xe612;</span>
                </NavLink>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default HighOrederComponent(true)(Header);