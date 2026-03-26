'use client'
import React, { use } from 'react'
import { useState } from 'react'
import styles from './slider.module.css'
export default function Slider() {
    const [vertical, setVertical] = useState(0)
     const [horizontal, setHorizontal] = useState(0)
     const [spread, setSpread] = useState(10)
     const [blur , setBlur] = useState(10)
    const handleVertical = (e) => {
        setVertical(() => e.target.value )
    }
    const handleHorizontal = (e) => {
        setHorizontal(() => e.target.value)
    }
    const handleSpread = (e) => {
setSpread(() => e.target.value)
    }
    const handleBlur = (e) => {
        setBlur(()=> e.target.value )
    }
  
  return (
    <div className={styles.container}>
        <input 
        className={styles.input}
        onChange={handleVertical}
        value={vertical}
        type='range'
         min="-200"
          max="200"/>
          <div> 
            <input 
        className={styles.input}
        onChange={handleHorizontal}
        value={horizontal}
        type='range'
         min="-200"
          max="200"/></div>
          <div>
               <input 
        className={styles.input}
        onChange={handleSpread}
        value={spread}
        type='range'
         min="-200"
          max="200"/>

          </div>
          <div>
                  <input 
        className={styles.input}
        onChange={handleBlur}
        value={blur}
        type='range'
         min="-200"
          max="200"/>
          </div>
       

          <div style={{
            backgroundColor: "pink",
            boxShadow:`${horizontal}px  ${vertical}px  ${spread}px black`
          }}>
            HEllooo this is the place where i should see the shadow ok wait
          </div>
    </div>
  )
}
