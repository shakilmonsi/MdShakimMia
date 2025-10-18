import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import 'bootstrap/dist/css/bootstrap.min.css';
import Cms from "../Cms";
import ProjectCounter from "../ProjectCounter";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",      
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>

      <div>
       
       
        <ProjectCounter />
      </div>
      <div className="professional_part">
          <h1 className="project-heading pading_profesilapart" >
          Professional <strong className="purple">Skillset </strong>
        </h1>
       
        <Techstack />
      </div>
    <div className="cms_part">
          
        <h1 className="project-heading">
          CMS &  <strong className="purple">E-commerce Expertise </strong>
        </h1>
       
        <Cms />
    </div>

        {/* <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1> */}
        {/* <Toolstack /> */}

        <Github />
      </Container>
    </Container>
  );
}

export default About;
