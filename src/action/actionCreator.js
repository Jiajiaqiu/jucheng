import { getMovies } from "../api/movies";
import { getRecommendShow,
         getHotTheatre, 
         getActions, 
         getTourRecommendList,
         getFloorShow,
         getClassifyItem } from "../api/home";
import { getShowCategory, getShowList } from "../api/search";



//movies部分
export const action = () => ({
    type: 'ACTION',
    payload: new Promise(resolve => {
        getMovies(resolve);
    })
})




//home部分
export const itemAction = () => ({
    type: 'ITEM_ACTION',
    payload: new Promise(resolve => {
        getClassifyItem(resolve);
    })
})
// 热门演出
export const moviesAction = () => ({
    type: 'MOVIES_ACTION',
    payload: new Promise(resolve => {
        getActions(resolve);
    })
})
// 巡回演出
export const listAction = () => ({
    type: 'LIST_ACTION',
    payload: new Promise(resolve => {
        getTourRecommendList(resolve);
    })
})
// 演唱会，音乐会，音乐剧
export const showAction = () => ({
    type: 'SHOW_ACTION',
    payload: new Promise(resolve => {
        getFloorShow(resolve);
    })
})
// 剧院
export const theatreAction = () => ({
    type: 'THEATRE_ACTION',
    payload: new Promise(resolve => {
        getHotTheatre(resolve);
    })
})
// 热门推荐
export const recommendAction = () => ({
    type: 'RECOMMEND_ACTION',
    payload: new Promise(resolve => {
        getRecommendShow(resolve);
    })
})



//search部分
export const searchAction = () => ({
    type: 'SEARCH_ACTION',
    payload: new Promise(resolve => {
        // console.log(11)
        getShowCategory(resolve);
    })
})
export const showListAction = () => ({
    type: 'SHOW_LIST_ACTION',
    payload: new Promise(resolve => {
        // console.log(11)
        getShowList(resolve);
    })
})
