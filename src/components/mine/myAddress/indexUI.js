import React, { Component } from "react";
import styled from "./index.css";
export default class MyAddressUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.center}>
                    无收货地址信息~
                </div>
                <div className={styled.footer}>
                    <a href='#' className={styled.pkBtn}>新增地址</a>
                </div>
            </div>
        )
    }
}