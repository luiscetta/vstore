import React from 'react';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';

import ProductTable from '../ProductTable';

import styles from './Products.module.scss';


export default function AllProducts({ products }) {

    return (
        <div className={styles.products_container}>
            <div className={styles.title_container}>
                <h3>Todos os produtos</h3>

                <div className={styles.next_prev_button}>
                    <button><CaretLeftIcon className={styles.prev} /></button>
                    <button><CaretRightIcon className={styles.next} /></button>
                </div>
            </div>

            <div className={styles.table_container}>
                <ProductTable products={products}/>
            </div>
            <span className={styles.pages}>
                <p>Página 1 de 10</p>
            </span>
        </div>
    );
}