export interface mainMeu {
  defaultOptions: Array<paths>
};

interface paths {
  name: string
  router: Array<string>
  query?: queryParams
}

interface queryParams {
  gender: string
}
