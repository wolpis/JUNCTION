import style from "./mainpage.module.css"

export const HeaderBar = () => {
    return (
        <header className={style.header_}>
            <div>
                <img src="/logo_2.png" style={{width: "90px"}}/>
                <nav className={style.nav_}>
                    <span>Home</span>
                    <span>Home</span>
                    <span>Home</span>
                    <span>Home</span>
                    <span>Home</span>
                </nav>
                <div className={style.sign_up}>Sign Up</div>
            </div>
        </header>
    )
}