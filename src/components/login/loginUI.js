import React, { Component } from "react";
import styled from './login.css'
import { NavLink } from "react-router-dom"
import icon from "../../common/iconfont/iconfont.css"
export default class LoginUI extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <div className={styled.box}>
                <div className={styled.navbar}>
                    <div className={styled.navbarinner}>
                        <div className={styled.left}>
                                <p className={styled.link}>
                                    <NavLink to='/mine'>
                                        <span className={icon.iconfont}>&#xe612;
                                        </span>
                                    </NavLink>
                                </p>
                        </div>
                    </div>
                </div>
                <div className={styled.main}>
                    <div >
                        <h1 className={styled.wrap}>欢迎来到聚橙网</h1>
                        <div >
                            <div className={styled.area}>
                                <form>
                                    <ul className={styled.list}>
                                        <li className={styled.item}>
                                            <label className={styled.label}>+86</label>
                                            <input type="text" name="text" placeholder="请输入手机号" className={styled.input}/>
                                        </li>
                                    </ul>
                                    <p className={styled.tip}>未注册手机号验证成功后自动创建账户</p>
                                </form>
                            </div>
                            <div className={styled.btn}>
                                <a href="javascript:;" disabled="disabled" className={styled.lg}>获取验证码</a></div> 
                            <div className={styled.toggle}>
                                <div className={styled.sms}>
                                    <span className={styled.mail}>邮箱注册</span>
                                    <span className={styled.logintg}>密码登录</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styled.footer}>
                    <div className={styled.inner}>
                        <div className={styled.imgitem}>
                            <a href="https://m.juooo.com/Passport/oauthRegLogin?type=qq" className={styled.img}>
                                <span className={styled.iconqq}>
                                </span>
                            </a>
                        </div>
                        <div className={styled.imgitem}>
                            <a href="https://m.juooo.com/Passport/oauthRegLogin?type=sina" className={styled.img}>
                                <span className={styled.iconweibo}></span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
                )
            }
        }
        
        
        
        
        
