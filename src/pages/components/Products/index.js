import React, { useEffect, useState } from 'react';
import { CaretLeftIcon, CaretRightIcon } from '@radix-ui/react-icons';

import ProductTable from '../../../constants/ProductTable';

import styles from './Products.module.scss';


export default function Products() {
    let [products, setProducts] = useState([])

    console.log("oi")

    useEffect(() => {
        fetch("/api/products")
            .then((res) => res.json())
            .then((json) => {
                setProducts(json.products);
            })
            .catch(err => console.log(err));
    }, []);

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
                <ProductTable />
            </div>
            <span className={styles.pages}>
                <p>Página 1 de 10</p>
            </span>
        </div>
    );
}