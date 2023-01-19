import React from "react";
import { Container, Navbar } from "react-bootstrap";
import * as Avatar from "@radix-ui/react-avatar";

import DropDownMenu from "../DropdownMenu";

import styles from "./Header.module.scss";

export default function Header() {
    return (
        <>
            <Navbar className={styles.navbar_brand}>
                <Container className={styles.container_brand}>
                    <Navbar.Brand href="/" className={styles.brand}>
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
        </>
    );
}
