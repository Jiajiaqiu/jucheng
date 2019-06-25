import React, { Component } from "react";
import MyOrderUi from "./indexUI";
import Header from "../../header";
export default class MyOrder extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div style={{height:'100%'}}>
                <Header title='我的订单'/>
                <MyOrderUi />
            </div>
        )
    }
}