/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState, useEffect } from 'react';
import { Pagination, Table } from 'react-bootstrap';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';
import usePagination from '../../hooks/usePagination';

import styles from './ProductTable.module.scss';


export default function ProductTable({ products, favoriteHandler, showFavorites }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [markedAsFavorite, setMarkedAsFavorite] = useState(products.filter(p => p.favorite));
    const productsPerPage = 5;
    const pageCount = Math.ceil(products.length / productsPerPage);

    const handleFavorites = (product) => {
        if (markedAsFavorite.find(p => p.id === product.id)) {
            setMarkedAsFavorite(prev => {
                const updated = [...prev];
                return updated.filter(p => p.id !== product.id);
            });
            favoriteHandler(product.id, false);
        }
        else {
            setMarkedAsFavorite(prev => [...prev, product]);
            favoriteHandler(product.id, true);
        }
    };

    const onNextPage = () => setCurrentPage(currentPage + 1);
    const onPreviousPage = () => setCurrentPage(currentPage - 1);

    const productsToShow = usePagination({
        currentPage,
        items: showFavorites ? markedAsFavorite : products,
        itemsPerPage: productsPerPage,
    });

    return (
        <>
            <div className={styles.title_container}>
                <h3>{showFavorites ? 'Meus favoritos' : 'Todos os produtos'}</h3>
                <div className={styles.next_prev_button}>
                    <Pagination>
                        <Pagination.Prev onClick={onPreviousPage} disabled={currentPage === 1} />
                        <Pagination.Next onClick={onNextPage} disabled={currentPage === pageCount} />
                    </Pagination>
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
                        productsToShow.map((product, idx) => (
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
                                    <button onClick={() => handleFavorites(product)} >
                                        {
                                            markedAsFavorite.find(p => p.id === product.id) ?
                                                <HeartFilledIcon className={styles.liked} />
                                                :
                                                <HeartIcon className={styles.like} />
                                        }
                                    </button>
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
    );
}