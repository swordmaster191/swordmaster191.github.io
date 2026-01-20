"use client"
import React from "react"
import { useTheme } from "../context/ThemeContext"
import { FaSun, FaMoon } from "react-icons/fa"

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      className="theme-toggle-btn"
      onClick={toggleTheme}
      aria-label="Toggle Dark/Light Mode"
    >
      {theme === "dark" ? <FaSun className="toggle-icon" /> : <FaMoon className="toggle-icon" />}
    </button>
  )
}

export default ThemeToggle
