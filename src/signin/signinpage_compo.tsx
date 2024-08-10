import style from "./signinpage.module.css"
import { MainButton } from "../components/MainButton"

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
                <div style={{ height: "50px" }}></div>
                <MainButton style={{ paddingLeft: "100px", paddingRight: "100px", marginBottom: "15px" }}>
                    Sign In
                </MainButton>
                <div className={style.desc}>
                    <span style={{ cursor: "pointer" }} onClick={() => location.replace("/sign-up")}>Sign Up</span> or <span>Find E-mail & PW</span>
                </div>
            </div>
        </div>
    )
}