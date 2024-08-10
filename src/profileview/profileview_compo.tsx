import style from "./profileview.module.css"
import { LuHeart } from "react-icons/lu";

export const ProfileBanner = ({ userId }: { userId: string | undefined }) => {
    return (
        <div className={style.banner}>
            <div className={style.profile_banner} />
            <img src="/pfp.png" className={style.profile_image} />
            <div className={style.profile_name}>
                <span>CodingJoa</span>
                <div className={style.tier}><img src="/Diamond.png" /><p>diamond</p></div>
            </div>
            <p>Coding Joa. Front-end Developer/Interested in Artificial Intelligence. Self intro is okay for Two Line.</p>
        </div>
    )
}

const posi = (value: number) => {
    if (value === 0) {
        return "0"
    }
    if (value >= 1 && value <= 2) {
        return "0.25"
    } else if (value >= 3 && value <= 5) {
        return "0.5"
    } else if (value >= 6 && value <= 7) {
        return "0.75"
    } else {
        return "1"
    }
}

export const Glass = ({ userId }: { userId: string | undefined }) => {
    const s = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);
    const m = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);
    const t = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);
    const w = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);
    const tt = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);
    const f = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);
    const sa = Array.from({ length: 50 }, () => Math.floor(Math.random() * 10) + 1);

    return (
        <div className={style.glassWrap}>
            <div className={style.glass}>
                <p>404 days in a row!</p>
                <div className={style.vertical}>
                    <div className={style.horizontal}>
                        <p>S</p>
                        <div className={style.glassContent}>
                            {
                                s.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.horizontal}>
                        <p>M</p>
                        <div className={style.glassContent}>
                            {
                                m.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.horizontal}>
                        <p>T</p>
                        <div className={style.glassContent}>
                            {
                                t.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.horizontal}>
                        <p>W</p>
                        <div className={style.glassContent}>
                            {
                                w.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.horizontal}>
                        <p>T</p>
                        <div className={style.glassContent}>
                            {
                                tt.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.horizontal}>
                        <p>F</p>
                        <div className={style.glassContent}>
                            {
                                f.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={style.horizontal}>
                        <p>S</p>
                        <div className={style.glassContent}>
                            {
                                sa.map((da) => {
                                    return (
                                        <div style={{ opacity: posi(da) }}></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const BestIdea = ({ userId }: { userId: string | undefined }) => {
    return (
        <div className={style.best_idea_wrap}>
            <div className={style.best_idea}>
                <p>Best Idea</p>
                <div className={style.best_idea_inner}>
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
        </div>
    )
}