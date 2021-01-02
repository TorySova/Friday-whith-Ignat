import { instance } from "./instance";

export const gradesAPI = {
    updateGrade(data: any) {
        return instance.put<any>('cards/grade', data);
    },
}

//types
export type RequestType = {
    grade: number // 1-5 
    card_id: string
 }
 export type ResponseGradeType = {
    updatedGrade: {
       _id?: string
       cardsPack_id?: string
       card_id: string
       user_id?: string
       grade: number
       shots: number
    }
 }