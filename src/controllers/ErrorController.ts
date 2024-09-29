import { useToastStore } from '@/stores/toast';
import { parseError } from '@/utils/parseError';

class ErrorController {
  showError(error: unknown) {
    const toast = useToastStore();
    toast.showError(parseError(error));
  }
}

export default new ErrorController();
