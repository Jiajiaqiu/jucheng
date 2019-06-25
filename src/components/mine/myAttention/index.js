import React, { Component } from "react";
import MyClipUi from "./indexUI";
import Header from "../../header";
export default class MyClip extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Header title='我的关注' />
                <MyClipUi />
            </div>
        )
    }
}