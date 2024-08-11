import style from "./mainpage.module.css"
import { LuArrowRight, LuHeart } from "react-icons/lu";

export const HeaderBar = () => {
    return (
        <header className={style.header_}>
            <div>
                <img src="/logo_2.png" style={{ width: "90px" }} onClick={() => location.replace("/")} />
                <span style={{ cursor: "pointer" }}>Home</span>
                <span style={{ cursor: "pointer" }}>Hall of Fame</span>
                <span style={{ cursor: "pointer" }}>Sponser</span>
                <span style={{ cursor: "pointer" }}>We are?</span>
                <div className={style.sign_up} onClick={() => location.replace("/sign-in")}>Sign In</div>
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
            <SubmitButton />
        </div>
    )
}

const ProcessBar = () => {
    return (
        <div className={style.process}>
            <div className={style.process_bar}></div>
            <div className={style.process_desc}>
                <p className={style.currect_process}>Planning(Mon~Tue)</p>
                <p>Design(Tue~Wed)</p>
                <p>Dev(Wed~Sat)</p>
                <p>Evaluate(Sun)</p>
            </div>
        </div>
    )
}

const SubmitButton = () => {
    return (
        <div className={style.submit_button}>
            Submit Yours Now! <h3 style={{ display: "flex", alignItems: "center", marginLeft: "13px" }}>< LuArrowRight /></h3>
        </div>
    )
}

export const RealTimeHot = () => {
    return (
        <div className={style.real_tiem_hot}>
            <h2>🔥 Real-time Hot Ideas</h2>

            <div style={{ display: "flex", marginTop: "30px", justifyContent: "center" }}>
                <div className={style.box}>
                    <header style={{ margin: "20px" }}>
                        <h1 style={{ fontSize: "1.7em", textAlign: "left" }}>Self-driving<br />wheelchair<br />for disabled</h1>
                    </header>
                    <footer style={{ display: "flex", backgroundColor: "#22202E", marginTop: "100px" }}>
                        <div style={{ display: "flex", padding: "7px", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                            <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                <p>Dohan Kwon</p>
                                <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                            </div>
                            <div><h1 style={{ display: "flex", placeContent: "center" }}><LuHeart /></h1></div>
                        </div>
                    </footer>
                </div>
                <div className={style.box} style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <header style={{ margin: "20px" }}>
                        <h1 style={{ fontSize: "1.7em", textAlign: "left" }}>Self-driving<br />wheelchair<br />for disabled</h1>
                    </header>
                    <footer style={{ display: "flex", backgroundColor: "#22202E", marginTop: "100px" }}>
                        <div style={{ display: "flex", padding: "7px", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                            <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                <p>Dohan Kwon</p>
                                <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                            </div>
                            <div><h1 style={{ display: "flex", placeContent: "center" }}><LuHeart /></h1></div>
                        </div>
                    </footer>
                </div>
                <div className={style.box}>
                    <header style={{ margin: "20px" }}>
                        <h1 style={{ fontSize: "1.7em", textAlign: "left" }}>Self-driving<br />wheelchair<br />for disabled</h1>
                    </header>
                    <footer style={{ display: "flex", backgroundColor: "#22202E", marginTop: "100px" }}>
                        <div style={{ display: "flex", padding: "7px", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                            <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                <p>Dohan Kwon</p>
                                <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                            </div>
                            <div><h1 style={{ display: "flex", placeContent: "center" }}><LuHeart /></h1></div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export const NewIdea = () => {
    return (
        <div className={style.new_idea}>
            <h2>🚀 New Ideas</h2>

            <div style={{ display: "flex", marginTop: "30px", justifyContent: "center" }}>
                <div className={style.box}>
                    <header style={{ margin: "20px" }}>
                        <h1 style={{ fontSize: "1.7em", textAlign: "left" }}>Self-driving<br />wheelchair<br />for disabled</h1>
                    </header>
                    <footer style={{ display: "flex", backgroundColor: "#22202E", marginTop: "100px" }}>
                        <div style={{ display: "flex", padding: "7px", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                            <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                <p>Dohan Kwon</p>
                                <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                            </div>
                            <div><h1 style={{ display: "flex", placeContent: "center" }}><LuHeart /></h1></div>
                        </div>
                    </footer>
                </div>
                <div className={style.box} style={{ marginLeft: "20px", marginRight: "20px" }}>
                    <header style={{ margin: "20px" }}>
                        <h1 style={{ fontSize: "1.7em", textAlign: "left" }}>Self-driving<br />wheelchair<br />for disabled</h1>
                    </header>
                    <footer style={{ display: "flex", backgroundColor: "#22202E", marginTop: "100px" }}>
                        <div style={{ display: "flex", padding: "7px", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                            <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                <p>Dohan Kwon</p>
                                <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                            </div>
                            <div><h1 style={{ display: "flex", placeContent: "center" }}><LuHeart /></h1></div>
                        </div>
                    </footer>
                </div>
                <div className={style.box}>
                    <header style={{ margin: "20px" }}>
                        <h1 style={{ fontSize: "1.7em", textAlign: "left" }}>Self-driving<br />wheelchair<br />for disabled</h1>
                    </header>
                    <footer style={{ display: "flex", backgroundColor: "#22202E", marginTop: "100px" }}>
                        <div style={{ display: "flex", padding: "7px", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                            <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                            <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                <p>Dohan Kwon</p>
                                <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                            </div>
                            <div><h1 style={{ display: "flex", placeContent: "center" }}><LuHeart /></h1></div>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    )
}

export const More = () => {
    return (
        <div style={{ backgroundColor: "black", color: "white", fontWeight: "600", fontSize: "1.2em", textAlign: "center", padding: "15px", cursor: "pointer" }}>
            More +
        </div>
    )
}

export const Footer_ = () => {
    return (
        <div style={{ backgroundColor: "#101012" }}>
            <div style={{ backgroundImage: "url(./logo.png)", height: "200px", backgroundRepeat: "no-repeat", backgroundSize: "15%", backgroundPositionY: "center", backgroundPositionX: "90%" }}>
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }}>
                    <div style={{ display: "flex", flexDirection: "column", color: "gray" }}>
                        <img src="/logo_2.png" style={{ width: "120px" }} />
                        <div style={{ marginTop: "10px" }}>
                            <span style={{ fontWeight: "600", textDecorationLine: "underline", cursor: "pointer" }}>Terms of Service</span><span style={{ fontWeight: "600", marginLeft: "20px", textDecorationLine: "underline", cursor: "pointer" }}>Privacy Policy</span>
                        </div>
                        <span>Copyrightⓒ Since 2024, ALLBLUE All rights reserved.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}