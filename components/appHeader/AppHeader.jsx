import Link from "next/link"
import { useRouter } from "next/router"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

import Dark from "../../assets/dark"
import Light from "../../assets/light"

import styles from './AppHeader.module.scss'


export const AppHeader =  () => {

    const { pathname } = useRouter()
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    let light_fill = theme === 'light' ? '#fff' : '#777777'
    let dark_fill = theme === 'dark' ? '#fff' : '#777777'
    
    
    
    if (!mounted) return null

    return(
        <header className={styles.container}>
            <Link href="/">
                <img className={styles.logo} src='/stats.svg' alt="logo" />
            </Link>
            <nav>
                <div className={styles.nav__container}>
                <div className={pathname == '/'  ? styles.nav__switch_bots : styles.nav__switch_stats} ></div>
                <Link href="/">
                    <div className={styles.nav__btn}><span className={styles.span} style={{color: pathname == '/' ? '#fff' : '#000'}}>BOTS</span></div>
                </Link>
                <Link href="/stats">
                    <div className={styles.nav__btn}><span className={styles.span} style={{color: pathname == '/stats' ? '#fff' : '#000'}}>STATS</span></div>
                </Link>
                </div>
            </nav>
            <div className={styles.theme}>
                <Light style={{'fill' : light_fill}} onClick = {() => setTheme('light')}/>
                <Dark  style={{'fill' : dark_fill}} onClick = {() => setTheme('dark')}/>
            </div>
        </header>
        
    )
}

export default AppHeader