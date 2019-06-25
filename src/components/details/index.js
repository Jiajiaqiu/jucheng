import React, { Component } from "react";
import DetailsUI from "./indexUI";
import { connect } from "react-redux";
class Details extends Component {
    constructor() {
        super()
        this.state={
            dt:null
        }
    }
    componentDidMount() {

        let id = window.sessionStorage.getItem('id')
        let data = this.props.data.length > 0 ? this.props.data : JSON.parse(window.sessionStorage.getItem('data'))
        let brr = this.props.brr.length > 0 ? this.props.brr : JSON.parse(window.sessionStorage.getItem('brr'))
        let arr = this.props.arr.length > 0 ? this.props.arr : JSON.parse(window.sessionStorage.getItem('arr'))
        data.map((item,index)=>{
         let dt = item.sche_id == id ?  item :'';   
         if(dt){
             this.setState({
                 dt
             })
             return;            
         }
         brr.map((item,index)=>{
             item.map((itm,idx)=>{                
                 let dt = itm.sche_id == id ? itm : '';
                 if (dt) {
                     this.setState({
                         dt
                     })
                     return;
                 }
             })
         })
        arr.map((it, idt) => {
            let dt = it.sche_id == id ? it : '';
            if (dt) {
                this.setState({
                    dt
                })
                return;                   
                }
            })
       })    
    }
    render() {
        let {dt} = this.state
        return (
            <div>
                <DetailsUI style={{ height: '100%' }}  dt={dt}/>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    data: state.home.objList,
    arr: state.home.arr,
    brr: state.home.brr
})
const mapDispatchToProps= (dispatch) => ({

})
export default connect(mapStateToProps, mapDispatchToProps)(Details)