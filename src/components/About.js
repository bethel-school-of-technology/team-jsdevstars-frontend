import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div style={{ textAlign: 'center' }} className="about-container">
            <header className="about-header">We are for Dads</header>
            <div className="about-text">
            </div>
            <div className="about-team-list">
                <div className="about-team-member">
                    <header className="about-team-member-name">Brett Murray</header>
                    <div className="about-team-member-position">Skilled Fullstack Developer</div>
                    <div className="about-team-member-bio">
                        Brett is one our lead designers. He is a world apart in character and location. Literally he lives in Australia!He is a topnotch developer and a real staple in our company.
                    </div>
                    <img src="/Brett.jpg" alt="Brett.jpg" />
                </div>
                <hr />
                <div className="about-team-member">
                    <header className="about-team-member-name">Andrew Chen</header>
                    <div className="about-team-member-position">Mastermind Software Developer</div>
                    <div className="about-team-member-bio">
                        Andrew has over 10 years of experience serving in various leadership positions in the Body of Christ.
                        With a B.A. in Computer Science from U.C. Berkeley and currently studying theology at Portland Bible College, Andrew's passion is to change the world by expressing God's love through different creative outlets

                    </div>
                    <img src="/Andrew.jpeg" alt="Andrew.jpg" />
                </div>
                <header className="about-team-member-name">Felipe Sarres</header>
                <div className="about-team-member-position">Awesome Software Developer</div>
                <div className="about-team-member-bio">
                    Felipe is the man behind For Dads . It was his passion to see a healthy space where men and Dads could come together.
                    A platform to empower men to have a community of sharing wisdom and growing together. He is not only the CEO but a proud DAD!

                </div>
                <img style={{ width: '25%' }} src="/Felipe.jpg" alt="Felipe.jpg" />
            </div>
            <header className="about-team-member-name">Brent Cowan</header>
            <div className="about-team-member-position">Creative Software Developer</div>
            <div className="about-team-member-bio">
                Brent is part of our ux/design department. He is unique to us in that he works remotely while on the mission field in Brazil 🇧🇷.
                He is a proud Father of four incredible children.
            </div>
            <img src="/brent.jpg" alt="Brent.jpg" />
        </div>
    );
}

export default About;