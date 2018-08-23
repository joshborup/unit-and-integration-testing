import axios from 'axios';

export default {
    getCars(url) {
        return axios.get(url).then((response) => {
            return response.data
        })
    },
    postCars(url, newCarObj){
        return axios.post(url, newCarObj).then((response)=> {
            return response.data
        })
    }
}