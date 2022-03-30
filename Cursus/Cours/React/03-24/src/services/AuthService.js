const login = (email, password) =>{

    if(email === "toto@gmail.com" && password ==="123"){
        sessionStorage.setItem("token1254", Math.floor(Math.random()*10000));
        return true
    }
    else
        return false
}

const checkToken = () => {
    const token = sessionStorage.getItem('token1254')

    if(token)
        return true
    else
        return false
}

const logout = () => {
    sessionStorage.removeItem('token1254')
}

export default{
    login,
    checkToken,
    logout
}