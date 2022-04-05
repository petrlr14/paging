import { useState } from 'react';

export default function usePagination(pageCount: number, currentPage: number) {
  const [page, setPage] = useState(currentPage);

  function forward() {
    setPage((oldPage) => {
      if (pageCount < oldPage + 1) return oldPage;
      return oldPage + 1;
    });
  }

  function backward() {
    setPage((oldPage) => {
      if (oldPage - 1 < 1) return oldPage;
      return oldPage - 1;
    });
  }

  return {
    forward,
    backward,
    paging: {
      pageCount,
      page,
      setPage,
    },
  };
}
