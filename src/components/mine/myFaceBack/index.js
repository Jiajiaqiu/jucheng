import React, { Component } from "react";
import MyFaceBackUi from "./indexUI";
import Header from "../../header";
export default class MyFaceBack extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Header title='意见反馈' />
                <MyFaceBackUi />
            </div>
        )
    }
}