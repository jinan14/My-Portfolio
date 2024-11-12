


import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {

  return (
    <section className="contact" style={{ backgroundImage: `url("/banner-bg.png")` }} id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="About image" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>About ME  </h2>
                  <hr/>
                  <Row>
                    <p>
                      I’m Jinan Ghannam, a dedicated computer science student with a strong foundation in full-stack web development.
                    </p>
                    <p>
                      I enjoy creating dynamic, user-friendly, and functional websites that enhance the overall user experience.
                    </p>
                    <p>
                      I have solid skills in HTML, CSS, JavaScript, React, Express.js and MongoDB successfully completing a variety of projects.
                    </p>
                    <p>
                      I thrive in collaborative environments where I can contribute my problem-solving abilities and leadership skills.
                    </p>
                    <p>
                      I believe my enthusiasm and technical proficiency will add significant value to any team.
                    </p>
                  </Row>

                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
