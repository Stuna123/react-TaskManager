/*
import { useState } from "react"
import Logo from "../assets/Default.png"

export const Header = () => {

  const [theme, setTheme] = useState("medium");
  
  document.documentElement.classList.add(theme);

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="default.png"/>
        <div className="themeSelector">
          <span className="light"></span>
          <span className="medium activeTheme"></span>
          <span className="dark "></span>
          <span className="gOne"></span>
          <span className="gTwo"></span>
          <span className="gThree"></span>
        </div>
      </div>
    </header>
  )
}
---------------

import { useEffect, useState } from "react"
import Logo from "../assets/Default.png"

export const Header = () => {

  const [theme, setTheme] = useState("medium");
  
  //* On ajoute useEffect & onclick
  useEffect(() => {
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="default.png"/>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")}   className="light"></span>
          <span onClick={() => setTheme("medium")}  className="medium activeTheme"></span>
          <span onClick={() => setTheme("dark")}    className="dark "></span>
          <span onClick={() => setTheme("gOne")}    className="gOne"></span>
          <span onClick={() => setTheme("gTwo")}    className="gTwo"></span>
          <span onClick={() => setTheme("gThree")}  className="gThree"></span>
        </div>
      </div>
    </header>  
  )
}
---------------

import { useEffect, useState } from "react"
import Logo from "../assets/Default.png"

export const Header = () => {

  const [theme, setTheme] = useState("medium");
  
  //* On ajoute useEffect & onclick
  useEffect(() => {
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="default.png"/>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")}   className="light"></span>
          <span onClick={() => setTheme("medium")}  className="medium activeTheme"></span>
          <span onClick={() => setTheme("dark")}    className="dark "></span>
          <span onClick={() => setTheme("gOne")}    className="gOne"></span>
          <span onClick={() => setTheme("gTwo")}    className="gTwo"></span>
          <span onClick={() => setTheme("gThree")}  className="gThree"></span>
        </div>
      </div>
    </header>  
  )
}
---------------

import { useEffect, useState } from "react"
import Logo from "../assets/Default.png"

export const Header = () => {

  const [theme, setTheme] = useState("medium");
  
  //* On ajoute la suppression et on ajoute la nouvelle class choisis
  useEffect(() => {
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="default.png"/>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")}   className="light"></span>
          <span onClick={() => setTheme("medium")}  className="medium activeTheme"></span>
          <span onClick={() => setTheme("dark")}    className="dark "></span>
          <span onClick={() => setTheme("gOne")}    className="gOne"></span>
          <span onClick={() => setTheme("gTwo")}    className="gTwo"></span>
          <span onClick={() => setTheme("gThree")}  className="gThree"></span>
        </div>
      </div>
    </header>  
  )
}
---------------

//* Si on choisi le theme correspondant, il est devient active
import { useEffect, useState } from "react"
import Logo from "../assets/Default.png"

export const Header = () => {

  const [theme, setTheme] = useState("dark");
  
  //* document.documentElement.classList.add(theme);
  useEffect(() => {
    document.documentElement.removeAttribute("class")
    document.documentElement.classList.add(theme)
  }, [theme])

  return (
    <header>
      <div className="logo">
        <img src={Logo} alt="default.png"/>
        <div className="themeSelector">
          <span onClick={() => setTheme("light")}   className={ theme === "light" ? "light activeTheme" : "light"}></span>
          <span onClick={() => setTheme("medium")}  className={ theme === "medium" ? "medium activeTheme" : "medium"}></span>
          <span onClick={() => setTheme("dark")}    className={ theme === "dark" ? "dark activeTheme" : "dark"}></span>
          <span onClick={() => setTheme("gOne")}    className={ theme === "gOne" ? "gOne activeTheme" : "gOne"}></span>
          <span onClick={() => setTheme("gTwo")}    className={ theme === "gTwo" ? "gTwo activeTheme" : "gTwo"}></span>
          <span onClick={() => setTheme("gThree")}  className={ theme === "gThree" ? "gThree activeTheme" : "gThree"}></span>
        </div>
      </div>
    </header>
  )
}
---------------
*/

//* On rajoute localStorage pour sauvegarder les informations
