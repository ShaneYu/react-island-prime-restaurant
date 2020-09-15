import { AxiosError } from 'axios';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isAxiosError = <T>(error: any): error is AxiosError<T> => {
  return (error as AxiosError<T>).isAxiosError !== undefined;
};

export default isAxiosError;
