import { useState, CSSProperties } from "react"
import style from "./signuppage.module.css"

export const SignUp = () => {
    const [stage, setStage] = useState(0);

    return (
        <div className={style.signup}>
            <div className={style.container}>
                <Progress stage={stage} style={{ width: "85%", marginTop: "30px" }} />
                <p style={{ marginTop: "60px", opacity: "0.5" }}>Nice to meet you!</p>
                <p style={{ marginTop: "5px" }}>Please Check the Terms of Use.</p>
            </div>
        </div>
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