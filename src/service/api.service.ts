import { HTTPService } from './http.service';

export abstract class BaseAPI {
  protected api: HTTPService;

  protected constructor(endpoint: string) {
    this.api = new HTTPService(endpoint);
  }
}
