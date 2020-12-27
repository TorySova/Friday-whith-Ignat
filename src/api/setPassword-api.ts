import { instance } from "./instance"

export type RegisterDataType = {
    error: string
}

export const SetPassAPI = {
    setPass(resetPasswordToken: string, password: string)  {
        return instance.post<RegisterDataType>('/auth/set-new-password', {resetPasswordToken, password}
        )
    }
}