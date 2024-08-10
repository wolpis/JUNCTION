import style from "./mainpage.module.css"

export const HeaderBar = () => {
    return (
        <header className={style.header_}>
            <div>
                <img src="/logo_2.png" style={{ width: "90px" }} />
                <span>Home</span>
                <span>Hall of Fame</span>
                <span>Sponser</span>
                <span>We are?</span>
                <div className={style.sign_up}>Sign Up</div>
            </div>
        </header>
    )
}

export const MainBanner = () => {
    return (
        <div className={style.main_banner}>
            <div>
                <p style={{ fontSize: "1.7em", letterSpacing: "2.56px", fontWeight: "600", color: "white", opacity: "0.5" }}>8/12~8/18</p>
                <p style={{ fontSize: "2.8em", letterSpacing: "2.56px", fontWeight: "600", color: "white", opacity: "0.5" }}>This Topic:</p>
                <p style={{ fontSize: "2.8em", letterSpacing: "2.56px", fontWeight: "600" }}>SELF-DRIVING CAR</p>
            </div>
        </div>
    )
}

export const TopicProcess = () => {
    return (
        <div className={style.topic_process}>
            <div className={style.process_text}>
                <span>Today is:</span> Mon<br />
                Planning Session <span>is ~ing</span>
            </div>
            <ProcessBar />
        </div>
    )
}

const ProcessBar = () => {
    return (
        <div className={style.process_bar}>

        </div>
    )
}