import React from "react";
import "./styles/boiler2.css";
import FB from '../assets/fb.webp';
import INS from '../assets/insta.webp';
import TWT from '../assets/twitter.webp';
import LINE from '../assets/line.png';
import "./styles/anima.css";
import { BsEnvelope, BsEnvelopeFill, BsFacebook, BsInstagram, BsPhone, BsPhoneFill, BsTelephoneFill, BsTwitter } from "react-icons/bs";

function Boiler2() {
    return (
        <>
            <div class="area">
                <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div id="ultra">
                <div className="peekbar">Site under development</div>

                <div className="boiler2-header font-lg">
                    <span className="small-caps">
                        www.
                        <span className="large-caps">M</span>
                        anjeet
                        <span className="large-caps">K</span>
                        aur.org
                    </span>
                </div>

                <div className="bodie">
                    <div className="bg-logo" />
                    <div id="social-container">
                        <a className="social-sub-container" href="http://www.facebook.com/groups/manjeetkaurfoundation">
                            <img src={FB} alt='facebook icon' height='30' />
                            <span style={{  fontSize: '20px', color: 'rgb(60,60,60)' }}>&nbsp;&nbsp;ManjeetKaurFoundation</span>
                        </a>
                        <a className="social-sub-container" href="https://instagram.com/ManjeetKaurFoundation">
                            <img src={INS} alt='instagram icon' height='30' />
                            <span style={{  fontSize: '20px', color: 'rgb(60,60,60)' }}>&nbsp;&nbsp;@ManjeetKaurFoundation</span>
                        </a>
                        <a className="social-sub-container" href="https://twitter.com/hashtag/ManjeetKaurOrg">
                            <img src={TWT} alt='twitter icon' height='30' />
                            <span style={{  fontSize: '20px', color: 'rgb(60,60,60)' }}>&nbsp;&nbsp;#ManjeetKaurOrg</span>
                        </a>
                    </div>
                    {/* <div id="org-about" style={{ textAlign: 'center', fontFamily: 'Noto Sans' }}>
                        <b className="noto">Manjeet Kaur Foundation</b> is an 80(g) registered organization. <br /><br />

                        <b className="noto">To Donate, please message on our social media or email us to request our account information and instructions.</b><br /><br />

                        We are a <b className="noto">non-profit, charitable organization</b> geared towards the caring, development and well-being of humanity.

                        The foundation bears the name of <b className="noto">Late Mrs. Manjeet Kaur</b> (mother of Guru Singh, Founder), an epitome of caring and kindness.
                    </div>
                    <br /><br /> */}

                    <a href="mailto:mkfcare@gmail.com" style={{ alignSelf: 'center', marginTop: '50px' }}>
                        <div className="social-ic" style={{ fontSize: '14px', fontFamily: 'monospace', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px', fontWeight: 'bold' }}>
                            <BsEnvelopeFill />&nbsp;<span className="magenta monospace">mkf</span>care@gmail.com
                        </div>
                    </a>

                    <div className="social-ic" style={{ fontSize: '14px', fontFamily: 'monospace', alignSelf: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', fontWeight: 'bold' }}>
                        <BsTelephoneFill />&nbsp;+91 341 350-0492
                    </div>
                </div>


                <div className="footer">
                    {/* <div id="footer-mkf" style={{ marginLeft: '10px', fontWeight: '500', color: 'rgb(150,150,150)', height: 'fit-content', alignSelf: 'center' }}>
                        Manjeet Kaur Foundation
                    </div>
                    <div style={{ fontSize: '30px', marginLeft: '10px', marginRight: '10px' }}>
                        <BsFacebook className="social-ic" />
                        <div style={{ display: 'inline-block', width: '20px' }} />
                        <BsInstagram className="social-ic" />
                        <div style={{ display: 'inline-block', width: '20px' }} />
                        <BsTwitter className="social-ic" />
                    </div> */}
                    <img src={LINE} alt="line" width="100%" height="1" />
                    <div id="org-about">
                        <b className="noto">Manjeet Kaur Foundation</b> is an 80(g) registered organization.
                        <b className="noto">To Donate, please message on our social media or email us to request our account information and instructions.</b>
                        We are a <b className="noto">non-profit, charitable organization</b> geared towards the caring, development and well-being of humanity.
                        The foundation bears the name of <b className="noto">Late Mrs. Manjeet Kaur</b> (mother of Guru Singh, Founder), an epitome of caring and kindness.
                    </div>
                </div>
            </div>
        </>
    );
}

export default Boiler2;
