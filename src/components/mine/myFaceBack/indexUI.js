import React, { Component } from "react";
import styled from "./index.css";
import icon from "../../../common/iconfont/iconfont.css";
export default class MyFaceBackUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.center}>
                    <div className={styled.text}>
                        <textarea placeholder=' 请输入您的问题或建议，我们将不断改进'></textarea>
                        <div className={styled.num}>
                            <span >0</span>/<span>200</span>
                        </div>
                    </div>
                </div>
                <div className={styled.input}>
                    <input className={styled.telNum} placeholder=' * 请输入有效手机号码'/>
                </div>
                <a href='#' className={styled.city}>
                    <span>*选择你所在的城市</span>
                </a>
                <div className={styled.fl}>
                    <i className={icon.iconfont}>&#xe617;</i>
                    <i className={icon.iconfont}>&#xe61b;</i>
                </div>
                <div className={styled.info}>
                    <button className={styled.wrap}>提交</button>
                </div>
            </div>
        )
    }
}