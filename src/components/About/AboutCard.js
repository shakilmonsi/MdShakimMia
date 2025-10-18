import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shakil Monsi </span>
            from <span className="purple">Netrakona, Bangladesh.</span>
            <br />
            I am a <span className="purple">professional Web Developer</span> with strong experience 
            in modern web technologies and user-focused design.
            <br />
            <br />
            I have <span className="purple">18 months of experience</span> working at 
            <span className="purple"> MTS Software Company</span>, where I completed and delivered 
            several successful client projects.
            <br />
            Additionally, I worked for <span className="purple">6 months</span> at 
            <span className="purple"> Bdtask Software Company</span>, gaining valuable hands-on 
            experience in professional software development and teamwork.
            <br />
            <br />
            Apart from coding, some other activities that I love to do:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
