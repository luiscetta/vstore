/* eslint-disable react-hooks/exhaustive-deps */
import { useMemo } from "react";


const usePagination = ({ items, itemsPerPage, currentPage }) => {
    const paginationRange = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * itemsPerPage;
        const lastPageIndex = firstPageIndex + itemsPerPage;
        return items.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, items, itemsPerPage]);

    return paginationRange;
};

export default usePagination;