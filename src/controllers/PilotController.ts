import { Pilot } from "@/types/Pilot";
import { CutDownController } from "./CutDownController";

class PilotController extends CutDownController<Pilot> {
  _normalizeData(item: Pilot) {
    return item.name
  }
}

export default new PilotController('people');
