import React, { Component } from "react";
import styled from './movies.css';
import { getTheartreList } from "../../api/movies";
export default class MoviesUI extends Component {
    constructor() {
        super()
        //   let data =  getTheartreList()
        //   console.log('data',data)
    }
    render() {
        let { data } = this.props
        //console.log('props', this.props.data)
        let obj = this.props.data || {};
        // console.log('obj', obj)
        // console.log(Object.keys(obj));
        return (
            <div className={styled.box}>
                <div className={styled.header}>
                    <h3 className={styled.h3}>剧院</h3>
                </div>
                <div className={styled.center}>
                    <div className={styled.wapper}>
                        <div className={styled.contain}>
                            <ul>
                                {
                                    Object.keys(obj).map((item, index) => {
                                        // console.log(11111, item, obj[item].name);
                                        // console.log(11111, item, obj[item].show_list);
                                        return <li key={index}>
                                            <div className={styled.list}>
                                                <div className={styled.theater}>
                                                    <a href="#" className={styled.toggle}>
                                                        <div className={styled.show}>
                                                            <img src={obj[item].pic} className={styled.pic} />
                                                        </div>
                                                        <div>
                                                            <p className={styled.name}>{obj[item].name}</p>
                                                            <p>{obj[item].count}场在售演出</p>
                                                        </div>
                                                    </a>
                                                    <a href="#">
                                                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDplMTg1ODliMS01OTczLTViNGQtYjI4MC03NjY1YjBkODYxODgiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RkJERDhERTY1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RkJERDhERTU1NDU2MTFFOUE5RjE5ODQyNDk4MDU5QkIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6YWI2MGY3MDEtMGRjMi01ODQwLTgzOWItMjZiZjRkYTFlNzcyIiBzdFJlZjpkb2N1bWVudElEPSJhZG9iZTpkb2NpZDpwaG90b3Nob3A6NzIyZTVhNjctNDNhMi0xMWU5LTkwNmYtYWE5ZmI0OGRjNGEwIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+qADHOAAAANFJREFUeNpi/P//PwM9ARMDncGohaMWjlo4Ai1kSU9P5wHSU4A4Aoh/AfE0IK7eu3fvX3TFzs7ObECqH4gToEILgLgQqPYXFrXMQKoViLOAGKRvBRDnsACJCUAcD1XHDsTlQPweiDuxOLAFagAMgNhfgbgMi9oSqFkwALLjLyhIo7AojsIRIpSqjWTCEY+MtEw0K7GIr8ShfhmRYrjEl4PiMAdqcRgQ/wbi6UDcgcOQGiDmRks0NTjU9gCxIFqiyWccrYBHLRy1cNTC4WchQIABAOD3K3WFJTtNAAAAAElFTkSuQmCC" className={styled.img} />
                                                    </a>
                                                </div>
                                                <ul>
                                                <div className={styled.info}>
                                                    <div className={styled.swper}>
                                                        {
                                                            obj[item].show_list.map((items, index) => {
                                                                // console.log('22',items)
                                                                return <li key={index}>
                                                                    <div className={styled.slide}>
                                                                        <div className={styled.namedata}>
                                                                            <p className={styled.data}>{items.show_time}</p>
                                                                            <span className={styled.dot}></span>
                                                                        </div>
                                                                        <a href="#">
                                                                            <img src={items.pic} className={styled.picdata} />
                                                                        </a>
                                                                    </div>

                                                                </li>
                                                            })
                                                        }
                                                    </div>
                                                </div>
                                                </ul>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}