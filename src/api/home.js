import { fetch as fetchPolyfill } from "whatwg-fetch";
//首页底部、小图标列表
export const getClassifyItem = (resolve) => fetchPolyfill(
    '/home/getClassifyItem?city_id=0&operation_limit=5&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((data) => {
        // console.log(444,data)
        return resolve(data)
}
)
//热门演出
export const getActions = (resolve) => fetchPolyfill(
    '/home/getHotsRecommendList?city_id=0&rows=50&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((actions) => {       
        return resolve(actions)
    }
    )
//巡回演出
export const getTourRecommendList = (resolve) => fetchPolyfill(
    '/home/getTourRecommendList?city_id=0&rows=6&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((data) => {
        
        return resolve(data)
    }
    )
//演唱会/音乐剧/音乐会
export const getFloorShow = (resolve) => fetchPolyfill(
    '/home/getFloorShow?city_abb=&city_id=0&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((listTour) => {
       
        return resolve(listTour)
    }
    )
//热门场馆
export const getHotTheatre = (resolve) => fetchPolyfill(
    '/home/getHotTheatre?limit=6&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((value) => {
        // console.log('value', value.data.theatre_list)
        return resolve(value)
    }
    )
//为你推荐
export const getRecommendShow = (resolve) => fetchPolyfill(
    '/home/getRecommendShow?cityAdd=&page=1&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((data) => {
        // console.log('data', data.data.recommend_show_list)
        return resolve(data)
    }
    )
