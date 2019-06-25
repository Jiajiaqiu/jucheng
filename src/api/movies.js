import { fetch as fetchPolyfill } from "whatwg-fetch";

export const getMovies = (resolve) => fetchPolyfill(
    '/RestTheatre/getTheatreList?page=1&&version=5.1.4&referer=2'
).then((res) => res.json())
    .then((data) => {
        // console.log('xfdxd',data.data.theatre_list)
        return resolve(data)
    }
)
