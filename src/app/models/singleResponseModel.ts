import { ResponseModel } from "./responseModel";


export interface SingleResponseModel<T> extends ResponseModel {
    items:T
}