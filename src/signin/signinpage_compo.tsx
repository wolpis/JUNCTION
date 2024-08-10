import style from "./signinpage.module.css"

export const SignIn = () => {
    return (
        <div className={style.signin}>
            <div className={style.container}>
                <img src="/logo_2.png" style={{ width: "130px" }} />
                <p>Welcome back to ALLBLUE!</p>
                <div className={style.inputWarp}>
                    <input className={style.inputBox} type="email" name="name" placeholder="E-mail" />
                    <span className={style.inputFocus}></span>
                </div>
                <div className={style.inputWarp}>
                    <input className={style.inputBox} type="password" name="name" placeholder="Password" />
                    <span className={style.inputFocus}></span>
                </div>
            </div>
        </div>
    )
}