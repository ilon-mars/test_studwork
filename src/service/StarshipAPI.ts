import { BaseAPI } from './api.service';

export class StarshipAPI extends BaseAPI {
  constructor() {
    super('starships');
  }

  async getAll() {
    return await this.api.get();
  }

  async getById(id: string) {
    return await this.api.get(`/${id}`);
  }
}
