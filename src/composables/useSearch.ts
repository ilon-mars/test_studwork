import { computed, ref, Ref } from 'vue';
import { useRoute } from 'vue-router';

export const useSearch = <T>(
  list: Ref<T[]>,
  filterFn: (item: unknown, value: string) => boolean
) => {
  const route = useRoute();

  const searchValue = ref('');

  const filteredList = computed(() =>
    list.value.filter((item: T) => filterFn(item, searchValue.value))
  );

  const getSearchQueryParams = () => {
    if ('q' in route.query) {
      searchValue.value = route.query.q as string;
    }
  };

  return {
    searchValue,
    filteredList,
    getSearchQueryParams
  };
};
