import { createStore,combineReducers, applyMiddleware} from "redux";
import reduxPromise from "redux-promise-middleware";

import home from "./reducer/home";
import movies from "./reducer/movies";
import search from "./reducer/search";

const reducer = combineReducers({
    home,
    movies,
    search
})


const store = createStore(reducer, applyMiddleware(reduxPromise))
export default store