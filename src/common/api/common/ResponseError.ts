export interface ResponseError extends Error {
  response?: Response;
}
