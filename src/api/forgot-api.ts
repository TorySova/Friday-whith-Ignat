import { instance } from "./instance"


export const ForgotAPI = {
    forgot(email: string) {
        return instance.post<ForgotDataType>('auth/forgot', {
            email,
            from: "test-front-admin <ai73a@yandex.by>",
            message: `<div style="background-color: lime; padding: 15px">
                    password recovery link: 
                        <a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
                    </div>
                    `
        })
    }
}

export type ForgotDataType = {
    error: string;
}