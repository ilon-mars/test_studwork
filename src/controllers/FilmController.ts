import { Film } from "@/types/Film";
import { CutDownController } from "./CutDownController";

class FilmController extends CutDownController<Film> {
  _normalizeData(item: Film) {
    return item.title
  }
}

export default new FilmController('films');
