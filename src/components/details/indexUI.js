import React, { Component } from "react";
import { NavLink } from "react-router-dom"
import icon from "../../common/iconfont/iconfont.css"
import img from '../../common/images/img.jpg'
import styled from './index.css'
export default class DetailsUI extends Component {
    constructor() {
        super()
        
    }
    render() {
        let { dt } = this.props 
        if(!dt){
            dt={}
        }
        
        return (
            <div className={styled.box}>
                {/*  */}
                <div className={styled.box1}>
                    
                            <div  className={styled.brief}>
                                <div className={styled.top}>
                            <img src={dt.schePic ? dt.schePic :dt.pic } className={styled.img} />
                                    <div className={styled.nav}>
                                        <h3 className={styled.text}>演出详情</h3>
                                        <NavLink to='/home'>
                                            <span className={styled.back}>
                                                <i className={icon.iconfont}>&#xe612;</i>
                                            </span>
                                        </NavLink>
                                        <span className={styled.like}>
                                            <em className={icon.iconfont}>&#xe621;</em>
                                        </span>
                                        <span className={styled.home}>
                                            <strong className={icon.iconfont}>&#xe622;</strong>
                                        </span>
                                    </div>
                                    <div className={styled.content}>
                                        <div className={styled.left}>
                                    <img src={dt.schePic ? dt.schePic : dt.pic} className={styled.pic} />
                                        </div>
                                        <div className={styled.right}>
                                            <h3 className={styled.name}>
                                                {dt.show_name? dt.show_name : dt.schedular_name}
                                            </h3>
                                            <p className={styled.price}>￥{dt.low_price}-{dt.high_price}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className={styled.secondary}>
                                    <div className={styled.info}>
                                <h3 className={styled.infoTime}>{dt.schedular_name ? dt.date : dt.show_time }</h3>
                                        <p className={styled.infoPlace}>
                                    {dt.c_name ? dt.c_name : dt.city_name} | {dt.v_name ? dt.v_name : dt.venue_name}
                            </p>
                                    </div>
                                    <div className={styled.pointer}>
                                        <em className={icon.iconfont}>&#xe617;</em>
                                    </div>
                                </div>
                            </div>
                     
                    <div className={styled.tips}>
                        <div className={styled.tipsInfo}>
                            <span className={styled.tipsInfoName}>开卡送￥100 最高可省￥125</span>
                            <span className={styled.tipsBase}>立即开卡</span>
                            <i className={icon.iconfont}>&#xe61b;</i>
                        </div>
                    </div>
                </div>
                {/* 入场支持 */}
                <div className={styled.schedule}>
                    <div className={styled.scheduleItem}>
                        <span className={styled.itemName}>入场：</span>
                        <span className={styled.itemInfo}>1.2米以上凭成人票入场，1.2米以下谢绝入场（迟到的观众需在场外等待25分钟才能入场）</span>
                    </div>
                    <div className={styled.scheduleItem}>
                        <span className={styled.itemName}>支持</span>
                        <span className={styled.itemText}>同城满200免邮</span>
                    </div>
                </div>
                {/* 巡演城市 */}
                <div className={styled.city}>
                    <div className={styled.desc}>
                        <h3>巡演城市</h3>
                        <p className={styled.num}><span className={styled.count}>77</span>场<i className={icon.iconfont}>&#xe61b;</i></p>
                    </div>
                    <ul className={styled.list}>                     
                        <li className={styled.listContent}>
                            <p>上海</p>
                            <p>
                                06/07-06/16
                            </p>
                        </li>
                        <li className={styled.listContent}>
                            <p>武汉</p>
                            <p>
                                06/07-06/16
                            </p>
                        </li>
                    </ul>
                    
                </div>
                {/* 演出介绍 */}
                <div className={styled.intro}>
                    <h3 className={styled.introTitle}>演出介绍</h3>
                    <div className={styled.introContent}>
                        <p className={styled.introleft}>
                            <span style={{ color: 'rgb(192, 0, 0)' }}>(1.2米以上凭成人票入场，1.2米以下谢绝入场，迟到的观众需在场外等待25分钟才能入场)</span>
                        </p>
                        <p className={styled.introcenter}>世界原版经典音乐剧《猫》CATS </p>
                        <p className={styled.introcenter}>2019中国“猫”年震撼回归 （The year of CATS）</p>
                        <p className={styled.introcenter}>2018年，长达6个月的巡演，共计157场演出，来自伦敦西区的杰里科猫所到之处万人空巷，和30万国内观众共同谱写月光下难忘的“回忆”！</p>
                        <p className={styled.introcenter}>2019年，感动不说再见！杰里科舞会的大幕再度拉开，邀请更多观众一同在月光下奏响记忆中的熟悉序曲，见证这部“一生必看的时代典藏”！</p>
                        <p className={styled.introcenter}>15种语言、30个国家、300座城市、8100万观众、20000多场演出，全球最受欢迎的音乐剧震撼回归！</p>
                        <p className={styled.introcenter}>中国音乐剧启蒙之作，创下国内尚未开演票房过亿的“奇迹”，2019年，再度唤起亿万人心中永恒的“回忆”！</p>
                        <p className={styled.introcenter}><img  src="http://image.juooo.com/group1/M00/01/A5/rAoKmVvX_h-AIB3_APJs08N5TNg000.png"/></p>
                        <p className={styled.introcenter}>（温馨提示：英文演出 中文字幕）</p>
                        <p className={styled.introcenter}>无法超越的辉煌历史The History of CATS</p>



                        
                    </div>
                </div>
                {/* 温馨提示 */}
                <div className={styled.detailList}>
                    <div className={styled.tipsTitle}>
                        <h3>温馨提示</h3>
                        <i className={icon.iconfont}>&#xe61b;</i>
                    </div>
                    <ul className={styled.tipsList}>
                        <li>
                            <span className={styled.dot}></span>
                            <span>快递说明</span>
                        </li>
                        <li>
                            <span className={styled.dot}></span>
                            <span>订票说明</span>
                        </li>
                        <li>
                            <span className={styled.dot}></span>
                            <span>确认订单</span>
                        </li>
                        <li>
                            <span className={styled.dot}></span>
                            <span>购票提醒</span>
                        </li>
                    </ul>
                </div>
                {/* 相关推荐 */}
                <div className={styled.remmond}>
                    <h3>相关推荐</h3>
                    <div className={styled.remmondList}>
                        <div className={styled.left}>
                            <img src={img} className={styled.pic} />
                        </div>
                        <div className={styled.right}>
                            <p className={styled.showData}>
                                <span>7/14</span>周日
                            </p>
                            <h3 className={styled.double}>
                                浦发银行信用卡唯美呈献 2019音乐剧明星集锦音乐会-成都站
                            </h3>
                            <p className={styled.venue}>
                                成都 | 华熙LIVE·528 M空间
                            </p>
                            <p className={styled.price}>
                                <strong className={styled.priceNum}>￥298</strong>起
                            </p>
                        </div>
                    </div>
                </div>
                {/* 选座购买 */}
                <div className={styled.footer}>
                    <div className={styled.footerLeft}>
                        <span className={icon.iconfont}>&#xe616;</span>
                         客服
                    </div>
                    <div className={styled.btn}>
                        选座购买
                    </div>
                </div>
            </div>
        )
    }
}