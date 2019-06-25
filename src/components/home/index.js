import React, { Component } from "react";
import HomeUI from "./indexUI";
import LunboUI from "./lunboUI";
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom'
import { recommendAction, itemAction, theatreAction, moviesAction, listAction, showAction } from "../../action/actionCreator";
class Home extends Component {
    constructor() {
        super() 
        
    }
    render() {
        let { data, value, actions, listTour, show ,arr,brr,item} = this.props
        
        return (
            <div style={{height:'100%'}}>
                <LunboUI/>
                <HomeUI 
                data={data} 
                value={value}
                actions={actions} 
                listTour={listTour}
                show={show}
                arr={arr}
                brr={brr}
                item={item}
                handleClassify={this.handleClassify}
                handleHotActions={this.handleHotActions}
                handleAllActions={this.handleAllActions}
                handleTheatre={this.handleTheatre}
                handleRemmond={this.handleRemmond}
                />
            </div>
        )
    }
    componentDidMount(){
        this.props.hangleRecommendChange()
        this.props.hangleTheatreChange()
        this.props.hangleActionsChange()
        this.props.hangleListChange()
        this.props.hangleShowChange()
        this.props.hangleItemChange()
    }
   handleClassify(name){
    this.props.history.push({
        pathname: '/show',
        query:{name}
    })
    window.sessionStorage.setItem('show', JSON.stringify(this.props.show))
    window.sessionStorage.setItem('name', name)
   }
    handleRemmond(id){
        this.props.history.push({
            pathname: '/details',
            query: { id }
        })
        window.sessionStorage.setItem('data', JSON.stringify(this.props.data))
        window.sessionStorage.setItem('id', id)
    }
    handleHotActions(show_name){
        // console.log("show_name", show_name)
        this.props.history.push({
            pathname: '/details',
            query: { show_name }
        })
        window.sessionStorage.setItem('actions', JSON.stringify(this.props.actions))
        window.sessionStorage.setItem('show_name', show_name)
    }
    handleAllActions(id){
        this.props.history.push({
            pathname: '/details',
            query: { id }
        })
        window.sessionStorage.setItem('brr', JSON.stringify(this.props.brr))
        window.sessionStorage.setItem('arr', JSON.stringify(this.props.arr))
        window.sessionStorage.setItem('id', id)
    }
    handleTheatre(id){
        // console.log('id',id)
        // this.props.history.push({
        //     pathname: '/details',
        //     query: { id }
        // })
        // window.sessionStorage.setItem('value', JSON.stringify(this.props.value))
        // window.sessionStorage.setItem('id', id)
    }
}
const mapStateToProps = (state) => ({
    data: state.home.objList,
    value: state.home.objTheatre,
    actions: state.home.objActions,
    listTour: state.home.objListTour,
    show: state.home.objShow,
    arr: state.home.arr,
    brr: state.home.brr,
    item: state.home.objItem
})
const mapDispatchToProps = (dispatch) => ({
    hangleItemChange() {
        dispatch(itemAction())
    },
    hangleRecommendChange() {
        dispatch(recommendAction())
    },
    hangleTheatreChange() {
        dispatch(theatreAction())
    },
    hangleActionsChange() {
        dispatch(moviesAction())
    },
    // 巡回演出
    hangleListChange(){
        dispatch(listAction())
    },
    // 音乐会
    hangleShowChange() {
        dispatch(showAction())
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Home)