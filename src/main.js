//可以在当前js中使用jsx语法
import React from "react";
//操作DOM
import ReactDOM from "react-dom";
import  App from "./App";
import "./common/css/reset.css"
import "./common/js/flexble"
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("app"),
    ()=>{
        console.log("挂载成功")
    }
)

/*
1、Fragment:内置组件用来当做一个盒子的整体 不会被渲染到页面上

2、React中如何接收组件标签内部嵌套的元素/组件
    this.props.children  类似于vue中的插槽


* */