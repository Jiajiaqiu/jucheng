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
                <Header title='票夹' />
                <MyClipUi />
            </div>
        )
    }
}