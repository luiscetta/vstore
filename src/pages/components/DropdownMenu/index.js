import React, { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

import styles from '../../../../styles/Dropdown.module.scss';

export default function DropDownMenu() {
    return (
        <Dropdown as={ButtonGroup}>
            <Dropdown.Toggle variant="secondary" id="dropdown-split-basic" className={styles.toggle_button} />
            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Todos os produtos</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Mais vendido</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Favoritos</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

