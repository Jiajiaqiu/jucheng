import React, { Component } from "react";
import styled from "./index.css";
export default class MyOrderUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.center}>
                    <div className={styled.main}>
                        <div className={styled.mainBox}>
                            <p className={styled.remind}>
                                您还没有绑定过欢聚橙卡
                            </p>
                            <div className={styled.item}>
                                <a href='#' className={styled.buyBtn}>现在购卡</a>
                                <a href='#' className={styled.bindBtn}>立即绑定</a>
                            </div>
                        </div>
                   </div>
                </div>
                <div className={styled.record}>
                    <div className={styled.title}>
                        交易记录
                    </div>
                    <div className={styled.empty}>
                        没有更多了
                    </div>
                </div>
                <div className={styled.footer}>
                    <a href='#' className={styled.pkBtn}>用卡购票</a>
                </div>
            </div>
        )
    }
}