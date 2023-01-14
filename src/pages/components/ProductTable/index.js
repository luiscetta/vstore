/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

import styles from './ProductTable.module.scss';

export default function ProductTable({ products }) {
    return (
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
                    products.map((product, idx) => (
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
                            <td className={styles.fav}><HeartFilledIcon className={styles.liked} /></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
    );
}