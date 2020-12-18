import axios from "axios"

export const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/'
});
export type RegisterDataType = {
    error: string
}

export const SetPassAPI = {
    setPass(resetPasswordToken: string, password: string)  {
        return instance.post<RegisterDataType>('/auth/set-new-password', {resetPasswordToken, password}
        )
    }
}