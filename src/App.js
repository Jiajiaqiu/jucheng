import React ,{Component}from "react";
import {HashRouter as Router,Route,Switch,Redirect} from "react-router-dom";
import Home from "./views/home"
import Movies from "./views/movies"
import Order from "./views/order"
import Mine from "./views/mine"
import Layout from "./layout"
import {Provider} from "react-redux";
import MyOrder from "./components/mine/myOrder";
import MyClip from "./components/mine/myClip";
import MyCard from "./components/mine/myCard";
import MyAttention from "./components/mine/myAttention";
import MyAddress from "./components/mine/myAddress";
import MyMessage from "./components/mine/myMessage";
import MyFaceBack from "./components/mine/myFaceBack";
import MyPhone from "./components/mine/myPhone";
import Show from "./components/home/show";
import Details from "./components/details";

// import store from "./store"
import { fetch as fetchPolyfill } from 'whatwg-fetch'
//创建组件
 class App extends Component{
    render(){
       
        return(

                <Router>
                    <Layout>
                        <Switch>
                            <Redirect exact from="/" to="/home" />
                            <Route path="/home" component={Home} />
                            <Route path="/movies" component={Movies}/>
                            <Route path="/order" component={Order}  />
                            <Route path="/myOrder" component={MyOrder} />
                            <Route path="/mine" component={Mine} />
                            <Route path="/myClip" component={MyClip} />
                            <Route path="/myCard" component={MyCard} />
                            <Route path="/myAttention" component={MyAttention} />
                            <Route path="/myAddress" component={MyAddress} />
                            <Route path="/myMessage" component={MyMessage} />
                            <Route path="/myFaceBack" component={MyFaceBack} />
                            <Route path="/myPhone" component={MyPhone} />
                            <Route path="/show" component={Show} />
                            <Route path="/details" component={Details} />
                        </Switch>
                    </Layout>
                </Router>
         
        )
    }
    

}
export default App