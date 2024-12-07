

import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Open Library",
      description: "Search any book you want",
      imgUrl: "/library.png",
      url: "https://open-library1.netlify.app/"
    },
    {
      title: "Memory Game",
      description: "Test Your Memory with this Game",
      imgUrl: "/memory-game.png",
      url: "https://memory-gamej.netlify.app/"
    },
    {
      title: "The Book Addict",
      description: "E-Commerce bookstore",
      imgUrl: "/book-shop.png",
      url: "https://open-library-book-store.netlify.app/"
    },
    {
      title: "NNN Beauty",
      description: "Static Website",
      imgUrl: "/NNN.png",
      url: ""
    },
    {
      title: "Thought Bubble",
      description: "Fully functional notes app",
      imgUrl: "/notes-app.png",
      url: ""
    },
    {
      title: "Wall Painting",
      description: "Customize the color you want",
      imgUrl: "/wall-paint.png",
      url: "https://wall-painting-shop.netlify.app/"
    },
  ];

  const projects2 = [
    {
      title: "Quiz App",
      description: "Test your knowledge with this test",
      imgUrl: "/test-app.png",
      url: "https://test5-app.netlify.app/"
    },
    {
      title: "Weather App",
      description: "Check the Weather of the city you want",
      imgUrl: "/weather.png",
      url: "https://weather-react-app3.netlify.app/"
    },
    {
      title: "Hangman Game",
      description: "Best Game for programmers",
      imgUrl: "/hangman.png",
      url: "https://hangman-guess-programming.netlify.app/"
    },
    {
      title: "Pizza Burg",
      description: "Menu website with add product functionality",
      imgUrl: "/pizza-burg.png",
      url: "https://pizza-burg.netlify.app/"
    },
    {
      title: "Quikshop",
      description: "Fully functional E-Commerce website",
      imgUrl: "/e-com.png",
      url: ""
    },
    {
      title: "Calculator",
      description: "calculate the number you want",
      imgUrl: "/Calculator.png",
      url: "https://calculator-appj.netlify.app/"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
             
                <div className="animate__animated animate__fadeIn">
                  <h2>My Projects</h2>
                  <p></p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item> */}
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 2</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className="animate__animated animate__slideInUp">
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => {
                                  if (project.url) {
                                    window.open(project.url, '_blank'); // Opens in a new tab
                                  }
                                }}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      {/* <Tab.Pane eventKey="second">
                      <Row>
                          {projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => {
                                  if (project.url) {
                                    window.open(project.url, '_blank'); // Opens in a new tab
                                  }
                                }}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane> */}
                      <Tab.Pane eventKey="third">
                        {/* <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p> */}
                        <Row>
                          {projects2.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                onClick={() => {
                                  if (project.url) {
                                    window.open(project.url, '_blank'); // Opens in a new tab
                                  }
                                }}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
