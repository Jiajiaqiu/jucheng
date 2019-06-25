import React, { Component } from "react";
import  "../../common/css/swiper.min.css";
import styled from './index.css'
import movies from '../movies/movies.css'
import { NavLink } from "react-router-dom"
import BScroll from 'better-scroll'
import {withRouter} from 'react-router-dom'

// import { NavLink } from "react-router-dom"
import icon from "../../common/iconfont/iconfont.css"
 class HomeUI extends Component {
    constructor() {
        super()        
    }
    componentDidUpdate(){
        let scroll = new BScroll('.wrapper', {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'           
        })
        let scroll1 = new BScroll('.wrap', {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'           
        })      
        let scroll2 = new BScroll('.wrappe', {
            startX: 0,
            click: true,
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical'
            
        })
    }
    render() {
        let objList = this.props.data || {};
        let objTheatre = this.props.value || {};
        let objActions = this.props.actions || {};
        
        //巡回演出
        let objListTour = this.props.listTour || {};
        // 演唱会
        let objShow = this.props.show || {};
        let arr = this.props.arr || {};
        let brr = this.props.brr || {};      
        let objItem = this.props.item || {};
        return (
            <div className={styled.box}>              
                <div className={styled.contain}>
                    {/* 小图标列表 */}
                    <div className={styled.advertion}>
                        
                            <div className={styled.classify}>
                                {
                                    Object.keys(objItem).map((item,index)=>{

                                        return <div key={index} className={styled.item} onClick={this.props.handleClassify.bind(this,`${objItem[item].name}`)}>
                                            <img src={objItem[item].pic} className={styled.page} />
                                            <span className={styled.span}>{objItem[item].name}</span>
                                        </div>     
                                    })
                                }
                            </div>
                        
                        <div className={styled.banner}></div>
                        <div className={styled.operation}>
                            <ul className={styled.operationUl}>
                                <li className={styled.operationLi}>
                                    <div>
                                        <h3 className={styled.title}>橙PLUS卡</h3>
                                        <p>限时送<span className={styled.num}>100元</span></p>
                                    </div>
                                    <div className={styled.plus}></div>
                                </li>
                                <li className={styled.operationLi}>
                                    <div className={styled.head}>
                                        <h3 className={styled.title}>积分商城</h3>
                                        <p>用积分，<span className={styled.num}>0元</span>购票</p>
                                    </div>
                                    <div className={styled.plusTo}></div>
                                </li>
                            </ul>
                            <ul className={styled.right}>
                                <li className={styled.left}>
                                    <div className={styled.head}>
                                        <h3 className={styled.title}>聚特惠</h3>
                                        <p>优惠<span className={styled.num}>不止</span>一点点</p>
                                    </div>
                                    <div className={styled.preferentiala}>
                                    </div>
                                </li>
                                <li className={styled.left}>
                                    <div className={styled.head}>
                                        <h3 className={styled.title}>日历</h3>
                                        <p>演出日期，<span className={styled.num}>一目了然</span></p>
                                    </div>
                                    <div className={styled.preferentialb}>
                                    </div>
                                </li>
                                <li className={styled.left}>
                                    <div className={styled.head}>
                                        <h3 className={styled.title}>欢聚橙卡</h3>
                                        <p><span className={styled.num}>33元</span>看演出</p>
                                    </div>
                                    <div className={styled.preferentialc}>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* 热门演出 */}
                    <div className={styled.action}>
                            <div className={styled.actionMin}>
                                <div className={styled.tour}>
                                    <h3>热门演出</h3>
                            
                                    <strong className={icon.iconfont} >&#xe61b;</strong>
                                
                                </div>
                            
                            <div className="wrapper">
                            <ul className={`content ${styled.list}`}>
                                    {
                                        Object.keys(objActions).map((item, index) => {
                                            return <li key={index} className={styled.slid} onClick={this.props.handleHotActions.bind(this, `${objActions[item].show_name}`)}>
                                                <div className={styled.hot}>
                                                    <img src={objActions[item].pic} />
                                                </div>
                                                <h3 className={styled.single}>{objActions[item].show_name}</h3>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        </div>
                    
                    {/* 巡回演出 */}
                    <div className={styled.actionMinB}>
                        <div className={styled.tourB}>
                            <h3>巡回演出</h3>
                            <strong className={icon.iconfont}>&#xe61b;</strong>
                        </div>
                            
                        <div className="wrap">
                            <ul className={`content ${styled.horizontal}`}>
                            {
                                Object.keys(objListTour).map((item,index)=>{
                                    
                                    return <li key={index} className={styled.horizontalLi}>
                                        <div className={styled.horizontalImg}>
                                            <img className={styled.horizontalPic} src={objListTour[item].pic}/>
                                        </div>
                                        <h3 className={styled.horizontalTxt}>{objListTour[item].show_name}</h3>
                                        <p className={styled.horizontalP}>{objListTour[item].schedular_num}场巡演</p>
                                    </li>
                                })
                            }
                        </ul>
                        </div>
                    </div>
                    {/* 演唱会，音乐剧，音乐会 */}
                   
                        <ul>
                        {
                            objShow.map((item, index) => {
                                return <li key={index} className={styled.hotVenue}>
                                    <div className={styled.tourB}>
                                        <h3>{item.title}</h3>
                                        <strong className={icon.iconfont}>&#xe61b;</strong>
                                    </div>
                                    <div key={index} className={styled.bgcC} onClick={this.props.handleAllActions.bind(this, `${arr[index].sche_id}`)}>
                                        <div className={styled.bgcLeft}>
                                            <img className={styled.bgcLeftImg} src={arr[index].pic} />
                                        </div>
                                        <div className={styled.bgcRight}>
                                            <div className={styled.descTwo}>
                                                <p className={styled.showDataB}>
                                                    <span>{arr[index].date}</span>{arr[index].week}
                                                </p>
                                                <h3 className={styled.double}>{arr[index].schedular_name}</h3>
                                                <p className={styled.venueB}>{arr[index].city_name} | {arr[index].venue_name}</p>
                                            </div>
                                        </div>
                                    </div>
                                     
                                        <ul className={`content ${styled.wrapper}`}>
                                        {
                                            brr[index].map((itm, idx) => {
                                                // console.log(itm)
                                                return <li key={idx} className={styled.wrapperLi} onClick={this.props.handleAllActions.bind(this, `${itm.sche_id}`)}>
                                                    <div className={styled.juooo}>
                                                        <img className={styled.juoooImg} src={itm.pic} />
                                                    </div>
                                                    <h3 className={styled.single}>{itm.schedular_name}</h3>
                                                    <strong className={styled.priceNum}>{itm.low_price}</strong>起
                                                        </li>
                                            })
                                        }
                                    </ul>
                                    
                                </li>
                            })
                        }
                    </ul>
                    
                    {/* 热门场馆 */}
                    <div className={styled.hotVenue}>
                        <div className={styled.tourB}>
                            <h3>热门场馆</h3>
                            <strong className={icon.iconfont}>&#xe61b;</strong>
                        </div>
                        <div className="wrappe">
                            <ul className={`content ${styled.venueListLeft}`}>

                            {
                                Object.keys(objTheatre).map((item, index) => {
                                    
                                    return <li key={index} className={styled.venueList}>
                                        <div className={styled.venueUl}>
                                            <div className={styled.venueLi}>
                                                <div className={movies.theater}>
                                                    <a href="#" className={movies.toggle}>
                                                        <div className={movies.show}>
                                                            <img src={objTheatre[item].pic} className={movies.pic} />
                                                        </div>
                                                        <div>
                                                            <p className={movies.name}>{objTheatre[item].name}</p>
                                                            <p>{objTheatre[item].count}场在售演出</p>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC" className={styled.img} className={styled.imgb} />
                                                    </a>
                                                </div>
                                                <ul>
                                                    <div className={movies.info}>
                                                        <div className={movies.swper}>
                                                            
                                                            {
                                                                
                                                                objTheatre[item].show_list.map((items, index) => {
                                                                    return <li key={index}>
                                                                        <div className={movies.slide}>
                                                                            <div className={movies.namedata}>
                                                                                <p className={movies.data}>{items.show_time}</p>
                                                                                <span className={movies.dot}></span>
                                                                            </div>
                                                                            <a href="#">
                                                                                <img src={items.pic} className={movies.picdata} onClick={this.props.handleTheatre.bind(this, `${items.id}`)}/>
                                                                            </a>
                                                                        </div>
                                                                    </li>
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                        </div>
                    </div>
                    {/* 为你推荐 */}
                    <div className={styled.remmond}>
                        <h3 className={styled.remmondtitle}>为你推荐</h3>
                        <ul className={styled.remmondUl}>
                            {/* <NavLink to='/details'> */}
                            {
                                Object.keys(objList).map((item, index) => {
                                    return <li key={index} className={styled.remmondLi} onClick={this.props.handleRemmond.bind(this, `${objList[item].sche_id}`)}>
                                        <div className={styled.show}>
                                            <img src={objList[item].schePic} className={styled.remmongImg} />
                                        </div>
                                        <div className={styled.desc}>
                                            <p className={styled.showData}>
                                                <span>{objList[item].show_time}</span>{objList[item].week}
                                            </p>
                                            <h3 className={styled.double}>{objList[item].show_name}</h3>
                                            <p className={styled.venue}>{objList[item].c_name} | {objList[item].v_name}</p>
                                            <p className={styled.price}>
                                                <strong className={styled.priceNum}>{objList[item].low_price}</strong>起
                                        </p>
                                        </div>
                                    </li>
                                })
                            }
                            {/* </NavLink> */}
                        </ul>
                    </div>
                    {/*  */}
                </div>

            </div>
        )
    }
}
 export default  withRouter(HomeUI)