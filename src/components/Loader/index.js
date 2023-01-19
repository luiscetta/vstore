import React from "react";
import { Circles as Loader } from "react-loader-spinner";

import styles from "./Loader.module.scss";

export default function Loading() {
    return (
        <div className={styles.loader}>
            <Loader color="var(--details-purple)" />
        </div>
    )
}
