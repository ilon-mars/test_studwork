import { HTTPMethod } from '@/enums/HTTPMethod';

type HTTPServiceMethod = (url?: string, options?: Record<string, unknown>) => Promise<unknown>;

export class HTTPService {
  #endpoint: string;

  constructor(endpoint: string) {
    this.#endpoint = `${import.meta.env.VITE_API_URL}${endpoint}`;
  }

  get: HTTPServiceMethod = (url = '/', options = {}) => {
    return fetch(`${this.#path(url)}`, { ...options, method: HTTPMethod.GET });
  };

  post: HTTPServiceMethod = (url = '/', options = {}) => {
    return fetch(this.#path(url), { ...options, method: HTTPMethod.POST });
  };

  #path(path: string) {
    return `${this.#endpoint}${path}`;
  }
}
