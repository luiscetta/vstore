/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react';
import Pagination from '../Pagination';

import styles from './Bestsellers.module.scss';


let PageSize = 10;

export default function BestSellers({ products }) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);

    return (
        <div className={styles.best_container}>
            <div className={styles.title_container}>
                <h3>Mais vendidos</h3>

                <div className={styles.next_prev_button}>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={products.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>
            <ul className={styles.list_container}>
                {
                    products.length
                        ?
                        currentTableData.map((product) => (
                            <li key={product.id}>
                                <img src={product.image} alt={product.alt} />
                                <span>
                                    <p className={styles.price}>{product.price}</p>
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
                <p>Página {currentPage} de {products.lenght}</p>
            </span>
        </div>
    );
}