/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

import styles from './ProductTable.module.scss';
import Pagination from '../Pagination';

let PageSize = 8;

export default function ProductTable({ products, addToFavorite }) {
    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products]);

    return (
        <>
            <div className={styles.title_container}>
                <h3>Todos os produtos</h3>
                <div className={styles.next_prev_button}>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={products.length}
                        pageSize={PageSize}
                        onPageChange={page => setCurrentPage(page)}
                    />
                </div>
            </div>

            <Table className={styles.table_container}>
                <thead>
                    <tr>
                        <th>Identificação</th>
                        <th>Preço</th>
                        <th>Vendas</th>
                        <th>Estoque</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        currentTableData.map((product, idx) => (
                            <tr key={idx}>
                                <td className={styles.item}>
                                    <img src={product.image} alt={product.name} />
                                    <span>
                                        <a href='#'>{product.name}</a>
                                        <p>{product.code}</p>
                                    </span>
                                </td>
                                <td className={styles.price}>
                                    <p>R$ {product.price}</p>
                                </td>
                                <td className={styles.sales}>
                                    <span>Total de vendas {product.totalSales}</span> <br />
                                    {product.sales} vendas
                                </td>
                                <td className={styles.stock}>{product.stock} und</td>
                                <td className={styles.fav}>
                                    <button onClick={() => addToFavorite()} >
                                        <HeartIcon className={styles.liked} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <span className={styles.pages}>
                <p>Página {currentPage} de não sei</p>
            </span>
        </>
    );
}