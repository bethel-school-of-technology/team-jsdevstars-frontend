import React from 'react';
import '../styles/About.css';

function About() {
return (
<div className="about-container">
<header className="about-header">For Dads</header>
<div className="about-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
adipiscing in adipiscing et, interdum nec metus.
</div>
<header className="about-mission-header">We are For Dads</header>
<div className="about-mission-text">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
euismod odio, gravida pellentesque urna varius vitae. Sed dui lorem,
adipiscing in adipiscing et, interdum nec metus.
</div>
<header className="about-team-header">Our Team</header>
<div className="about-team-list">
<div className="about-team-member">
<header className="about-team-member-name">Brett Murray</header>
<div className="about-team-member-position">Assistant Developer</div>
<div className="about-team-member-bio">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
viverra euismod odio, gravida pellentesque urna varius vitae. Sed
dui lorem, adipiscing in adipiscing et, interdum nec metus.
</div>
<img src="" alt="Brett Murray" />
</div>
<div className="about-team-member">
<header className="about-team-member-name">Andrew Chen</header>
<div className="about-team-member-position">CMO</div>
<div className="about-team-member-bio">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
viverra euismod odio, gravida pellentesque urna varius vitae. Sed
dui lorem, adipiscing in adipiscing et, interdum nec metus.
</div>
<img src="" alt="Andrew Chen" />
</div>
</div>
</div>
);
}

export default About;