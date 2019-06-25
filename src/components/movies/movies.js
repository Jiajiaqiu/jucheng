import React, { Component } from "react";
import MoviesUI from "./moviesUI";
import { connect } from "react-redux";
import 'antd/dist/antd.min.css'
import  "antd/dist/antd.min.js";
import { Spin } from 'antd';

import { action } from "../../action/actionCreator";
console.log(222222)
class Movies extends Component {
    constructor() {
        super()   
        
    }
    render() {
        let {data} = this.props
        // console.log('data',data)
        return (
            <div>
                <MoviesUI data={data} />
                <Spin size="large"/>
            </div>
        )
    }
    componentDidMount() {
        this.props.handleChange()
    }
    
}
const mapStateToProps = (state) => ({
    data: state.movies.obj
})
const mapDispatchToProps = (dispatch) => ({
    handleChange() {
        dispatch(action())
    }
    

})
export default connect(mapStateToProps, mapDispatchToProps)(Movies)

