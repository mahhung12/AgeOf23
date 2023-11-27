import { AxiosError, AxiosResponse } from "axios";

type BaseRequest<T, V> = (params?: T) => Promise<AxiosResponse<V>>;

type SuccessResponse<V> = { code: "Success"; data: V };

type ErrorResponse<E = AxiosError> = { code: "Error"; error: E };

type BaseResponse<V, E> = Promise<SuccessResponse<V> | ErrorResponse<E>>;

export const requestHandler =
  <T, V, E = AxiosError>(request: BaseRequest<T, V>) =>
  async (params?: T): BaseResponse<V, E> => {
    try {
      const response = await request(params);
      return { code: "Success", data: response.data };
    } catch (err) {
      return { code: "Error", error: err as E };
    }
  };
