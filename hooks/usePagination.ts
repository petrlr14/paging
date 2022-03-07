import { useEffect, useMemo, useState } from 'react';

export default function usePagination(
  _array: Array<any>,
  currentPage: number,
  itemsPerPage: number
) {
  const [array, setArray] = useState(_array);
  const [page, setPage] = useState(currentPage);
  const [_itemsPerPage, setItemsPerPage] = useState(itemsPerPage);
  const [slicedArray, setSlicedArray] = useState([]);

  const pageCount = useMemo(() => {
    return Math.floor(array.length / itemsPerPage);
  }, [array, itemsPerPage]);

  const firstPage = useMemo(() => {
    if (pageCount === 0) return 0;
    return 1;
  }, [pageCount]);

  useEffect(() => {
    const paginate = () => {
      const start = (page - 1) * _itemsPerPage;
      const end = page * _itemsPerPage;
      return array.slice(start, end);
    };
    setSlicedArray(paginate());
  }, [array, page, _itemsPerPage]);

  useEffect(() => {
    return setPage(1);
  }, [array]);

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
    array: slicedArray,
    setArray,
    forward,
    backward,
    paging: {
      pageCount,
      firstPage,
      page,
      setPage,
      setItemsPerPage,
    },
  };
}
