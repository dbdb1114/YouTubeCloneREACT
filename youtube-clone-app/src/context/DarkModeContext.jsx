import { createContext, useContext, useEffect, useState } from "react";



const DarkModeContext = createContext();

export function DarkModeProvider ({children}) {
    
    const [darkMode, setDarkMode] = useState(false);
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        updateDarkMode(!darkMode);
    }
    /*
    *   브라우저나 컴퓨터 설정을 가져와서 dark인지 확인한다.
    *   맞다면 상태변경을 해준다.
    */
    useEffect(()=>{
        const isDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark').matches);
        setDarkMode(isDark);
        updateDarkMode(isDark);
    },[])

    return(
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
            {children}
        </DarkModeContext.Provider>
    )
}

function updateDarkMode(darkMode){
    if(darkMode){
        document.documentElement.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme = 'light';
    }
}

export const useDarkMode = ()=>useContext(DarkModeContext);