import axios from "axios"

const API_URL = "https://pseudalsandbox.xyz/db_product.json"
const API_URL_ARTICLE = "https://pseudalsandbox.xyz/db_article.json"
const API_URL_MESSAGE = "https://pseudalsandbox.xyz/db_message.json"
const API_URL_USER = "https://pseudalsandbox.xyz/auth.json"

const getProducts = () => {
    return fetch(API_URL)
}

const getProducts2 = () => {
    return axios.get(API_URL)
}
const getArticle = () => {
    return axios.get(API_URL_ARTICLE)
}
const getMsg = () => {
    return axios.get(API_URL_MESSAGE)
}

const addProduct = product => {
    return axios.post(API_URL, product)
}
const addArticle = product => {
    return axios.post(API_URL_ARTICLE, product)
}

const addMessage = product => {
    return axios.post(API_URL_MESSAGE, product)
}

const delProduct = index => {
    console.log(index);
    return axios.delete(`${API_URL}/${index}`)
}
const delArticle = index => {
    console.log(index);
    return axios.delete(`${API_URL_ARTICLE}/${index}`)
}
const delMsg = index => {
    console.log(index);
    return axios.delete(`${API_URL_MESSAGE}/${index}`)
}
const delUser = index => {
    console.log(index);
    return axios.delete(`${API_URL_USER}/${index}`)
}
const modProduct = (mod) => {
    console.log(mod);
    return axios.put(`${API_URL}/${mod.id}`, mod)
}
const modArticle = (mod) => {
    console.log(mod);
    return axios.put(`${API_URL_ARTICLE}/${mod.id}`, mod)
}
    

export default{
    getProducts,
    getProducts2,
    getArticle,
    addProduct,
    delProduct,
    modProduct,
    modArticle,
    delArticle,
    addArticle,
    addMessage,
    getMsg,
    delUser,
    delMsg
}

