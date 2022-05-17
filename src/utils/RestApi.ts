class RestApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }
  _checkResponse(res: any): any {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  get getAllCountries(): any {
    return fetch(`${this.baseUrl}/all`).then((res) => {
      return this._checkResponse(res);
    });
  }
}

const restApi = new RestApi("https://restcountries.com/v3.1");

export default restApi;
