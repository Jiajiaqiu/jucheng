import React, { Component } from "react";
import styled from './index.css'
import icon from "../../../common/iconfont/iconfont.css"
import "../../../common/css/swiper.min.css";
import BScroll from 'better-scroll'
export default class ShowUI extends Component {
    constructor() {
        super()
        
    }
    
    componentDidUpdate() {
        let scroll = new BScroll('.wrapper', {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
        })
    }
    render() {
        let { data } = this.props
        let  activeIndex = this.props.index
        let objSearch = this.props.data || {};
        let obj = this.props.value || {};
        
        
        return (
            <div className={styled.box}>
                {/* 导航 */}
                <div className={styled.nav}>
                    <div className={styled.type}>
                        <div className="wrapper">           
                            <ul className={`content ${styled.ul}`}>
                                
                                <li   className={styled.txt}  onClick={this.props.handleShowListChange}>全部</li>
                                
                                    {
                                        Object.keys(objSearch).map((item, index) => {
                                            return <li key={index} 
                                            className={`${styled.text} 
                                            ${activeIndex == index ?  styled.active:''} `}
                                             onClick={this.props.handleListChange.bind(null, `${objSearch[item].name}`, index)}
                                             >{objSearch[item].name}</li>
                                        })
                                    }
                                </ul>
                        </div>
                        
                    </div>
                    <div className={styled.right}>全国<i className={icon.iconfont}>&#xe61b;</i></div>
                </div>
                {/* 全部 */}
                <div className={styled.remmond}>
                    <ul className={styled.remmondUl}>
                        {
                            Object.keys(obj).map((item, index) => {               
                                return <li key={index} className={styled.remmondLi}>
                                    <div className={styled.show}>
                                        <img src={obj[item].pic} className={styled.remmongImg} />
                                    </div>
                                    <div className={styled.desc}>
                                        <p className={styled.showData}>
                                            <span>{obj[item].show_time_top ? obj[item].show_time_top : obj[item].date}</span>{obj[item].show_time_bottom ? obj[item].show_time_bottom : obj[item].week}
                                        </p>
                                        <h3 className={styled.double}>{obj[item].name ? obj[item].name: obj[item].schedular_name}</h3>
                                         <p className={styled.price}>
                                            <strong className={styled.priceNum}>{obj[item].min_price ? obj[item].min_price : obj[item].low_price}</strong>起
                                    </p>
                                    </div>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}