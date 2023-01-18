/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';
import { Pagination, Table } from 'react-bootstrap';

import usePagination from '../../hooks/usePagination';
import LikeAnimation from '../Animations/LikeAnimation';
import NoResultsAnimation from '../Animations/NoResultsAnimations';
import styles from './ProductTable.module.scss';

export default function ProductTable({ favoriteHandler, markedAsFavorite, products, title }) {
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5;
    const pageCount = Math.ceil(products.length / productsPerPage);

    const productsToShow = usePagination({
        currentPage,
        items: products,
        itemsPerPage: productsPerPage,
    });

    const onNextPage = () => setCurrentPage(currentPage + 1);
    const onPreviousPage = () => setCurrentPage(currentPage - 1);
    const handleHeartClick = async (product) => {
        await favoriteHandler(product);
    };

    useEffect(() => {
        if (currentPage > pageCount) setCurrentPage(1);
    }, [currentPage, pageCount]);


    return (
        <div className={styles.product_table_container}>
            <div className={styles.title_container}>
                <h3>{title}</h3>
                <div className={styles.next_prev_button}>
                    <Pagination className={styles.pagination_button_content}>
                        <Pagination.Prev onClick={onPreviousPage} disabled={currentPage === 1} />
                        <Pagination.Next onClick={onNextPage} disabled={currentPage === pageCount} />
                    </Pagination>
                </div>
            </div>

            {
                products.length
                    ?
                    <>
                        <Table size="sm" responsive className={styles.table_container}>
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
                                    productsToShow.map((product) => (
                                        <tr key={product.id}>
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
                                                <LikeAnimation
                                                    className={styles.like}
                                                    fill={!!markedAsFavorite.find(p => p.id === product.id)}
                                                    onClick={() => handleHeartClick(product)}
                                                />
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </Table>
                        <span className={styles.pages}>
                            <p>Página {currentPage} de {pageCount}</p>
                        </span>
                    </>
                    :
                    <div className={styles.empty_table}>
                        <h2>Nenhum produto para exibir.</h2>
                        <NoResultsAnimation />
                    </div>

            }
        </div>
    );
}