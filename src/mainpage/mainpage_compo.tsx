import style from "./mainpage.module.css"

export const HeaderBar = () => {
    return (
        <header className={style.header_}>
            <div>
                <img src="/logo_2.png" style={{ width: "90px" }} />
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
                <span>Home</span>
                <div className={style.sign_up}>Sign Up</div>
            </div>
        </header>
    )
}