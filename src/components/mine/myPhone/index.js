import React, { Component } from "react";
import MyPhoneUi from "./indexUI";
import Header from "../../header";
export default class MyPhone extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div>
                <Header title='联系电话' />
                <MyPhoneUi />
            </div>
        )
    }
}