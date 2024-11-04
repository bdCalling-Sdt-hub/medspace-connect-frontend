export type TApiResponse<T> = {
      success: string;
      message: string;
      data?: T;
};
