import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true
    //baseURL: "https://neko-back.herokuapp.com/2.0/"
}); 

export const LoginAPI = {
    login(data: LoginParamsType){
        return instance.post('/auth/login', data)
    }
}

export type LoginParamsType = {
    email: string
    password: string
    rememberMe: boolean
}