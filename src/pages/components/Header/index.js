import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import * as Avatar from '@radix-ui/react-avatar';
import { MagnifyingGlassIcon } from '@radix-ui/react-icons';

import DropDownMenu from '../DropdownMenu';
import CreateNewItemModal from '../Modal/CreateNewItemModal';

import styles from './Header.module.scss';

export default function Header() {
    const [showModal, setShowModal] = useState(false);

    const handleCloseModal = () => setShowModal(false);
    const handleShowModal = () => setShowModal(true);

    return (
        <>
            <Navbar className={styles.navbar_brand}>
                <Container className={styles.container_brand}>
                    <Navbar.Brand href="#home" className={styles.brand}>
                        XCO<span>+</span>
                    </Navbar.Brand>
                    <div className={styles.avatar}>
                        <Avatar.Root className={styles.avatar_root}>
                            <Avatar.Image
                                className={styles.avatar_image}
                                src="https://media.licdn.com/dms/image/D4D03AQEfjxHO81wWCA/profile-displayphoto-shrink_200_200/0/1669768081204?e=1678924800&v=beta&t=-J662hFn0hUPYIokQL2kTaLgabPtBIIhc3lpqGnd-qw"
                                alt="Luis Filipe Cetta linkedin profile image"
                            />
                            <Avatar.Fallback className={styles.avatar_fallback} delayMs={600}>
                                LF
                            </Avatar.Fallback>
                        </Avatar.Root>
                        <DropDownMenu />
                    </div>
                </Container>
            </Navbar>
            <Navbar className={styles.navbar_products}>
                <Container className={styles.container_products}>
                    <h2>Produtos</h2>
                    <div className={styles.input_container}>
                        <MagnifyingGlassIcon className={styles.search_icon} />
                        <input type="search" placeholder="Buscar por produtos" />
                    </div>
                </Container>
            </Navbar>
            <Navbar className={styles.navbar_buttons}>
                <Container className={styles.container_buttons}>
                    <div className={styles.left_buttons}>
                        <button>Todas</button>
                        <button disabled>Favoritos</button>
                    </div>

                    <button onClick={handleShowModal}>Criar novo</button>
                    <CreateNewItemModal handleCloseModal={handleCloseModal} show={showModal} />
                </Container>
            </Navbar>
        </>
    );
}
