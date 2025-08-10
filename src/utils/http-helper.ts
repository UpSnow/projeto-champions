import { httpResponse } from "../models/http-response-model"

export const ok = async (data:any): Promise<httpResponse>=> {
    return {
        statusCode: 200,
        body : data
    }

}

export const noContet = async (): Promise<httpResponse>=>{
    return{
        statusCode: 204,
        body: null
        }
}