"use client";
import React, { use } from "react";
import { useState } from "react";
import styles from "./slider.module.css";
import Box from "../Box/box";
export default function Slider() {
  const [vertical, setVertical] = useState(0);
  const [horizontal, setHorizontal] = useState(0);
  const [spread, setSpread] = useState(10);
  const [blur, setBlur] = useState(10);
  const handleVertical = (e) => {
    setVertical(() => e.target.value);
  };
  const handleHorizontal = (e) => {
    setHorizontal(() => e.target.value);
  };
  const handleSpread = (e) => {
    setSpread(() => e.target.value);
  };
  const handleBlur = (e) => {
    setBlur(() => e.target.value);
  };

  return (
    <div className={styles.container}>
          <Box 
     vertical={vertical} 
     horizontal={horizontal} 
     blur={blur} 
     spread={spread}/>
      <div className={styles.inputt}>
     
        <input
          onChange={handleVertical}
          value={vertical}
          type="range"
          min="-200"
          max="500"
        />

        <input
          className={styles.input}
          onChange={handleHorizontal}
          value={horizontal}
          type="range"
          min="-200"
          max="500"
        />

        <input
          className={styles.input}
          onChange={handleSpread}
          value={spread}
          type="range"
          min="-200"
          max="500"
        />

        <input
          className={styles.input}
          onChange={handleBlur}
          value={blur}
          type="range"
          min="-200"
          max="500"
        />
      </div>

     
    </div>
  );
}
