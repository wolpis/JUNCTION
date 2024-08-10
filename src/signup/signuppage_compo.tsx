import { useState, CSSProperties, useEffect } from "react"
import style from "./signuppage.module.css"
import { LuArrowRight } from "react-icons/lu";
import { LuCheckCircle } from "react-icons/lu";
import axios from "axios";
import { api_url } from "../utils/ext";

export const SignUp = () => {

    const [stage, setStage] = useState(0);
    const [data, Setdata] = useState({ nick: "", email: "", pwd: "" });
    const [pages, SetPage] = useState([<OneStage setStage={setStage} />, <TwoStage setStage={setStage} Setdata={Setdata} />, <ThreeStage setStage={setStage} data={data} Setdata={Setdata} />, <FourStage />])


    return (
        <div className={style.signup}>
            <div className={style.container}>
                <Progress stage={stage} style={{ width: "85%", marginTop: "30px" }} />
                {pages[stage]}
            </div>
        </div >
    )
}

const OneStage = ({ setStage }: { setStage: React.Dispatch<React.SetStateAction<number>> }) => {
    const text = "You know I want you It's not a secret I try to hide You know you want me So don't keep sayin' our hands are tied You claim it's not in the cards And fate is pullin' you miles away and out of a reach from me But you're hearin' my heart So who can stop me if I decide that you're my destiny?And how do we rewrite the stars? Say you were made to be mine And nothin' could keep us apart 'Cause you are the one I was meant to find It's up to you, and it's up to meNo one could say what we get to be And why don't we rewrite the stars? Changin' the world to be ours"
    const [tos, SetTos] = useState(false);
    const [pp, setPP] = useState(false);
    return (
        <>
            <p style={{ marginTop: "60px", opacity: "0.5" }}>Nice to meet you!</p>
            <p style={{ marginTop: "5px" }}>Please Check the Terms of Use.</p>
            <div style={{ color: "white", marginTop: "30px", display: "flex", width: "100%", flexDirection: "column" }}>
                <h3 onClick={() => SetTos(!tos)} style={{ display: "flex", alignItems: "center", textAlign: "left", marginLeft: "30px", userSelect: "none" }}><b style={{ marginRight: "10px", textAlign: "left" }}><LuCheckCircle color={tos ? "var(--solid-skyblue)" : "white"} /></b>Terms Of Service<span style={{ color: "var(--solid-skyblue)" }}>*</span></h3>
                <div style={{ border: "1px solid #797C8A", padding: "10px", marginLeft: "30px", marginRight: "30px", marginTop: "20px", fontSize: "0.6em", fontWeight: "400", lineHeight: "170%", letterSpacing: "0.48px", height: "100px", overflowY: "scroll" }}>{text}</div>
            </div>
            <div style={{ color: "white", marginTop: "30px", display: "flex", width: "100%", flexDirection: "column" }}>
                <h3 onClick={() => setPP(!pp)} style={{ display: "flex", alignItems: "center", textAlign: "left", marginLeft: "30px", userSelect: "none" }}><b style={{ marginRight: "10px", textAlign: "left" }}><LuCheckCircle color={pp ? "var(--solid-skyblue)" : "white"} /></b>Privacy Policy<span style={{ color: "var(--solid-skyblue)" }}>*</span></h3>
                <div style={{ border: "1px solid #797C8A", padding: "10px", marginLeft: "30px", marginRight: "30px", marginTop: "20px", fontSize: "0.6em", fontWeight: "400", lineHeight: "170%", letterSpacing: "0.48px", height: "100px", overflowY: "scroll" }}>{text}</div>
            </div>
            <div onClick={() => {
                if (tos === true && pp === true) {
                    setStage(1);
                } else {
                    alert("모든 약관을 동의해주세요!")
                }
            }} style={{ padding: "10px", backgroundColor: "var(--solid-skyblue)", fontWeight: "600", color: "white", paddingLeft: "80px", paddingRight: "80px", borderRadius: "0.4em", marginBottom: "20px", marginTop: "20px", userSelect: "none", cursor: "pointer" }}>Next</div>
        </>
    )
}

