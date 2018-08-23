const axios = require('axios');

const newCar =  {
    make: "Jeep",
    model: "Patriot",
    year: 2008,
    color: "Black"
}

module.exports = {
    getCars(url) {
        return axios.get(url).then((response) => {
            return response.data
        })
    },
    postCars(url){
        return axios.post(url, newCar).then((response)=> {
            return response.data
        })
    }
}