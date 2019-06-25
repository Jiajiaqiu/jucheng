import React, { Component } from "react";
import styled from "./index.css";
import logo from "../../../common/images/logo.png";
export default class MyOrderUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.center}>
                    <img src={logo} className={styled.pic}/>
                    <div className={styled.ticket}>暂无电子票</div>
                </div>
            </div>
        )
    }
}