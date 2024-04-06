import getServers from './services/index';
import { Option } from "./type";

class Http {
  basePath;
  headers= {
    "Authorization": this.getTokenBearer(),
    "Content-Type": "application/json",
  };
  option: Option | undefined;

  constructor(serviceType: string) {
    this.basePath = getServers()[serviceType]
  }

  getOption(option?: Option) {

    const newHeader = option?.headers;
    return {
      ...option,
      headers: {...this.headers, ...newHeader}
    }
  }

  get = async (path: string, option?: Option) => {

    const newOption = this.getOption(option);
    const res = await fetch(`${this.basePath}${path}`, newOption);
    return res.json();
  }

  async post(path: string, data: object = {}, option?: Option) {
    const newOption = this.getOption(option);
    const res = await fetch(`${this.basePath}${path}`, {
      method: "POST",
      body: JSON.stringify(data),
      ...newOption,
    });
    return res.json();
  }

  async put(path: string, data: object = {}, option?: Option) {
    const newOption = this.getOption(option);
    const res = await fetch(`${this.basePath}/${path}`, {
      method: "PUT",
      body: JSON.stringify(data),
      ...newOption,
    });
    return res.json();
  }

  async patch(path: string, data: object = {}, option?: Option) {
    const newOption = this.getOption(option);
    const res = await fetch(`${this.basePath}/${path}`, {
      method: "PUT",
      body: JSON.stringify(data),
      ...newOption,
    });
    return res.json();
  }

  async delete(path: string, option?: Option) {
    const newOption = this.getOption(option);
    const res = await fetch(`${this.basePath}/${path}`, {
      method: "DELETE",
      ...newOption,
    });
    return res.json();
  }

  getTokenBearer() {
    // return localStorage.getItem("token") || "";
    return 'token'
  }

  static create(serviceType: string) {
    return new Http(serviceType)
  }
}

export default Http;
