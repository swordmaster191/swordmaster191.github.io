"use client"
import React, { createContext, useState, useEffect, useContext } from "react"

const ThemeContext = createContext({
  theme: "dark",
  toggleTheme: () => {},
})

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const localTheme = localStorage.getItem("theme")
    if (localTheme) {
      setTheme(localTheme)
      document.documentElement.setAttribute("data-theme", localTheme)
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
      setTheme("light")
      document.documentElement.setAttribute("data-theme", "light")
    } else {
      setTheme("dark")
      document.documentElement.setAttribute("data-theme", "dark")
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark"
    setTheme(newTheme)
    document.documentElement.setAttribute("data-theme", newTheme)
    localStorage.setItem("theme", newTheme)
  }

  // Prevent flash of unstyled content/wrong theme by rendering children only after theme is determined, 
  // or render with a default structure but aware that theme might flip.
  // Ideally for SSG/SSR, we might want to render a default but hiding until mount is cleaner for personal sites.
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{children}</div>
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
