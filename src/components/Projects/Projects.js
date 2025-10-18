import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

// Helper component to truncate text
const TruncatedDescription = ({ text, maxLength = 100 }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const shouldTruncate = text.length > maxLength;
  const displayText = isExpanded || !shouldTruncate 
    ? text 
    : text.slice(0, maxLength) + "...";
  
  return (
    <div>
      <p style={{ marginBottom: "10px" }}>{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          style={{
            background: "none",
            border: "none",
            color: "#c770f0",
            cursor: "pointer",
            textDecoration: "underline",
            padding: 0,
            fontSize: "14px"
          }}
        >
          {isExpanded ? "Read less" : "Read more"}
        </button>
      )}
    </div>
  );
};

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Cart24"
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, etc"
                />
              }
              demoLink="https://cart24.com/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Huurscanner"
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, etc"
                />
              }
              demoLink="https://huurscanner.nl/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Taxiloguk.co.uk"
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, firebase, React-router-dom, role access, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="https://taxiloguk.co.uk/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="CoorDeck"
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: firebase, that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="https://alex.mtscorporate.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Appointment "
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="https://doctorprotailfive-main.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Feel the Sound "
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="https://beatzingeez.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="للبيع "
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="https://skywalker.mtscorporate.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Luxefashionclothing "
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="https://luxefashionclothing.com/"
            />
          </Col>
       

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Bundoora "
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is react.js, tailwindcss, daisyui, reactToast, React-router-dom, Firebase, React-query, React-Hook-form, JWT, stripe, etc"
                />
              }
              demoLink="http://w84sww04ws4s4k0448s8488w.31.97.187.18.sslip.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="NEWS WORLD"
              description={
                <TruncatedDescription 
                  text="I used everything to make this website: that is - JavaScript, API, template operator bootstrap - dynamic full Project"
                />
              }
              demoLink="https://653aa918d2a14516a7ac599a--clinquant-marzipan-1cb69e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Brain-quiz"
              description={
                <TruncatedDescription 
                  text="Online code and markdown editor build with react.js. Online Editor which supports html, css, and js code with instant view of website. Online markdown editor for building README file which supports GFM, Custom Html tags with toolbar and instant preview. Both the editor supports auto save of work using Local Storage"
                />
              }
              demoLink="https://stellar-dusk-f19eaa.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;