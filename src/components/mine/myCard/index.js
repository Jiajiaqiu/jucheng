import React, { Component } from "react";
import MyClipUi from "./indexUI";
import Header from "../../header";
export default class MyClip extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header title='我的卡包' />
                <MyClipUi />
            </div>
        )
    }
}