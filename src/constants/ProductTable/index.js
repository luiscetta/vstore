/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Table from 'react-bootstrap/Table';
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons';

import styles from '../../../styles/ProductTable.module.scss';

export default function ProductTable() {
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
                <tr>
                    <td className={styles.item}>
                        <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                        <span>
                            <a href='#'>Tênis Vans Authentic Preto</a>
                            <p>#MLB123456</p>
                        </span>
                    </td>
                    <td className={styles.price}>
                        <p>R$ 320,00</p>
                    </td>
                    <td className={styles.sales}>105</td>
                    <td className={styles.stock}>250 und</td>
                    <td className={styles.fav}><HeartFilledIcon className={styles.liked} /></td>
                </tr>
                <tr>
                    <td className={styles.item}>
                        <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                        <span>
                            <a href='#'>Tênis Vans Authentic Preto</a>
                            <p>#MLB123456</p>
                        </span>
                    </td>
                    <td className={styles.price}>R$ 320,00</td>
                    <td className={styles.sales}>105</td>
                    <td className={styles.stock}>250 und</td>
                    <td className={styles.fav}><HeartIcon className={styles.no_liked} /></td>
                </tr>
                <tr>
                    <td className={styles.item}>
                        <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                        <span>
                            <a href='#'>Tênis Vans Authentic Preto</a>
                            <p>#MLB123456</p>
                        </span>
                    </td>
                    <td className={styles.price}>R$ 320,00</td>
                    <td className={styles.sales}>105</td>
                    <td className={styles.stock}>250 und</td>
                    <td className={styles.fav}><HeartIcon className={styles.no_liked} /></td>
                </tr>
                <tr>
                    <td className={styles.item}>
                        <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                        <span>
                            <a href='#'>Tênis Vans Authentic Preto</a>
                            <p>#MLB123456</p>
                        </span>
                    </td>
                    <td className={styles.price}>R$ 320,00</td>
                    <td className={styles.sales}>105</td>
                    <td className={styles.stock}>250 und</td>
                    <td className={styles.fav}><HeartIcon className={styles.no_liked} /></td>
                </tr>
                <tr>
                    <td className={styles.item}>
                        <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                        <span>
                            <a href='#'>Tênis Vans Authentic Preto</a>
                            <p>#MLB123456</p>
                        </span>
                    </td>
                    <td className={styles.price}>R$ 320,00</td>
                    <td className={styles.sales}>105</td>
                    <td className={styles.stock}>250 und</td>
                    <td className={styles.fav}><HeartIcon className={styles.no_liked} /></td>
                </tr>
                <tr>
                    <td className={styles.item}>
                        <img src="https://static.netshoes.com.br/produtos/tenis-vans-authentic-lona-e-branco/06/DFR-0977-006/DFR-0977-006_zoom1.jpg?ts=1664534007&ims=544x" alt="black shoes" />
                        <span>
                            <a href='#'>Tênis Vans Authentic Preto</a>
                            <p>#MLB123456</p>
                        </span>
                    </td>
                    <td className={styles.price}>R$ 320,00</td>
                    <td className={styles.sales}>105</td>
                    <td className={styles.stock}>250 und</td>
                    <td className={styles.fav}><HeartIcon className={styles.no_liked} /></td>
                </tr>
            </tbody>
        </Table>
    );
}