import React from "react";
import "./styles/boiler.css";
import FB from "../assets/fb.webp";
import TW from "../assets/twitter.webp";
import INS from "../assets/insta.webp";

function Boiler() {
    return (
        <div
            id="fake-root"
            style={{
                fontFamily: "serif",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                background: "linear-gradient(to right, #f14c2f, #ec2b5e)",
                height: "100vh",
            }}
        >
            <div
                style={{
                    border: "5px solid white",
                    width: "700px",
                    boxSizing: "border-box",
                    marginBottom: "20px",
                    display: "flex",
                    padding: "10px",
                    justifyContent: "center",
                    background: "linear-gradient(to right, #1fbf5a, #02bbec)",
                    color: "white",
                    fontWeight: "bolder",
                    borderRadius: "10px",
                    height: "fit-content",
                }}
            >
                Site is W.I.P.
            </div>

            <div
                style={{
                    width: "700px",
                    marginBottom: "20px",
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    height: "fit-content",
                }}
            >
                <div
                    style={{
                        display: "inline-block",
                        backgroundImage:
                            "url(https://cdn.discordapp.com/attachments/1076441506325475379/1076449911907819550/mkf-logo.png)",
                        backgroundPosition: "center",
                        backgroundSize: "75%",
                        backgroundRepeat: "no-repeat",
                        height: "300px",
                        width: "700px",
                    }}
                />
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "700px",
                    marginBottom: "20px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    paddingBottom: "5px",
                    paddingTop: "5px",
                    height: "fit-content",
                }}
            >
                <span
                    style={{
                        textAlign: "center",
                        fontSize: "40px",
                        fontWeight: "600",
                    }}
                >
                    <span style={{ color: "rgb(250, 0, 0)" }}>
                        Manjeet Kaur
                    </span>{" "}
                    Foundation
                </span>
            </div>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    width: "700px",
                    boxSizing: "border-box",
                    marginBottom: "20px",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    height: "fit-content",
                }}
            >
                <i style={{ display: "block", textAlign: "center" }}>
                    <b>Manjeet Kaur Foundation</b> is an 80(g) registered
                    organization. To Donate, please visit our{" "}
                    <a
                        style={{ fontWeight: "bold", color: "#0055ff" }}
                        href="http://www.facebook.com/groups/manjeetkaurfoundation"
                    >
                        Facebook page
                    </a>
                    . We are a <b>non-profit, charitable organization</b> geared
                    towards the caring, development and well-being of humanity.
                    The foundation bears the name of{" "}
                    <b>Late Mrs. Manjeet Kaur</b> (mother of Guru Singh), an
                    epitome of caring and kindness.
                </i>
            </div>

            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "700px",
                    boxSizing: "border-box",
                    marginBottom: "20px",

                    height: "fit-content",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        width: "33%",
                        flexDirection: "row",
                        alignItems: "center",
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                        paddingRight: "10px",
                        marginRight: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <img
                        src={INS}
                        alt="facebook logo"
                        width="50"
                        height="50"
                        style={{ margin: "5px", marginRight: "10px" }}
                    />
                    <a href="http://instagram.com/ManjeetKaurFoundation">
                        <div
                            className="font-xs"
                            href="http://instagram.com/ManjeetKaurFoundation"
                        >
                            instagram.com/
                            <br />
                            ManjeetKaurFoundation
                        </div>
                    </a>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "33%",
                        flexDirection: "row",
                        alignItems: "center",
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                        paddingRight: "10px",
                        marginRight: "20px",
                        boxSizing: "border-box",
                    }}
                >
                    <img
                        src={FB}
                        alt="facebook logo"
                        width="50"
                        height="50"
                        style={{ margin: "5px", marginRight: "10px" }}
                    />
                    <a href="http://www.facebook.com/groups/manjeetkaurfoundation">
                        <div className="font-xs">
                            facebook.com/groups/
                            <br />
                            ManjeetKaurFoundation
                        </div>
                    </a>
                </div>
                <div
                    style={{
                        display: "flex",
                        width: "33%",
                        flexDirection: "row",
                        alignItems: "center",
                        fontWeight: "bolder",
                        fontStyle: "italic",
                        backgroundColor: "white",
                        borderRadius: "10px",
                        padding: "5px",
                        paddingRight: "10px",
                        boxSizing: "border-box",
                    }}
                >
                    <img
                        src={TW}
                        alt="facebook logo"
                        width="50"
                        height="50"
                        style={{ margin: "5px", marginRight: "10px" }}
                    />
                    <a href="http://www.twitter.com/ManjeetKaurOrg">
                        <div className="font-xs">
                            twitter.com/
                            <br />
                            ManjeetKaurOrg
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Boiler;
