import { instance } from "./instance";

export const registerAPI = {
    regNewUser(data: regNewUserDataType) {
        return instance.post<ResponseType>('auth/register', data);
    },
}

//types
export type regNewUserDataType = {
    email: string
    password: string
}

type ResponseType = {
    status: number
}