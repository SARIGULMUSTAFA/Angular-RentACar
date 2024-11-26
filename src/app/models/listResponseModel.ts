import { Brand } from "./brand";
import { ResponseModel } from "./responseModel";

export interface ListResponseModel<T> extends ResponseModel {
    items:T[];
}