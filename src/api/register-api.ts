import { instance } from "./instance";


export type regNewUserDataType = {
    email: string
    password: string
}

type ResponseType = {
    status: number
}

export const registerAPI = {
    regNewUser(data: regNewUserDataType) {
        return instance.post<ResponseType>('auth/register', data);
    },
}