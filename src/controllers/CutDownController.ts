import ErrorController from '@/controllers/ErrorController';
import { CutDownAPI } from '@/service/CutDownAPI';
import { getIdFromUrl } from '@/utils/getIdFromUrl';

export abstract class CutDownController<T> {
  private api;

  constructor(endpoint: string) {
    this.api = new CutDownAPI<T>(endpoint);
  }

  async getAll(urls: string[]): Promise<T[] | undefined> {
    if (!urls.length) {
      return;
    }

    try {
      const idList = urls.map((url) => getIdFromUrl(url)).filter(Boolean) as string[];
      const data = await this.api.getAll(idList);

      return data.map(this._normalizeData) as T[];
    } catch (error) {
      ErrorController.showError(error);
    }
  }

  protected _normalizeData(item: T) {
    throw new Error('Add implementation of mapping');
  }
}
