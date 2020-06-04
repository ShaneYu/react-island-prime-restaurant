const getFetchInit = (requestMethod: string, body?: any): RequestInit => {
  const requestHeaders = new Headers();

  requestHeaders.append('Content-Type', 'application/json');

  const fetchInit = {
    method: requestMethod,
    headers: requestHeaders,
  } as RequestInit;

  if (body) {
    fetchInit.body = JSON.stringify(body);
  }

  return fetchInit;
};

export default getFetchInit;
