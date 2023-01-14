/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CaretRightIcon, CaretLeftIcon } from '@radix-ui/react-icons';

import styles from './Bestsellers.module.scss';

export default function BestSellers({ products }) {
    return (
        <div className={styles.best_container}>
            <div className={styles.title_container}>
                <h3>Mais vendidos</h3>

                <div className={styles.next_prev_button}>
                    <button><CaretLeftIcon className={styles.prev} /></button>
                    <button><CaretRightIcon className={styles.next} /></button>
                </div>
            </div>
            <ul className={styles.list_container}>
                {
                    products.length
                        ?
                        products.map((product) => (
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
                <p>Página 1 de 10</p>
            </span>
        </div>
    );
}