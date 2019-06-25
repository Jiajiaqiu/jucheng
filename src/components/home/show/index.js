import React, { Component } from "react";
import ShowUI from "./indexUI";
import Header from "../../header";
import { connect } from "react-redux";
import { searchAction, showListAction } from "../../../action/actionCreator";
import { object } from "prop-types";
class Show extends Component {
    constructor() {
        super()
        this.state={
             dataMsg : null,
             dataTwo:null,
             index:-2
        }
    }
    componentDidMount(){
        
        let name = window.sessionStorage.getItem('name')
        let show = this.props.show.length>0 ? this.props.show: JSON.parse(window.sessionStorage.getItem('show'))
        
        show.map((item,index)=>{
            item.title == name 
                ? this.setState({dataMsg:  item.list }) :''            
        })
        this.props.handleSearchChange()
        this.handleListChange = this.handleListChange.bind(this)
       
    }
    render() {
        let { data, value} = this.props 
        console.log(data,value)
        let dataD = this.state.dataMsg 
        let dataTwo = this.state.dataTwo
        if (dataD) {
            value = dataD
            this.state.dataTwo = null
        }
        
        if (dataTwo) {
             value = dataTwo
            this.state.dataMsg = null
        }
        return (
            <div>
                <Header title='演出' />
                <ShowUI index={this.state.index} 
                data={data} 
                value={value} 
                handleListChange={this.handleListChange} 
                handleShowListChange={this.props.handleShowListChange.bind(this)}
                 />
            </div>
        )
    }
    handleListChange(title,index){
        
        this.setState({
            index
        })
        window.sessionStorage.setItem('title',title)
        let titleto = window.sessionStorage.getItem('title')
       
        let show = this.props.show.length > 0 ? this.props.show : JSON.parse(window.sessionStorage.getItem('show'))
        console.log(show, 899)
        show.map((item, index) => {
            item.title == titleto
                ? this.setState({ dataTwo: item.list }) : ''
        })
        
        
    }




}
const mapStateToProps = (state) => ({
    data:state.search.objSearch,
    value: state.search.obj,
    show:state.home.objShow
})
const mapDispatchToProps = (dispatch) => ({
    handleSearchChange(){
        dispatch(searchAction())
    },
    handleShowListChange(index) {
        dispatch(showListAction())

        this.setState({
            dataMsg : null,
            dataTwo : null,
            index:-1
        })
       
    }
})
export default connect(mapStateToProps, mapDispatchToProps)(Show)