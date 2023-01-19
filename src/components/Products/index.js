import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

import ProductTable from "../ProductTable";

import styles from "./Products.module.scss";

export default function Products({ products, showFavorites, search }) {
    const [markedAsFavorite, setMarkedAsFavorite] = useState(products.filter(p => p.favorite));
    const [chosenProducts, setChosenProducts] = useState(products);

    const productsFromSearch = useMemo(() => {
        const searchLowerCase = search.toLowerCase();
        return products.filter((product) =>
            product.name.toLowerCase().includes(searchLowerCase)
        );
    }, [products, search]);

    const handleFavorites = async (product) => {
        if (markedAsFavorite.find(p => p.id === product.id)) {
            await axios.patch(`/api/products/${product.id}`, { favorite: false });
            setMarkedAsFavorite((prev) => {
                const updated = [...prev];
                return updated.filter(p => p.id !== product.id);
            });
        }
        else {
            const { data } = await axios.patch(`/api/products/${product.id}`, { favorite: true });
            setMarkedAsFavorite(prev => [...prev, data.product]);
        }
    };

    useEffect(() => {
        if (showFavorites) setChosenProducts(markedAsFavorite);
        else if (search) setChosenProducts(productsFromSearch);
        else setChosenProducts(products);
    }, [markedAsFavorite, productsFromSearch, showFavorites, search, products]);

    return (
        <div className={styles.products_container}>
            <div className={styles.table_container}>
                <ProductTable
                    products={chosenProducts}
                    favoriteHandler={handleFavorites}
                    markedAsFavorite={markedAsFavorite}
                    title={showFavorites ? 'Meus favoritos' : 'Todos os produtos'}
                />
            </div>
        </div>
    );
}