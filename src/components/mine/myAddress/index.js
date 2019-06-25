import React, { Component } from "react";
import MyAddressUi from "./indexUI";
import Header from "../../header";
export default class MyAddress extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{ height: '100%' }}>
                <Header title='收货地址' />
                <MyAddressUi />
            </div>
        )
    }
}