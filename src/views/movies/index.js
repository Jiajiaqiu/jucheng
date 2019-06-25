import React from "react"
import { connect } from "react-redux";
import MoviesCompont from "../../components/movies/movies";
import { fetch as fetchPolyfill } from 'whatwg-fetch'
export default class Movies extends React.Component{
    render() {
        let data = this.state;
       
        return(
            <div>
                <MoviesCompont data={data}/>
            </div>
        )
    }
    componentDidMount() {
        fetchPolyfill("/RestTheatre/getTheatreList?page=1&&version=5.1.4&referer=2")
            //未处理的结果集
            .then((res) => res.json())
            .then((data) => {
                this.setState(data.data.theatre_list)           
            })

    }
}
