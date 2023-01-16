/* eslint-disable @next/next/no-img-element */
import React, { useMemo, useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

import styles from './ProductTable.module.scss';
import Pagination from '../Pagination';


export default function ProductTable({ products, favoriteHandler, showFavorites }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [markedAsFavorite, setMarkedAsFavorite] = useState(products.filter(p => p.favorite));
    const PageSize = 5;

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

    const currentTableData = useMemo(() => {
        const firstPageIndex = (currentPage - 1) * PageSize;
        const lastPageIndex = firstPageIndex + PageSize;
        if (showFavorites) return markedAsFavorite.slice(firstPageIndex, lastPageIndex);
        return products.slice(firstPageIndex, lastPageIndex);
    }, [currentPage, products, markedAsFavorite, showFavorites]);

    return (
        <>
            <div className={styles.title_container}>
                <h3>{showFavorites ? 'Meus favoritos' : 'Todos os produtos'}</h3>
                <div className={styles.next_prev_button}>
                    <Pagination
                        currentPage={currentPage}
                        totalCount={(products.length / 5).toFixed()}
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
                <p>Página {currentPage} de {(products.length / 5).toFixed()}</p>
            </span>
        </>
    );
}