import { fetch as fetchPolyfill } from "whatwg-fetch";

// 导航
export const getShowCategory = (resolve) => fetchPolyfill(
    '/Search/getShowCategory?&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((data) => {
        // console.log(444,data)
        return resolve(data)
    }
)
//全部
export const getShowList = (resolve) => fetchPolyfill(
    '/Search/getShowList?category=0&city_id=0&page=1&keywords=&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((data) => {
        // console.log(444,data)
        return resolve(data)
    }
    )



