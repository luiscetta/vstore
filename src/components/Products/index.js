import React from 'react';

import ProductTable from '../ProductTable';

import styles from './Products.module.scss';


export default function AllProducts({ products, favoriteHandler, showFavorites }) {
    return (
        <div className={styles.products_container}>
            <div className={styles.table_container}>
                <ProductTable products={products} favoriteHandler={favoriteHandler} showFavorites={showFavorites} />
            </div>
        </div>
    );
}