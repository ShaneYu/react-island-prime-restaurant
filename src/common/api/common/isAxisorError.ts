import { AxiosError } from 'axios';

const isAxiosError = <T>(error: any): error is AxiosError<T> => {
  return (error as AxiosError<T>).isAxiosError !== undefined;
};

export default isAxiosError;
