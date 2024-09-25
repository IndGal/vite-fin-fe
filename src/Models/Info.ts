import { TErrorResponse, TSuccessResponse } from "./ResponseAPI";

interface IInfo extends TSuccessResponse {
  apiData: {
    message: string;
  };
}

export type TInfo = IInfo | TErrorResponse;
