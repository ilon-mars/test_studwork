import { BaseAPI } from './api.service';

export class CutDownAPI<T> extends BaseAPI {
  constructor(endpoint: string) {
    super(endpoint);
  }

  async getAll(idList: string[]): Promise<T[]> {
    const promises = idList.map((id) => this.getById(id));

    return await Promise.all(promises);
  }

  async getById(id: string): Promise<T> {
    return this.api.get(`/${id}`) as Promise<T>;
  }
}
