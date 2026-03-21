"use client"

import React from 'react'
import './globals.css'
import MainContainer from '../../components/MainContainer'
export default function Theme() {
 
    const handleButton = (theme) => {
           
            const body = document.documentElement
        if(theme === "light") {
            body.setAttribute("data-theme" , "dark")
        } else if (theme === "dark") {
            body.setAttribute("data-theme" , "light")
        } else if (theme === "light") {
            body.setAttribute("data-theme","blue")
        }else {
            body.setAttribute("data-theme" , "blue")
        }
        console.log("i was clicked")
    }
  return (
    <div>
        <button onClick={() => handleButton("dark")}>Light</button>
        <button onClick={() => handleButton("light")}>Dark</button>
        <button onClick={() =>handleButton("blue")}>Blue</button>
        <MainContainer/>
    </div>
  )
}
