import React, { Component } from "react";
import styled from './mine.css'
import { NavLink } from "react-router-dom"
import icon from "../../common/iconfont/iconfont.css";
export default class MineUI extends Component {
    constructor() {
        super()
    }
    render(){
        return (
            <div className={styled.box}>
                {/* 头部 */}
                <div className={styled.nav}>
                    <div className={styled.header}>
                    </div>
                    <p className={styled.name}>
                        <span className={styled.nickname}>18702553382</span>
					</p>
                    <p className={styled.grade}>ID：6709970</p>
                    <div className={styled.module}>
                        <div className={styled.rowtext}>
                            <span className={styled.item}></span>
                            <span className={styled.bold}>尊享多项特权</span>
                        </div>
                        <p className={styled.rowtxt}>开通橙PLUS卡，限时送100元</p>
                    </div>
                </div>
                {/* 余额积分优惠券 */}
                <div className={styled.wrapper}>
                    <ul className={styled.flex}>
                        <li className={styled.flexitem}>
                            <p className={styled.wrap}>
                                <span>0.00</span>元
                            </p>
                            <p className={styled.warp}>余额</p>
                        </li>
                        <li className={styled.flexitem}>
                            <p className={styled.wrap}>
                                <span>2</span>积分
                            </p>
                            <p className={styled.warp}>积分</p>
                        </li>
                        <li className={styled.flexitem}>
                            <p className={styled.wrap}>
                                <span>4</span>张
                            </p>
                            <p className={styled.warp}>优惠券</p>
                        </li>
                    </ul>
                </div>
                {/* 我的订单 */}
                <NavLink to='/myOrder'>
                    <div className={styled.list}>
                        <div className={styled.too}>
                            <div className={styled.tick} >
                                <span className={icon.iconfont}>&#xe61a;</span>
                            </div>
                        我的订单
                        </div>
                    </div>
                </NavLink>
                {/* 我的票夹 */}
                <NavLink to='/myClip'>
                    <div className={styled.list}>
                        <div className={styled.too}>
                            <div className={styled.tick} >
                                <span className={icon.iconfont}>&#xe619;</span>
                            </div>
                            电子票夹
                            <i className={icon.iconfont}>&#xe61b;</i>
                        </div>
                    </div>
                </NavLink>
                {/* 我的卡包 */}
                <NavLink to='/myCard'>
                    <div className={styled.list}>
                        <div className={styled.too}>
                            <div className={styled.tick}>
                                <span className={icon.iconfont}>&#xe618;</span>
                            </div>
                            我的卡包
                            {/* <span className={styled.fl}>了解详情</span> */}
                            <i className={icon.iconfont}>&#xe61b;</i>
                        </div>
                    </div>
                </NavLink>
                {/* 我的关注，收货地址 */}
                <div className={styled.list1}>
                    <NavLink to='/myAttention'>
                    <div className={styled.too}>
                        <div className={styled.tick}>
                            <span className={icon.iconfont}>&#xe614;</span>
                        </div>
                        <div className={styled.listText}>
                            我的关注
                            <i className={icon.iconfont}>&#xe61b;</i>
                        </div>
                    </div>
                    </NavLink>
                    <NavLink to='/myAddress'>
                        <div className={styled.too}>
                            <div className={styled.tick}>
                                <span className={icon.iconfont}>&#xe617;</span>
                            </div>
                            <div className={styled.listText1}>
                                收货地址
                                <i className={icon.iconfont}>&#xe61b;</i>
                            </div>
                        </div>
                    </NavLink>
                </div>
                {/* 我的消息，意见反馈 */}
                <div className={styled.list1}>
                    <NavLink to='/myMessage'>
                        <div className={styled.too}>
                            <div className={styled.tick}>
                                <span className={icon.iconfont}>&#xe615;</span>
                            </div>
                            <div className={styled.listText}>
                                我的消息
                                <i className={icon.iconfont}>&#xe61b;</i>
                            </div>
                        </div>
                    </NavLink>
                    <NavLink to='/myFaceBack'>
                        <div className={styled.too}>
                            <div className={styled.tick}>
                                <span className={icon.iconfont}>&#xe613;</span>
                            </div>
                            <div className={styled.listText1}>
                                意见反馈
                                <i className={icon.iconfont}>&#xe61b;</i>
                            </div>
                        </div>
                    </NavLink>
                </div>
                {/* 联系电话 */}
                <NavLink to='/myPhone'>
                    <div className={styled.list}>
                        <div className={styled.too}>
                            <div className={styled.tick}>
                                <span className={icon.iconfont}>&#xe616;</span>
                            </div>               
                            联系电话
                            <i className={icon.iconfont}>&#xe61b;</i>
                        </div>
                    </div>
                </NavLink>
                <a className={styled.server}>
                    <span className={icon.iconfont}>&#xe616;</span>
                    在线客服
                </a>
            </div>
        )
    }
}