import { C } from "../utils/types";

class RestApi {
  baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  getAllCountries = async (): Promise<C[]> => {
    try {
      const res: Response = await fetch(`${this.baseUrl}/all`);

      if (!res.ok) {
        return Promise.reject(`Error: ${res.status}`);
      }

      return await res.json();
    } catch (error) {
      return Promise.reject(`Error: ${error}`);
    }
  };
}

const restApi = new RestApi("https://restcountries.com/v3.1");

export default restApi;
