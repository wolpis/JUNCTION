import ReactMarkdown from 'react-markdown';
import { LuArrowRight, LuHeart } from "react-icons/lu";
import { HeaderBar } from '../mainpage/mainpage_compo';
import { useEffect, useState } from 'react';


const DetailPage = () => {
    const [mark, setmark] = useState("");
    useEffect(() => {
        fetch("./01.md")
            .then((response) => response.text())
            .then((text) => setmark(text));
    }, []);
    return (<>
        <header>
            <HeaderBar />
        </header>
        <div style={{ display: "flex", justifyContent: "center" }}>
            <div>

                <body style={{ paddingTop: "100px", color: "white", display: "flex", justifyContent: "center", width: "30vw" }}>
                    <div style={{ padding: "30px", display: "flex", flexDirection: "column" }}>
                        <header style={{ display: "flex", width: "55vw", flexDirection: "column" }}>
                            <h1>Self-driving Wheelchair<br />For Disabled</h1>
                            <h3 style={{ opacity: "0.5" }}>2024-08-11</h3>
                            <footer style={{ display: "flex", marginTop: "40px", marginBottom: "20px" }}>
                                <div style={{ display: "flex", paddingLeft: "15px", paddingRight: "15px", width: "100%" }}>
                                    <div style={{ backgroundColor: "#343145", width: "35px", height: "35px", borderRadius: "100%" }}></div>
                                    <div style={{ display: "flex", flexDirection: "column", textAlign: "left", marginLeft: "15px", marginRight: "auto" }}>
                                        <p>Dohan Kwon</p>
                                        <p style={{ fontSize: "0.9rem", color: "#4F4D6C" }}>Planner</p>
                                    </div>
                                </div>
                            </footer>
                        </header>
                        <body style={{ borderTop: "3px solid #AEB4D0", paddingTop: "30px" }}>
                            <ReactMarkdown>
                                {mark}
                            </ReactMarkdown>
                        </body>

                    </div>
                </body>
            </div>

        </div></>
    )
}

export default DetailPage;
