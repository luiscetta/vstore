/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import { Pagination } from "react-bootstrap";

import usePagination from "../../hooks/usePagination";
import styles from "./Bestsellers.module.scss";

export default function BestSellers({ products }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const pageCount = Math.ceil(products.length / productsPerPage);

    const productsToShow = usePagination({
        currentPage,
        items: products,
        itemsPerPage: productsPerPage,
    });

    const onNextPage = () => setCurrentPage(currentPage + 1);
    const onPreviousPage = () => setCurrentPage(currentPage - 1);

    return (
        <div className={styles.best_container}>
            <div className={styles.title_container}>
                <h3>Mais vendidos</h3>

                <div className={styles.next_prev_button}>
                    <Pagination className={styles.pagination_button_content}>
                        <Pagination.Prev onClick={onPreviousPage} disabled={currentPage === 1} />
                        <Pagination.Next onClick={onNextPage} disabled={currentPage === pageCount} />
                    </Pagination>
                </div>
            </div>
            <ul className={styles.list_container}>
                {
                    products.length
                        ?
                        productsToShow.map((product) => (
                            <li key={product.id}>
                                <img src={product.image} alt={product.alt} />
                                <span>
                                    <p className={styles.price}>R$ {product.price}</p>
                                    <p className={styles.sales}>{product.sales} vendas</p>
                                </span>
                                <a href='#'>{product.name}</a>
                            </li>
                        ))
                        :
                        <div className={styles.empty_best_list}>
                            <h3>Não vendeu o bastante!</h3>
                        </div>
                }
            </ul>
            <span className={styles.pages}>
                <p>Página {currentPage} de {pageCount}</p>
            </span>
        </div>
    );
}