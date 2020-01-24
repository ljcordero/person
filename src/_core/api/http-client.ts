import axios from 'axios';

export class HttpClient {
  private axios: any;

  constructor(baseURL: string) {
    this.axios = axios.create({
      baseURL,
      headers: { 'Content-Type': 'application/json' }
    });

    this.axios.interceptors.response.use(res => res, err => {
      let error = err;
      if(error.response && error.response.data) {
        error = Object.keys(error.response.data).map(k => `${k}: ${error.response.data[k]}`).join('\n');
      }
      return Promise.reject(error);
    });
  }

  public get(endpoint: string, query: any | string = ""): Promise<any> {
    return this.axios.get(`/${endpoint}`).then((res: any) => res.data.result || res.data)
  }

  public getById(endpoint: string, id: string, query: any | string = ""): Promise<any> {
    return this.axios.get(`/${endpoint}/${id}`).then((res: any) => res.data)
  }

  public post(endpoint: string, data: any): Promise<any> {
    return this.axios.post(`/${endpoint}`, data).then((res: any) => res.data.result || res.data.message || res.data);
  }

  public patch(endpoint: string, data: any): Promise<any> {
    return this.axios.patch(`/${endpoint}`, data).then((res: any) => res.data.result);
  }

  public put(endpoint: string, data: any): Promise<any> {
    return this.axios.put(`/${endpoint}`, data).then((res: any) => res.data.result || res.data);
  }

  public delete(endpoint: string): Promise<any> {
    return this.axios.delete(`/${endpoint}`).then((res: any) => res.data);
  }

}

export default new HttpClient(process.env.VUE_APP_API_ROOT);