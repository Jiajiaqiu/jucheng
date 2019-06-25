import React, { Component } from "react";
import styled from "./index.css";
export default class MyOrderUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.center}>
                    暂无关注信息
                </div>
            </div>
        )
    }
}