import React, { Component } from "react";
import shore from "../../common/images/shore.png";
import lunbo1 from "../../common/images/lunbo1.jpg";
import lunbo2 from "../../common/images/lunbo2.jpg";
import lunbo3 from "../../common/images/lunbo3.jpg";
import "../../common/css/swiper.min.css";
import Swiper from "../../common/js/swiper.min.js";
import styled from './index.css'
import { NavLink } from "react-router-dom"
// import { NavLink } from "react-router-dom"
import icon from "../../common/iconfont/iconfont.css"
export default class LunboUI extends Component{
    constructor() {
        super()
    }
    componentDidMount() {
        var mySwiper = new Swiper(' .swiper-container', {
            autoplay: true,//可选选项，自动滑动
            pagination: {
                el: '.swiper-pagination',
            },
        })
    }
    render(){
        return (
            <div className={styled.box}>
                {/* 导航 */}
                <div className={styled.header}>
                    <div className={styled.address}>
                        <strong className={icon.iconfont}>&#xe617;</strong>
                        <span>全国</span>
                    </div>
                    <div className={styled.search}>
                        <strong className={styled.strong}></strong>
                        <span>搜索热门演出</span>
                    </div>
                    <div>
                        <span>
                            <img src={shore} className={styled.img} />
                        </span>
                    </div>
                </div>
                {/* 轮播图 */}
                <div className={styled.swiper}>
                    <div className="swiper-container">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src={lunbo1} className={styled.swiperImg} /></div>
                            <div className="swiper-slide"><img src={lunbo2} className={styled.swiperImg} /></div>
                            <div className="swiper-slide"><img src={lunbo3} className={styled.swiperImg} /></div>
                        </div>
                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </div>
        )
    }
}