const TwoStage = ({ setStage, Setdata }: { setStage: React.Dispatch<React.SetStateAction<number>>, Setdata: React.Dispatch<React.SetStateAction<{ nick: string, email: string, pwd: string }>> }) => {
    const [nickname, SetNick] = useState("")
    const [email, SetEmail] = useState("")
    return (
        <>
            <p style={{ marginTop: "60px", width: "80%" }}>What’s your username?</p>
            <div className={style.inputWarp}>
                <input className={style.inputBox} type="text" name="name" placeholder="DevQueen" value={nickname} onChange={(e) => { SetNick(e.target.value) }} />
                <span className={style.inputFocus}></span>
            </div>
            <p style={{ marginTop: "60px", width: "80%" }}>What’s your E-mail?</p>
            <div className={style.inputWarp}>
                <input className={style.inputBox} type="email" name="name" placeholder="someone@example.com" value={email} onChange={(e) => { SetEmail(e.target.value) }} />
                <span className={style.inputFocus}></span>
            </div>
            <div onClick={() => {
                if (nickname !== "" && email !== "") {
                    Setdata({ "nick": nickname, "email": email, "pwd": "" })
                    setStage(2)
                } else {
                    alert("모든 항목을 작성해주세요!")
                }
            }} style={{ padding: "10px", backgroundColor: "var(--solid-skyblue)", fontWeight: "600", color: "white", paddingLeft: "80px", paddingRight: "80px", borderRadius: "0.4em", marginBottom: "20px", marginTop: "50px", userSelect: "none", cursor: "pointer" }}>Next</div>
        </>
    )
}


const ThreeStage = ({ setStage, Setdata, data }: { setStage: React.Dispatch<React.SetStateAction<number>>, Setdata: React.Dispatch<React.SetStateAction<{ nick: string, email: string, pwd: string }>>, data: { nick: string, email: string, pwd: string } }) => {
    const [pwd, SetPWD] = useState("")
    const [pwd2, SetPWD2] = useState("")
    return (
        <>
            <p style={{ marginTop: "60px", width: "80%" }}>Input your Password</p>
            <div className={style.inputWarp}>
                <input className={style.inputBox} type="password" name="name" placeholder="Input your password here." value={pwd} onChange={(e) => { SetPWD(e.target.value) }} />
                <span className={style.inputFocus}></span>
            </div>
            <div className={style.inputWarp}>
                <input className={style.inputBox} type="password" name="name" placeholder="One more time!" value={pwd2} onChange={(e) => { SetPWD2(e.target.value) }} />
                <span className={style.inputFocus}></span>
            </div>
            <div onClick={() => {
                if (pwd === pwd2) {
                    // SignupRequest(data.nick, data.email, pwd) 이거 분야 추가해야함 ㅠㅠㅠㅠㅠㅠㅠ 살려주세요
                    setStage(3)
                } else {
                    alert("비밀번호가 서로 다릅니다!")
                }
            }} style={{ padding: "10px", backgroundColor: "var(--solid-skyblue)", fontWeight: "600", color: "white", paddingLeft: "80px", paddingRight: "80px", borderRadius: "0.4em", marginBottom: "20px", marginTop: "50px", userSelect: "none", cursor: "pointer" }}>Next</div>
        </>
    )
}

const FourStage = () => {
    return (
        <>
            <p style={{ marginTop: "40px", fontSize: "1.3em" }}>Congratulation!</p>
            <p style={{ marginTop: "10px", fontSize: "0.9em" }}>Wellcome, <span style={{ color: "var(--solid-skyblue)" }}>DevQeen</span>.</p>
            <img src="/pp.svg" width={"200px"} style={{ marginTop: "5px" }} />
            <div style={{ display: "flex", padding: "10px", backgroundColor: "var(--solid-skyblue)", fontWeight: "600", color: "white", paddingLeft: "80px", paddingRight: "80px", borderRadius: "0.4em", marginBottom: "20px", marginTop: "50px", userSelect: "none", cursor: "pointer" }}>
                Decorate your profile
                <h3 style={{ marginLeft: "5px" }}><LuArrowRight /></h3>
            </div>
        </>
    )
}



const Progress = (props: { stage: number, style: CSSProperties }) => {
    let barWidth;

    if (props.stage === 0) {
        barWidth = 25;
    } else if (props.stage === 1) {
        barWidth = 50;
    } else if (props.stage === 2) {
        barWidth = 75;
    } else {
        barWidth = 100;
    }

    return (
        <div className={style.progress} style={props.style} >
            <div className={style.progressBar}></div >
            <div className={style.current} style={{ width: `${barWidth}%`, height: "10px" }}></div>
        </div>
    )
}


const SignupRequest = ({ nick, email, pwd }: { nick: string, email: string, pwd: string }) => {
    axios.post(api_url + "/member/register", {
        name: nick,
        email: email,
        password: pwd,
        sea: false,
        role: 0
    }).then((result) => {
        console.log("성공")
    }).catch((result) => {
        console.log("실패")
    })
}