import React, { useState } from "react";
import "./styles/work.css";
import work1 from '../assets/work/work1.jpeg'
import work2 from '../assets/work/work2.jpeg'
import work3 from '../assets/work/work3.jpeg'
import work4 from '../assets/work/work4.jpeg'
import work5 from '../assets/work/work5.jpeg'
import work6 from '../assets/work/work6.jpeg'
import work7 from '../assets/work/work7.jpeg'
import work8 from '../assets/work/work8.jpeg'
import work9 from '../assets/work/work9.jpeg'
import work10 from '../assets/work/work10.jpeg'
import work11 from '../assets/work/work11.jpeg'
const Work = () => {
    const [showWorks, setShowWorks] = useState(false);
    const jsonData = [
        {
            img:work1,
            p:"March 23, 2023 Blood Donation Camp on the Shaheed Divas of #BhagatSingh, in collaboration with the Sikh Welfare Society.",
            link:"https://www.instagram.com/p/CqR3FiupJZq/"
        },
        {
            img:work2,
            p:"Humanity begins with the recognition that people are human.",
            link:"https://www.instagram.com/p/CpY3-qXPBdI/"
        },
        {
            img:work3,
            p:"The foundation provided Waterproof Stickers distributed around the city, pasted at pertinent spots, mostly on public vehicles, for assisting citizens have easy access to #Emergency Contact Information.",
            link:"https://www.instagram.com/p/CpK1nSlgpHe/"
        },
        {
            img:work4,
            p:"We were blessed to have some resident members of Asha Niketan, an institution for the care and well-being of specially abled persons, join us at the #Racefor7 event held on February 26th, 2023. Manjeet Kaur Foundation is a supporter member of Asha Niketan.",
            link:"https://www.instagram.com/p/CpKtcx2voLE/"
        },
        {
            img:work5,
            p:"February 26th, 2023. #racefor7 The Manjeet Kaur Foundation is proud to be an organizing partner supporting this cause. Manjeet Kaur Foundation is an 80(g) registered organization.",
            link:"https://www.instagram.com/p/CpEkuDSJVl_/"
        },
        {
            img:work6,
            p:"Today, the #ManjeetKaurFoundation presented the 'R. S. Chaudhri Memorial Scholarship' (an annual event) to the Rifle Club. This scholarship was created in order to assist extremely skilled, yet underprivileged sportspersons who lack the means to further their skills.",
            link:"https://www.instagram.com/p/CojsF6hvmkv/"
        },
        {
            img:work7,
            p:"Scenes from the Grand Finale of the Inter School Debate organized by #ManjeetKaurFoundation and #unitedhopefoundation creating awareness regarding traffic and related discipline. This initiative intends to promote better civic sense thereby enhancing the quality of life.",
            link:"https://www.instagram.com/p/CohgiPgsgnt/"
        },
        {
            img:work8,
            p:"Wonderful partnering with our friends at United H.O.P.E Foundation and A. D. P. C. to organize a series of intra school debates creating awareness regarding traffic and related discipline. This initiative intends to promote better civic sense thereby enhancing the quality of life.",
            link:"https://www.instagram.com/p/CoM7ia9vDMR/"
        },
        {
            img:work9,
            p:"The Manjeet Kaur Foundation donates and distributes Blankets to hundreds of needy people during several events conducted throughout the Winter months.",
            link:"https://www.instagram.com/p/CoFKUVwvWRc/"
        },
        {
            img:work10,
            p:"Supporting a Christmas Themed Program for the differently abled children at #AshaNiketan. Distribution of Gifts and Food to the children. December, 2022.",
            link:"https://www.instagram.com/p/CnQu__WoZm6/"
        },
        {
            img:work11,
            p:"Donating winter clothing to our friends at the @united_hope_foundation Clothing Drive. Fueled by @bigfm",
            link:"https://www.instagram.com/p/CnMz_EuJ9B2/"
        },
    ];

    const toggleWorks = () => {
        setShowWorks(!showWorks);
    };

    return (
        <div>
            <div className="work-container">
                <div className="main-container">
                    <h2>What we do?</h2>
                    <span className="brief-info">
                        Our charity organization is committed to making a
                        positive impact on the lives of those in need. We
                        believe that by working together, we can create a better
                        future for all. Our work is centered on helping the less
                        fortunate and vulnerable individuals, families, and
                        communities across the globe. In this write-up, we will
                        highlight some of the key areas in which our charity
                        organization operates and the impact of our work.
                    </span>
                    <br />
                    <button className="works-mobile" onClick={toggleWorks}>
                        {showWorks
                            ? "Collapse works..."
                            : "Expand..."}
                    </button>
                    {showWorks && (
                        <div className="mobile-container">
                            <h3 className="info-headers">Some of our works</h3>
                            <section>
                                {jsonData.map((data, index) => (
                                    <section key={index}>
                                        <img src={data.img} alt="img" />
                                        <p>{data.p}</p>
                                        <a href={data.link}>Read More...</a>
                                    </section>
                                ))}
                            </section>
                        </div>
                    )}
                    <h3 className="info-headers">Areas of Operation:</h3>

                    <span className="brief-info">
                        Our charity organization operates in several areas,
                        including:
                    </span>
                    <p className="brief-points">
                        <ul>
                            <li>
                                Education: We believe that education is the key
                                to breaking the cycle of poverty. Our charity
                                organization provides access to education for
                                children who are unable to attend school due to
                                financial constraints. We provide scholarships,
                                school supplies, and other essential resources
                                to ensure that these children have the tools
                                they need to succeed.
                            </li>
                            <li>
                                Health: Our charity organization is committed to
                                improving the health and well-being of
                                individuals in need. We provide medical
                                supplies, treatment, and support to those who
                                are suffering from illnesses such as malaria,
                                tuberculosis, and HIV/AIDS. We also work to
                                improve access to clean water and sanitation to
                                prevent the spread of diseases.
                            </li>
                            <li>
                                Food and Nutrition: Our charity organization is
                                dedicated to providing food and nutrition to
                                those who are facing hunger and malnutrition. We
                                provide food aid, nutrition education, and
                                support to individuals and families in need. We
                                also work to promote sustainable agriculture
                                practices to ensure long-term food security.
                            </li>
                            <li>
                                Emergency Relief: Our charity organization
                                responds to emergencies and natural disasters,
                                providing immediate relief to those affected. We
                                provide emergency shelter, food, and medical
                                care to those who have been displaced or
                                injured.
                            </li>
                        </ul>
                    </p>

                    <h3 className="info-headers">Impact of Our Work:</h3>
                    <span className="brief-info">
                        Our charity organization has made a significant impact
                        in the lives of those we serve. Through our education
                        programs, we have helped children achieve their academic
                        potential and break the cycle of poverty. We have also
                        improved access to healthcare, providing treatment and
                        support to those who are suffering from illnesses. Our
                        food and nutrition programs have helped to reduce hunger
                        and malnutrition in communities around the world. In
                        times of emergencies and natural disasters, our
                        organization has responded quickly, providing essential
                        relief to those affected. We have helped to provide
                        shelter, food, and medical care to those who have been
                        displaced or injured. Our charity organization is
                        committed to making a positive impact on the lives of
                        those in need. We believe that by working together, we
                        can create a better future for all. Our work in
                        education, health, food and nutrition, and emergency
                        relief has made a significant difference in the lives of
                        those we serve. We will continue to work tirelessly to
                        improve the lives of vulnerable individuals, families,
                        and communities around the world.
                    </span>
                </div>
                <div className="side-container">
                    <h3 className="info-headers">Some of our works</h3>
                    <section>
                        {jsonData.map((data, index) => (
                            <section key={index}>
                                <img src={data.img} alt="img" />
                                <p>{data.p}</p>
                                <a className="read-more" href={data.link}>View our Work...</a>
                            </section>
                        ))}
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Work;
