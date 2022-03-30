import axios from "axios"

const API_URL = "http://localhost:3001/products"

const getProducts = () => {
    return fetch(API_URL)
    }

const getProducts2 = () => {
    return axios.get(API_URL)
    }

const addProduct = product => {
    return axios.post(API_URL, product)
    }
    

export default{
    getProducts,
    getProducts2,
    addProduct
}

