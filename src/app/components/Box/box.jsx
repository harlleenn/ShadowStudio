'use client'

import React from "react"
import styles from './box.module.css'
function Box({ vertical, horizontal, spread, blur, color }) {
  return (
    
      <div
        className={styles.box}
        style={{
          "--shadow-vertical": `${vertical}px`,
          "--shadow-horizontal": `${horizontal}px`,
          "--shadow-blur": `${blur}px`,
          "--shadow-spread": `${spread}px`,
          "--box-color": `${color}`,
        }}
      >
        <div className={styles.boxcontainer}>
             <p className={styles.text}>Add shadow to this box with the controls on the side panel. This box mimics a card box that you might have on your website.

Add shadow layers, change colors and play with the controls.</p> 
        </div>
       
      </div>
    
  );
}
export default Box;