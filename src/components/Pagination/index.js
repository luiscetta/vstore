/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable react/jsx-key */
import React from 'react';
import classnames from 'classnames';
import { usePagination, DOTS } from '../../hooks/usePagination';
import styles from './Pagination.module.scss';


const Pagination = props => {
    const {
        onPageChange,
        totalCount,
        siblingCount = 1,
        currentPage,
        pageSize,
        className
    } = props;

    const paginationRange = usePagination({
        currentPage,
        totalCount,
        siblingCount,
        pageSize
    });

    if (currentPage === 0 || paginationRange.length < 2) {
        return null;
    }

    const onNext = () => {
        onPageChange(currentPage + 1);
    };

    const onPrevious = () => {
        onPageChange(currentPage - 1);
    };

    let lastPage = paginationRange[paginationRange.length - 1];

    return (
        <ul
            className={classnames(styles.pagination_container, { [className]: className })}
        >
            <button
                className={classnames(styles.pagination_item, {
                    disabled: currentPage === 1
                })}
                onClick={onPrevious}
            >
                <div className={styles.arrow_left} />
            </button>
            {paginationRange.map((pageNumber, idx) => {
                if (pageNumber === DOTS) {
                    return <li key={idx} className={styles.pagination_item}>&#8230;</li>;
                }
                return (
                    <button
                        className={classnames(styles.pagination_item, {
                            selected: pageNumber === currentPage
                        })}
                        onClick={() => onPageChange(pageNumber)}
                    >
                        {pageNumber}
                    </button>
                );
            })}
            <button
                className={classnames(styles.pagination_item, {
                    disabled: currentPage === lastPage
                })}
                onClick={onNext}
            >
                <div className={styles.arrow_right} />
            </button>
        </ul>
    );
};

export default Pagination;