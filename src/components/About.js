import React from 'react';
import '../styles/About.css';

function About() {
    return (
        <div className="about-container">
            <header className="about-header">For Dads</header>
            <div className="about-text">

            </div>
            <header className="about-mission-header">We are For Dads</header>
            <div className="about-mission-text">
                Mission Statement: For Dads is committed to providing exceptional products and services to support and empower fathers as they navigate the challenges of parenthood. We strive to create a community that celebrates and amplifies the important role of dads, offering resources and guidance to help them build strong relationships with their children and families.
                Our goal is to be a trusted partner for dads everywhere, helping them to be the best parents they can be.
            </div>
            <header className="about-team-header">Our Team</header>
            <div className="about-team-list">
                <div className="about-team-member">
                    <header className="about-team-member-name">Brett Murray</header>
                    <div className="about-team-member-position">Assistant Developer</div>
                    <div className="about-team-member-bio">
                        Brett is one our lead designers. He is a world apart in character and location. Literally he lives in Australia!He is a topnotch developer and a real staple in our company.
                    </div>
                    <img src="/Brett.jpg" alt="Brett.jpg" />
                </div>
                <div className="about-team-member">
                    <header className="about-team-member-name">Andrew Chen</header>
                    <div className="about-team-member-position">CMO</div>
                    <div className="about-team-member-bio">
                        Andrew has over 10 years of experience serving in various leadership positions in the Body of Christ.
                        With a B.A. in Computer Science from U.C. Berkeley and currently studying theology at Portland Bible College, Andrew's passion is to change the world by expressing God's love through different creative outlets

                    </div>
                    <img src="/Andrew.jpeg" alt="Andrew.jpg" />
                </div>
                <header className="about-team-member-name">Felipe Sarres</header>
                <div className="about-team-member-position">Architech</div>
                <div className="about-team-member-bio">
                    Felip is the man behind For Dads . It was his passion to see a healthy space where men and Dads could come together.
                    A platform to empower men to have a community of sharing wisdom and growing together. He is not only thr CEO but a proud DAD!

                </div>
                <img style={{ width: '20%' }} src="/Felipe.jpg" alt="Felipe.jpg" />
            </div>
            <header className="about-team-member-name">Brent Cowan</header>
            <div className="about-team-member-position">Devloper</div>
            <div className="about-team-member-bio">
                Brent is aprt of our ux/design department. He is unique to us in that he works remotley while on the mission field in brazil.
                he is a proud Father of four incredible children.
            </div>
            <img src="/Andrew.jpg" alt="Andrew.jpg" />
        </div>
    );
}

export default About;