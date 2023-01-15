/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Helmet } from "react-helmet";

import styles from '../../styles/Favorites.module.scss';

export default function Favorites({ products }) {
    return (
        <>
            <Helmet>
                <title>XCO+ / Meus Favoritos</title>
            </Helmet>
            <div className={styles.favorite_container}>
                <h3>Produtos favoritados</h3>
                <div className={styles.favorite_content}>
                    {
                        products.map((product) => (
                            <ul key={product.id} className={styles.list_container}>
                                <li className={styles.card_item}>
                                    <img src={productsFav.image} alt={productsFav.name} />
                                    <p>{productsFav.price}</p>
                                    <p>{productsFav.stock}</p>
                                    <a href="#">{productsFav.name}</a>
                                </li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </>
    );
}