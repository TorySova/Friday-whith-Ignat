import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:7542/2.0/",
    //https://neko-back.herokuapp.com/2.0
});

type regNewUserDataType = {
    email: string
    password: string
}

type ResponseType = {
    error?: string
}

export const registerAPI = {
    regNewUser(data: regNewUserDataType) {
        return instance.post<ResponseType>('auth/register', data);
    },
}