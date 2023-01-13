/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { CaretRightIcon, CaretLeftIcon } from '@radix-ui/react-icons';

import styles from './Bestsellers.module.scss';

export default function BestSellers() {
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
                <li>
                    <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                    <span>
                        <p className={styles.price}>R$ 320,00</p>
                        <p className={styles.sales}>105 vendas</p>
                    </span>
                    <a href='#'>Tênis Vans Authentic Preto</a>
                </li>
                <li>
                    <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                    <span>
                        <p className={styles.price}>R$ 320,00</p>
                        <p className={styles.sales}>105 vendas</p>
                    </span>
                    <a href='#'>Tênis Vans Authentic Preto</a>
                </li>
                <li>
                    <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                    <span>
                        <p className={styles.price}>R$ 320,00</p>
                        <p className={styles.sales}>105 vendas</p>
                    </span>
                    <a href='#'>Tênis Vans Authentic Preto</a>
                </li>
                <li>
                    <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                    <span>
                        <p className={styles.price}>R$ 320,00</p>
                        <p className={styles.sales}>105 vendas</p>
                    </span>
                    <a href='#'>Tênis Vans Authentic Preto</a>
                </li>
                <li>
                    <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                    <span>
                        <p className={styles.price}>R$ 320,00</p>
                        <p className={styles.sales}>105 vendas</p>
                    </span>
                    <a href='#'>Tênis Vans Authentic Preto</a>
                </li>
                <li>
                    <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                    <span>
                        <p className={styles.price}>R$ 320,00</p>
                        <p className={styles.sales}>105 vendas</p>
                    </span>
                    <a href='#'>Tênis Vans Authentic Preto</a>
                </li>
            </ul>
            <span className={styles.pages}>
                <p>Página 1 de 10</p>
            </span>
        </div>
    );
}