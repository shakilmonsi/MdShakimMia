import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/myimg.png";
import mybg from "../../Assets/mybg.png";

import About from "../About/About";
import Contact from "../Contact/Contact";
import Particle from "../Particle";
import Projects from "../Projects/Projects";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Shakil Monsi</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{paddingBottom: 20

  }}>
            <div style={{  borderRadius:"100px",
    background: `url(${mybg})`
  }}>
            <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </div>
            </Col>
          </Row>
        </Container>
      </Container>
      <About />
      <Projects />
      <Contact />
      {/* <Home2 /> */}
    </section>
  );
}

export default Home;
