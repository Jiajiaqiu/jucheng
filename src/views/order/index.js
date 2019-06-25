import React from "react"
import { connect } from "react-redux";
import Login from "../../components/login/login";
export default class Order extends React.Component{
    render() {
        return (
            <div>
                <Login/>
            </div>
        )
    }
}
