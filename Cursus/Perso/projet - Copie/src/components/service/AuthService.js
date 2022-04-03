import axios from "axios"

    const API_URL = "http://localhost:3000/Account"

const login = (login) =>{
    console.log(login)
    if(login.admin)
        sessionStorage.setItem("tokenAdmin", Math.floor(Math.random()*10000));
    else
        sessionStorage.setItem("tokenUser", Math.floor(Math.random()*10000));  
}

const checkToken = () => {
    const tokenUser = sessionStorage.getItem('tokenUser')

    if(tokenUser)
        return true
    else
        return false
}

const checkAdmin = () => {
    const tokenAdmin = sessionStorage.getItem('tokenAdmin')

    if(tokenAdmin)
        return true
    else
        return false
}

const logout = () => {
    sessionStorage.clear()
}


export default{
    login,
    checkToken,
    checkAdmin,
    logout
}