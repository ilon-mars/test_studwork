import ErrorController from '@/controllers/ErrorController';
import { StarshipAPI } from '@/service/StarshipAPI';
import { isStarshipResponseChunks, Starship } from '@/types/Starship';

class StarshipController {
  private readonly api = new StarshipAPI();

  async getAll() {
    try {
      const data = await this.api.getAll();

      if (isStarshipResponseChunks(data)) {
        const result = (await data.otherChunks).reduce(
          (acc, current) => [...acc, ...current.results],
          [] as Starship[]
        );

        return [...data.firstChunk.results, ...result];
      }

      return data.results;
    } catch (error) {
      ErrorController.showError(error);
    }
  }

  async getById(id: string) {
    return await this.api.getById(id);
  }
}

export default new StarshipController();
