import React, { Component } from "react";
import styled from "./index.css";
export default class MyMessageUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.center}>
                    没有消息记录
                </div>
            </div>
        )
    }
}