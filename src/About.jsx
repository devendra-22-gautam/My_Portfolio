import React from "react";
import ReactDom from "react-dom";
import profileImage from './assets/profile.jpg'; // adjust the path as needed

function About() {
    return (
        <>
            <section className="about-section">
                <h2>About Me</h2>
                <div className="about-content">
                    <img src={profileImage} alt="My Photo" />
                    <div className="about-text">
                        <h3>Hi, I'm Devendra 👋</h3>
                        <p>
                            I'm a frontend developer with a passion for creating clean, responsive user interfaces.
                            I work mainly with React, Tailwind CSS, and JavaScript. I'm always looking to improve and
                            take on new challenges.
                        </p>
                        <p>
                            When I'm not coding, I enjoy cricket and exploring new tech trends.
                        </p>
                        <button><a href="/dkresume.pdf" download="My_Resume.pdf" > Download Resume </a></button>
                    </div>
                </div>
            </section>

        </>
    )
} export default About