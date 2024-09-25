import { TErrorAPI } from "./ErrorAPI";

export interface TSuccessResponse {
  success: true;
  apiData: object;
}

export interface TErrorResponse {
  success: false;
  apiError: TErrorAPI;
}

export type TResponseAPI = TSuccessResponse | TErrorResponse;
