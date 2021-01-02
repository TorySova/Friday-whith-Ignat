import { instance } from "./instance"
import {PATH} from "../Routes";


export const ForgotAPI = {
    forgot(email: string) {
        return instance.post<ForgotDataType>('auth/forgot', {
            email,
            from: "test-front-admin <maxim.one23@gmail.com>",
            message: `<div style="background-color: lime; padding: 15px">
                    password recovery link: 
                        <a href='http://localhost:3000/#${PATH.NEW_PASSWORD}/$token$'>link</a>
                    </div>
                    `
        })
    }
}

export type ForgotDataType = {
    error: string;
}