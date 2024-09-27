import {
  isStarshipResponse,
  Starship,
  StarshipResponse,
  StarshipResponseChunks
} from '@/types/Starship';
import { BaseAPI } from './api.service';

export class StarshipAPI extends BaseAPI {
  constructor() {
    super('starships');
  }

  async getAll(): Promise<StarshipResponse | StarshipResponseChunks> {
    const response = await this.api.get();

    if (!isStarshipResponse(response)) {
      throw new Error('Something went wrong');
    }

    if (!response.next) {
      return response;
    }

    return {
      firstChunk: response,
      otherChunks: Promise.all(this.#getDataFromAllPages(response))
    };
  }

  async getById(id: string): Promise<Starship> {
    return this.api.get(`/${id}`) as Promise<Starship>;
  }

  #getDataFromAllPages(response: StarshipResponse) {
    const ITEMS_IN_RESPONSE = 10;
    const pagesToGet = Math.ceil(response.count / ITEMS_IN_RESPONSE);
    const promises: Promise<StarshipResponse>[] = [];

    for (let i = 2; i <= pagesToGet; i++) {
      promises.push(this.api.get(`?page=${i}`) as Promise<StarshipResponse>);
    }

    return promises;
  }
}
