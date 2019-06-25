import React, { Component } from "react";
import MyMessageUI from "./indexUI";
import Header from "../../header";
export default class MyMessage extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Header title='我的消息' />
                <MyMessageUI />
            </div>
        )
    }
}