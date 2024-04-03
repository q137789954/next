class Http {
  basePath;
  headers;

  constructor(basePath: string) {
    this.basePath = basePath;
    this.headers = new Headers();
    this.headers.append("Authorization", this.getTokenBearer());
    this.headers.append("Content-Type", "application/json");
  }

  async get(path: string ) {

    const res = await fetch(`${this.basePath}/${path}`, {
      headers: this.headers,
    });
    return res.json();
  }

  async post(path: string, data: object = {}) {
    const res = await fetch(`${this.basePath}/${path}`, {
      method: "POST",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return res.json();
  }

  async put(path: string, data: object = {}) {
    const res = await fetch(`${this.basePath}/${path}`, {
      method: "PUT",
      headers: this.headers,
      body: JSON.stringify(data),
    });
    return res.json();
  }

  async delete(path: string) {
    const res = await fetch(`${this.basePath}/${path}`, {
      method: "DELETE",
      headers: this.headers,
    });
    return res.json();
  }

  getTokenBearer() {
    return localStorage.getItem("token") || "";
  }
}

export default Http;
