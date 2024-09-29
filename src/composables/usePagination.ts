import { computed, ref, Ref } from 'vue';

const PER_PAGE = 10;

export const usePagination = <T>(list: Ref<T[]>) => {
  const currentPage = ref(1);
  const isPrevDisabled = ref(true);
  const isNextDisabled = ref(false);

  const maxPage = computed(() => Math.ceil(list.value.length / PER_PAGE));
  const paginatedList = computed(() =>
    list.value.slice((currentPage.value - 1) * PER_PAGE, currentPage.value * PER_PAGE)
  );

  const goPrev = () => {
    currentPage.value--;
    isNextDisabled.value = false;

    if (currentPage.value === 1) {
      isPrevDisabled.value = true;
    }
  };

  const goNext = () => {
    currentPage.value++;
    isPrevDisabled.value = false;

    if (currentPage.value === maxPage.value) {
      isNextDisabled.value = true;
    }
  };

  return {
    isPrevDisabled,
    isNextDisabled,
    paginatedList,
    goPrev,
    goNext
  };
};
