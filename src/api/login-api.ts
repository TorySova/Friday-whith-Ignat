import { instance } from "./instance"


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