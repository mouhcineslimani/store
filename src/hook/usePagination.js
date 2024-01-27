import { useState } from "react";

const usePagination = (itemsPerPage, itemList) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = itemList.slice(indexOfFirstItem, indexOfLastItem);

  const totalItems = itemList.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return { currentItems, pageNumbers, paginate };
};

export default usePagination;
