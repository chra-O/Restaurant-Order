import  { createContext }  from 'react'

const ThemeContext = createContext({
    theme: 'light',
    themeToggler: ()=>{}
})

export default ThemeContext