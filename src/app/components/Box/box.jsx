'use client'

import React from "react"
import styles from './box.module.css'
function Box () {
    return (
        <div className={styles.boxcontainer}>
            <p className={styles.text}>
                  Hello i am a box where you can see the shadows
            </p>
        </div>
    )
}
export default Box;