"use client"

import React from 'react'

import styles from "./theme.module.css"

export default function Theme() {
 
    const handleButton = (theme) => {
           
            const body = document.documentElement
        if(theme === "light") {
            body.setAttribute("data-theme" , "dark")
        } else if (theme === "dark") {
            body.setAttribute("data-theme" , "light")
        } else if (theme === "light") {
            body.setAttribute("data-theme","blue")
        }
        console.log("i was clicked")
    }
  return (
    <div className={styles.container}>
        <button onClick={() => handleButton("dark")} className={styles.button}>Light</button>
        <button onClick={() => handleButton("light")} className={styles.button}>Dark</button>
        
    </div>
  )
}
