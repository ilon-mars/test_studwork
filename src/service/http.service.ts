import { HTTPMethod } from '@/enums/HTTPMethod';

type HTTPServiceMethod = (url?: string, options?: RequestInit) => Promise<unknown>;

export class HTTPService {
  #endpoint: string;

  constructor(endpoint: string) {
    this.#endpoint = `${import.meta.env.VITE_API_URL}${endpoint}`;
  }

  get: HTTPServiceMethod = async (url = '/', options = {}) => {
    const response = await fetch(`${this.#path(url)}`, { ...options, method: HTTPMethod.GET });
    this.#checkForErrors(response);
    return response.json();
  };

  #path(path: string) {
    return `${this.#endpoint}${path}`;
  }

  #checkForErrors(response: Response) {
    if (!response.ok) {
      throw new Error(`Error with fetching: ${response.status}`);
    }
  }
}
