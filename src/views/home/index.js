import React from "react"
import { connect } from "react-redux";
import Home from "../../components/home";
export default class HomeViews extends React.Component{
    render() {
        return(
            <div>
                <Home/>
            </div>
        )
    }
}
