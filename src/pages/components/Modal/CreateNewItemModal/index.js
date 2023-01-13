import React from 'react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import styles from './CreateNewItemModal.module.scss';

export default function CreateNewItemModal({ handleCloseModal, show }) {
    return (
        <>
            <Modal
                centered
                show={show}
                onHide={handleCloseModal}
                backdrop="static"
                keyboard={false}
                className={styles.modal_container}
            >
                <Modal.Header closeButton className={styles.modal_header}>
                    <Modal.Title className={styles.modal_title}>Criar item</Modal.Title>
                </Modal.Header>
                <Modal.Body className={styles.modal_body}>
                    <label htmlFor="name">Nome do produto</label>
                    <input type="text" name='name' id="name" placeholder='Digite o nome do produto' />
                    <label htmlFor="price">Preço</label>
                    <input type="number" nama="price" id="price" placeholder='Digite o preço do produto' />
                    <label htmlFor="sales">Vendas</label>
                    <input type="number" nama="sales" id="sales" placeholder='Digite a quantidade de venda' />
                    <label htmlFor="stock">Estoque</label>
                    <input type="number" nama="stock" id="stock" placeholder='Digite a quantidade do estoque' />
                </Modal.Body>
                <Modal.Footer className={styles.modal_footer}>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Fechar
                    </Button>
                    <Button variant="primary">Criar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
