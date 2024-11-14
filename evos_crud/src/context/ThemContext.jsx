/* eslint-disable react/prop-types */
import { createContext, useState } from "react"
import { DARK_MODE, LIGHT_MODE } from "../constants/themeConstant"

export const ThemeContext = createContext({})

const ThemProvider = ({ children }) => {
    const [theme, setTheme] = useState(
        localStorage.getItem('them_dark_mode') || LIGHT_MODE
    )

    const toggleDarkMode = () => {
        const newTheme = theme === DARK_MODE ? LIGHT_MODE : DARK_MODE
        setTheme(newTheme)
        localStorage.setItem('them_dark_mode', newTheme)
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemProvider